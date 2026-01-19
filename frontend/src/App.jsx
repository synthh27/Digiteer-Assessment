import './App.css'
import Navbar from "./components/NavBar.jsx";
import Tasks from "./pages/Tasks.jsx"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className="w-full h-screen flex flex-col ">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App
