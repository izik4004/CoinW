import './index.css';
import Home from './pages/Home'
import More from './pages/More'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/more" exact element={<More />} />
      </Routes>
        {/* <Home /> */}
      </Router>
    </> 
  );
}

export default App;
