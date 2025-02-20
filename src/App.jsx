import './styles/App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services  from './components/Services'
import BenCon from './components/BenCon'
import CommentSection from './components/CommentSection'
import TablePlans from './components/tablePlans'
import PlansSection from './components/PlansSection'
import TablePriceSection from './components/TablePriceSection'
import Footer from './components/Footer'

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
      <Footer/>

    </div>
  )
}

export default App