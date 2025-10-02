import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "../ThemeProvider";
import Login from "@/pages/Login";
import { Toaster } from "@/components/ui/toaster";

export default function LoginExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Login />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
