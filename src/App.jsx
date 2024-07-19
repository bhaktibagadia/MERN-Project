import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { AdditionalInfo } from './components/AdditionalInfo';
import ProtectedRoute  from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { Error } from './pages/Error';
import { Footer } from './components/Footer';
import { Logout } from './pages/Logout';
import { AuthProvider } from './store/auth';
import '../src/index.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/additional-info' element={<AdditionalInfo/>}/> */}
          <Route path="/additional-info" element={<ProtectedRoute><AdditionalInfo /></ProtectedRoute>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
