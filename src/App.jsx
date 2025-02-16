import './styles/App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CommentSection from './../src/components/CommentSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommentSection />
    </div>
  );
}

export default App;