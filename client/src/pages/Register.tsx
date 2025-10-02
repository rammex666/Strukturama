import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BarChart3, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast({
                title: "Erreur",
                description: "Les mots de passe ne correspondent pas",
                variant: "destructive",
            });
            return;
        }

        if (password.length < 6) {
            toast({
                title: "Erreur",
                description: "Le mot de passe doit contenir au moins 6 caractères",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            console.log("Envoi de la requête à /api/auth/register");

            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            console.log("Réponse reçue:", response.status, response.statusText);

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Erreur serveur - réponse non JSON");
            }

            const data = await response.json();

            if (response.ok) {
                console.log("Inscription réussie:", data);

                // Sauvegarder le token et les infos utilisateur
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast({
                    title: "Compte créé avec succès",
                    description: "Redirection vers le tableau de bord...",
                });

                setTimeout(() => {
                    setLocation("/dashboard");
                }, 500);
            } else {
                toast({
                    title: "Erreur lors de la création du compte",
                    description: data.error || "Une erreur est survenue",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Erreur dans handleSubmit:", error);
            toast({
                title: "Erreur",
                description: "Impossible de créer le compte. Vérifiez votre connexion.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/">
                            <Button variant="ghost" className="gap-2" data-testid="button-back">
                                <ArrowLeft className="h-4 w-4" />
                                Retour
                            </Button>
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <div className="flex-1 flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                                <BarChart3 className="h-7 w-7 text-primary-foreground" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl text-center" data-testid="text-register-title">
                            Créer un compte
                        </CardTitle>
                        <CardDescription className="text-center">
                            Commencez à gérer votre entreprise dès aujourd'hui
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Nom d'utilisateur</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Choisissez un nom d'utilisateur"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    data-testid="input-username"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    data-testid="input-email"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Créez un mot de passe sécurisé (min. 6 caractères)"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    data-testid="input-password"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirmez votre mot de passe"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    data-testid="input-confirm-password"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                                data-testid="button-submit"
                            >
                                {isLoading ? "Création..." : "Créer mon compte"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <span className="text-muted-foreground">Vous avez déjà un compte ? </span>
                            <Link href="/login">
                                <a className="text-primary font-medium hover:underline" data-testid="link-login">
                                    Se connecter
                                </a>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
