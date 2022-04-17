import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import './index.css';
import Featured from './components/Featured/Featured';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured/>
      <Signup/>
    </>
  );
}

export default App;
