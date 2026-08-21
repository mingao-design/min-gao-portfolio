import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SiteShell } from "./components/SiteShell";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Writing from "./pages/Writing";
import ResearchDetail from "./pages/ResearchDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";


function Routes() {
  return (
    <SiteShell><Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/projects/:slug"} component={ProjectDetail} />
      <Route path={"/writing/:slug"} component={ResearchDetail} />
      <Route path={"/writing"} component={Writing} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch></SiteShell>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider><TooltipProvider>
          <Toaster />
          <WouterRouter hook={useHashLocation}><Routes /></WouterRouter>
        </TooltipProvider></LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
