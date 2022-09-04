
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useLocation  } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  console.log()
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
