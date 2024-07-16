import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import {Navbar} from './components/Navbar';
import {Error} from './pages/Error';
import {Footer} from './components/Footer';
import '../src/index.css'

const App =()=>{
  return (<>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="/services" element = {<Services/>}/>
    <Route path="/register" element = {<Register/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>)
};

export default App;