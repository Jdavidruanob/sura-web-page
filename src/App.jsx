import './styles/App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services  from './components/Services'
import BenCon from './components/BenCon'
import CommentSection from './components/CommentSection'
import TablePlans from './components/tablePlans'


function App() {
  return ( 
    <div>
      <Navbar />
      <HeroSection />
      <Services/>
      <BenCon/>
      
      <TablePlans/>
      <CommentSection/>


      
      
    </div>
  )
}

export default App