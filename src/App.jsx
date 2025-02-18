import './styles/App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services  from './components/Services'
import BenCon from './components/BenCon'
import CommentSection from './components/CommentSection'
import TablePlans from './components/tablePlans'
import PlansSection from './components/PlansSection'
import TablePriceSection from './components/TablePriceSection'
function App() {
  return ( 
    <div>
      <Navbar />
      <HeroSection />
      <Services/>
      <BenCon/>
      <PlansSection/>
      <TablePriceSection/>
      <TablePlans/>
      <CommentSection/>
    </div>
  )
}

export default App