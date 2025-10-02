import {
  BarChart3,
  LayoutDashboard,
  Users,
  FolderKanban,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useLocation } from "wouter";

const menuItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analyses",
    url: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Équipe",
    url: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Projets",
    url: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Calendrier",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const [location, setLocation] = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-2 py-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-base font-bold">BizManager</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setLocation(item.url)}
                    isActive={location === item.url}
                    data-testid={`button-nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setLocation("/dashboard/settings")}
                  isActive={location === "/dashboard/settings"}
                  data-testid="button-nav-settings"
                >
                  <Settings className="h-4 w-4" />
                  <span>Paramètres</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setLocation("/")} data-testid="button-logout">
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
