import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "../mongo";

const router = Router();

// Route de connexion existante
router.post("/login", async (req, res) => {
    console.log("Route /login appelée avec:", req.body);

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            console.log("Champs manquants");
            return res.status(400).json({ error: "Nom d'utilisateur et mot de passe requis" });
        }

        console.log("Tentative de connexion à la base de données...");
        const db = await connectToDatabase();
        console.log("Connexion à la base réussie");

        console.log("Recherche de l'utilisateur:", username);
        const user = await db.collection("users").findOne({ username });
        console.log("Utilisateur trouvé:", user ? "Oui" : "Non");

        if (!user) {
            console.log("Utilisateur non trouvé");
            return res.status(401).json({ error: "Identifiants invalides" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        console.log("Mot de passe valide:", isValidPassword);

        if (!isValidPassword) {
            console.log("Mot de passe incorrect");
            return res.status(401).json({ error: "Identifiants invalides" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "24h" }
        );

        res.json({
            message: "Connexion réussie",
            token,
            user: { id: user._id, username: user.username }
        });

    } catch (error) {
        console.error("Erreur complète:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

// Nouvelle route d'inscription
router.post("/register", async (req, res) => {
    console.log("Route /register appelée avec:", req.body);

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "Tous les champs sont requis" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Le mot de passe doit contenir au moins 6 caractères" });
        }

        const db = await connectToDatabase();

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await db.collection("users").findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({
                error: existingUser.username === username
                    ? "Ce nom d'utilisateur est déjà pris"
                    : "Cet email est déjà utilisé"
            });
        }

        // Hasher le mot de passe
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Créer le nouvel utilisateur
        const newUser = {
            username,
            email,
            password: hashedPassword,
            createdAt: new Date()
        };

        const result = await db.collection("users").insertOne(newUser);

        // Générer le token JWT
        const token = jwt.sign(
            { userId: result.insertedId, username },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "24h" }
        );

        res.status(201).json({
            message: "Compte créé avec succès",
            token,
            user: { id: result.insertedId, username, email }
        });

    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

export default router;
