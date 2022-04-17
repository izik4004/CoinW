import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import './index.css';
import Featured from './components/Featured/Featured';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured/>
      <Signup/>
      <Footer />
    </>
  );
}

export default App;
