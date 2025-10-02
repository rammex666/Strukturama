import dotenv from "dotenv";
dotenv.config();

import { MongoClient, Db } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    throw new Error("MONGODB_URI doit être défini dans les variables d'environnement.");
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<Db> {
    if (db) {
        return db;
    }

    try {
        // @ts-ignore
        client = new MongoClient(mongoUri);
        await client.connect();
        db = client.db("strukturama");
        console.log("Connecté à MongoDB");
        return db;
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        throw error;
    }
}

export async function closeDatabaseConnection(): Promise<void> {
    if (client) {
        await client.close();
        console.log("Connexion MongoDB fermée");
    }
}
