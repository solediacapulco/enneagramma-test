import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import WelcomeScreen from "./pages/WelcomeScreen";
import QuestionsScreen from "./pages/QuestionsScreen";
import ResultsScreen from "./pages/ResultsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useEffect } from "react";
import { useEnneagram } from "./context/EnneagramContext";
import { EnneagramProvider } from "./context/EnneagramContext";
import { AccessibilityProvider } from "./context/AccessibilityContext";

function Router() {
  const [location] = useLocation();
  const { resetTest } = useEnneagram();

  // Reset test if user goes back to welcome screen
  useEffect(() => {
    if (location === "/") {
      resetTest();
    }
  }, [location, resetTest]);

  return (
    <Switch>
      <Route path="/" component={WelcomeScreen} />
      <Route path="/questions" component={QuestionsScreen} />
      <Route path="/results" component={ResultsScreen} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <EnneagramProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
              <Router />
            </main>
            <Footer />
            <Toast />
          </div>
          <Toaster />
        </EnneagramProvider>
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}

export default App;
