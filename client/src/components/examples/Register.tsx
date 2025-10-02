import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "../ThemeProvider";
import Register from "@/pages/Register";
import { Toaster } from "@/components/ui/toaster";

export default function RegisterExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Register />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
