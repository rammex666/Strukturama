import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import heroImage from "@assets/generated_images/Business_dashboard_hero_screenshot_fd175dc8.png";
import teamImage from "@assets/generated_images/Team_collaboration_feature_illustration_39634bb1.png";
import analyticsImage from "@assets/generated_images/Analytics_feature_screenshot_0f45cd87.png";
import taskImage from "@assets/generated_images/Task_management_feature_screenshot_1dfecbd2.png";

export default function Landing() {
  const features = [
    {
      icon: BarChart3,
      title: "Analyses en Temps Réel",
      description: "Visualisez vos métriques clés avec des tableaux de bord interactifs et des rapports personnalisables.",
    },
    {
      icon: Users,
      title: "Gestion d'Équipe",
      description: "Coordonnez facilement votre équipe avec des outils de collaboration avancés.",
    },
    {
      icon: Calendar,
      title: "Planification Intelligente",
      description: "Organisez vos projets et tâches avec un calendrier intuitif et des rappels automatiques.",
    },
    {
      icon: TrendingUp,
      title: "Suivi de Performance",
      description: "Mesurez et optimisez la productivité de votre entreprise avec des KPIs détaillés.",
    },
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Protégez vos données avec un chiffrement de bout en bout et des contrôles d'accès.",
    },
    {
      icon: Zap,
      title: "Automatisation",
      description: "Gagnez du temps en automatisant les tâches répétitives et les workflows.",
    },
  ];

  const benefits = [
    {
      title: "Collaboration Sans Limite",
      description: "Travaillez ensemble en temps réel, partagez des documents et communiquez efficacement avec votre équipe, peu importe où vous êtes.",
      image: teamImage,
    },
    {
      title: "Analyses Puissantes",
      description: "Prenez des décisions éclairées grâce à des rapports détaillés et des visualisations de données intuitives.",
      image: analyticsImage,
    },
    {
      title: "Gestion de Tâches Simplifiée",
      description: "Organisez vos projets, assignez des tâches et suivez les progrès avec une interface claire et efficace.",
      image: taskImage,
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice Générale",
      company: "TechStart",
      content: "BizManager a transformé notre façon de travailler. La productivité de notre équipe a augmenté de 40% en seulement 3 mois.",
      avatar: "SM",
      rating: 5,
    },
    {
      name: "Marc Dubois",
      role: "Chef de Projet",
      company: "InnovateCorp",
      content: "Un outil indispensable pour toute entreprise moderne. L'interface est intuitive et les fonctionnalités sont exactement ce dont nous avions besoin.",
      avatar: "MD",
      rating: 5,
    },
    {
      name: "Julie Bernard",
      role: "Responsable RH",
      company: "PeopleFirst",
      content: "La gestion d'équipe n'a jamais été aussi simple. BizManager nous permet de rester organisés et de garder tout le monde sur la même longueur d'onde.",
      avatar: "JB",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BizManager</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-features">
                Fonctionnalités
              </a>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-benefits">
                Avantages
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-testimonials">
                Témoignages
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost" data-testid="button-login">
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button data-testid="button-register">
                  Commencer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" data-testid="badge-trust">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Utilisé par 500+ entreprises
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
                Gérez votre entreprise en toute{" "}
                <span className="text-primary">simplicité</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
                BizManager vous offre tous les outils nécessaires pour piloter votre entreprise efficacement. Tableau de bord intuitif, collaboration d'équipe et analyses puissantes en un seul endroit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <Button size="lg" className="gap-2" data-testid="button-hero-cta">
                    Essayer gratuitement
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" data-testid="button-demo">
                  Voir la démo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dashboard BizManager"
                  className="w-full h-auto"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-features-title">
              Fonctionnalités Puissantes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
              Tout ce dont vous avez besoin pour gérer votre entreprise de manière efficace et professionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-24">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`section-benefit-${index}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-auto"
                      data-testid={`img-benefit-${index}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejoignez des centaines d'entreprises qui ont transformé leur gestion avec BizManager.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-cta-title">
                Prêt à Transformer Votre Entreprise ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines d'entreprises qui utilisent déjà BizManager pour optimiser leur gestion quotidienne.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" data-testid="button-cta-register">
                    Commencer Gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" data-testid="button-cta-contact">
                  Nous Contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">BizManager</span>
              </div>
              <p className="text-sm text-muted-foreground">
                L'outil de gestion d'entreprise moderne et intuitif.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sécurité</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Carrières</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 BizManager. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
