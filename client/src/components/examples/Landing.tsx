import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "../ThemeProvider";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/toaster";

export default function LandingExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Landing />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
