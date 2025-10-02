import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BarChart3, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Connexion réussie",
        description: "Redirection vers le tableau de bord...",
      });
      setTimeout(() => {
        setLocation("/dashboard");
      }, 500);
    }, 1000);
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
            <CardTitle className="text-2xl text-center" data-testid="text-login-title">
              Connexion
            </CardTitle>
            <CardDescription className="text-center">
              Accédez à votre compte BizManager
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Entrez votre nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  data-testid="input-username"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="input-password"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
                data-testid="button-submit"
              >
                {isLoading ? "Connexion..." : "Se connecter"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Pas encore de compte ? </span>
              <Link href="/register">
                <a className="text-primary font-medium hover:underline" data-testid="link-register">
                  Créer un compte
                </a>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
