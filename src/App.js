
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthProvider from './context/auth';
import Inhome from './pages/Inhome';
import Profile from "./pages/Profile";
import Chathome from "./pages/Chathome";
import Stories from './components/Stories';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
  
    <Navbar/>
    

  
  
    <Routes>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/inhome' element={<Inhome/>}/>
      <Route exact path='/chathome' element={<Chathome/>}/>
     <Route exact path='/profile'element={<Profile/>}/>
    
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
  
}



export default App;
