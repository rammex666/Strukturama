import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  FolderKanban,
  ArrowUp,
  ArrowDown,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Revenus Totaux",
      value: "€124,500",
      change: "+12.5%",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Projets Actifs",
      value: "18",
      change: "+3",
      trend: "up",
      icon: FolderKanban,
    },
    {
      title: "Membres d'Équipe",
      value: "42",
      change: "+5",
      trend: "up",
      icon: Users,
    },
    {
      title: "Taux de Complétion",
      value: "87%",
      change: "-2%",
      trend: "down",
      icon: TrendingUp,
    },
  ];

  const recentProjects = [
    {
      name: "Refonte Site Web",
      status: "in-progress",
      progress: 65,
      team: ["JD", "SM", "MD"],
      dueDate: "15 Mar 2025",
    },
    {
      name: "Application Mobile",
      status: "in-progress",
      progress: 40,
      team: ["AB", "CD"],
      dueDate: "30 Mar 2025",
    },
    {
      name: "Campagne Marketing",
      status: "completed",
      progress: 100,
      team: ["EF", "GH", "IJ"],
      dueDate: "10 Mar 2025",
    },
  ];

  const recentTasks = [
    {
      title: "Révision du budget Q1",
      status: "pending",
      priority: "high",
      assignee: "Sophie Martin",
    },
    {
      title: "Réunion avec le client",
      status: "in-progress",
      priority: "medium",
      assignee: "Marc Dubois",
    },
    {
      title: "Rapport de performance",
      status: "completed",
      priority: "low",
      assignee: "Julie Bernard",
    },
    {
      title: "Mise à jour documentation",
      status: "pending",
      priority: "medium",
      assignee: "Alex Dupont",
    },
  ];

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-chart-2/20 text-chart-2 border-chart-2/30";
      case "in-progress":
        return "bg-primary/20 text-primary border-primary/30";
      default:
        return "bg-muted text-muted-foreground border-muted-foreground/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30";
      default:
        return "bg-muted text-muted-foreground border-muted-foreground/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle2;
      case "in-progress":
        return Clock;
      default:
        return AlertCircle;
    }
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b gap-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-2xl font-bold" data-testid="text-dashboard-title">
                Tableau de bord
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Avatar data-testid="avatar-user">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <Card key={index} data-testid={`card-stat-${index}`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold" data-testid={`text-stat-value-${index}`}>
                        {stat.value}
                      </div>
                      <div className="flex items-center text-sm mt-1">
                        {stat.trend === "up" ? (
                          <ArrowUp className="h-4 w-4 text-chart-2 mr-1" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-destructive mr-1" />
                        )}
                        <span
                          className={
                            stat.trend === "up" ? "text-chart-2" : "text-destructive"
                          }
                        >
                          {stat.change}
                        </span>
                        <span className="text-muted-foreground ml-1">vs mois dernier</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 gap-2">
                    <CardTitle data-testid="text-projects-title">Projets Récents</CardTitle>
                    <Button size="sm" className="gap-1" data-testid="button-add-project">
                      <Plus className="h-4 w-4" />
                      Nouveau
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <div
                        key={index}
                        className="space-y-2 p-4 rounded-lg hover-elevate border"
                        data-testid={`card-project-${index}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold">{project.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Échéance: {project.dueDate}
                            </p>
                          </div>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status === "completed"
                              ? "Terminé"
                              : project.status === "in-progress"
                              ? "En cours"
                              : "En attente"}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progression</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {project.team.map((member, i) => (
                              <Avatar key={i} className="h-7 w-7 border-2 border-background">
                                <AvatarFallback className="text-xs bg-primary/10">
                                  {member}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {project.team.length} membres
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 gap-2">
                    <CardTitle data-testid="text-tasks-title">Tâches Récentes</CardTitle>
                    <Button size="sm" className="gap-1" data-testid="button-add-task">
                      <Plus className="h-4 w-4" />
                      Nouvelle
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentTasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover-elevate border gap-2"
                        data-testid={`card-task-${index}`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {(() => {
                            const StatusIcon = getStatusIcon(task.status);
                            return <StatusIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />;
                          })()}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{task.title}</h4>
                            <p className="text-xs text-muted-foreground truncate">
                              {task.assignee}
                            </p>
                          </div>
                        </div>
                        <Badge className={`${getPriorityColor(task.priority)} flex-shrink-0`}>
                          {task.priority === "high"
                            ? "Élevée"
                            : task.priority === "medium"
                            ? "Moyenne"
                            : "Basse"}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
