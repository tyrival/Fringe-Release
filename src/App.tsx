import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { FileText, Palette, HardDrive, Search } from 'lucide-react'
import FringeMockup from './components/FringeMockup'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  return (
    <div className="bg-surface min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection
        id="editor"
        icon={FileText}
        mockup={<FringeMockup variant="editor" />}
        reverse={false}
      />
      <FeatureSection
        id="color"
        icon={Palette}
        mockup={<FringeMockup variant="color" />}
        reverse={true}
      />
      <FeatureSection
        id="search"
        icon={Search}
        mockup={<FringeMockup variant="search" />}
        reverse={false}
      />
      <FeatureSection
        id="backup"
        icon={HardDrive}
        mockup={<FringeMockup variant="backup" />}
        reverse={true}
      />
      <CTA />
      <Footer />
    </div>
  )
}
