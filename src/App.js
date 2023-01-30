import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import All from "./All"
import Electronics from './Electronics';
import MensCloth from './MensCloth';
import WomenCloths from './WomenCloths';

function App() {

return (
    <div className="App">
     <h1>SnapShot</h1>
     <Router>
     <Link to="/"><button>All</button></Link><span> </span>
     <Link to="/electronics"><button>Electronics</button></Link> <span></span>
     <Link to="/men's clothing"><button>Mens Clothing</button></Link> <span> </span>
     <Link to="/women's clothing"><button>Women Clothing</button></Link> <span> </span>
      <Routes>
        <Route  path='/' element={<All/>} />
        <Route path='/electronics' element={<Electronics/>} />
        <Route path="/men's clothing" element={<MensCloth/>} />
        <Route path="/women's clothing" element={<WomenCloths />} />
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
