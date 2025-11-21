import ResponsiveHeader from "@/components/responsive-header"
import RedesignedHero from "@/components/redesigned-hero"
import AboutSection from "@/components/about-section"
import RedesignedSkills from "@/components/redesigned-skills"
import RedesignedExperience from "@/components/redesigned-experience"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import Organizations from "@/components/organizations"
import Interests from "@/components/interests"
import Publications from "@/components/publications"
import Education from "@/components/education"
import EnhancedFooter from "@/components/enhanced-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ProgressiveLoadingProvider } from "@/components/progressive-loading-provider"
import { LoadingProgress } from "@/components/loading-progress"
import { ErrorBoundary } from "@/components/error-boundary"
import ClientDiagnosticWrapper from "@/components/client-diagnostic-wrapper"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ProgressiveLoadingProvider>
        <ErrorBoundary>
          <ClientDiagnosticWrapper>
            <div className="min-h-screen bg-background">
              <LoadingProgress />
              <ResponsiveHeader />

              <main>
                <RedesignedHero />
                <AboutSection />
                <Education />
                <RedesignedSkills />
                <RedesignedExperience />
                <Certifications />
                <Projects />
                <Organizations />
                <Interests />
                <Publications />
              </main>

              <EnhancedFooter />
              <Toaster />
            </div>
          </ClientDiagnosticWrapper>
        </ErrorBoundary>
      </ProgressiveLoadingProvider>
    </ThemeProvider>
  )
}
