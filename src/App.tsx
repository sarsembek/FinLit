import './App.css'
import { LogoSlider } from './components/LogoSlider/LogoSlider'
import NavigationMenu from './components/NavigationMenu'
import { Banner } from './components/banner/Banner'
import { CreditCardDesigner } from './components/creditCard/CreditCardDesigner'
import { CreditCardSection } from './components/creditCard/CreditCardSection'
import { CTASection } from './components/cta/CTASection'
import { FAQ } from './components/faq/FAQ'
import { Features } from './components/features/Features'
import { Footer } from './components/footer/Footer'
import { StatsSection } from './components/stats/StatsSection'
import { TestimonialSection } from './components/testimonials/TestimonialSection'

function App() {

  return (
    <main
      className="relative flex overflow-hidden flex-col pb-2.5 bg-zinc-900"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the main element takes full viewport height
        width: "100vw", // Ensure it takes full viewport width
        margin: "0", // Remove default margin
      }}
    >
      <div className="relative flex flex-col items-center w-full pt-8">
        <NavigationMenu />
        <Banner />
        <StatsSection />
        <LogoSlider />
        <Features />
        <CreditCardDesigner />
        <CreditCardSection />
        <TestimonialSection />
        <FAQ />
        <CTASection />
        <Footer />
        {/* Add other components like <Banner />, <AboutStats />, etc. here */}
      </div>
    </main>
  )
}

export default App
