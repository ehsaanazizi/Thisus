import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Store from "./pages/Store/Store.jsx";
import Contact from "./pages/Contact-us/Contact.jsx";
import About from "./pages/About/About.jsx";




function App() {
  return( 
    <div>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
       </Routes>
     </BrowserRouter>
     
    </div>
  
  
  );
}

export default App;
