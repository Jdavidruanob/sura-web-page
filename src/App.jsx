// App.jsx
import './styles/App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import BenCon from './components/BenCon'
import CommentSection from './components/CommentSection'
import TablePlans from './components/tablePlans'
import PlansSection from './components/PlansSection'
import TablePriceSection from './components/TablePriceSection'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <HeroSection />
        <Services/>
        <BenCon/>
        <PlansSection/>
        <TablePriceSection/> 
        {/* <TablePlans/> */}
        {/* <CommentSection/> */}
      </div>
      <WhatsAppButton />
    </>
  )
}

export default App