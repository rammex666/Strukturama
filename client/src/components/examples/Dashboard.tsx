import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "../ThemeProvider";
import Dashboard from "@/pages/Dashboard";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Dashboard />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
