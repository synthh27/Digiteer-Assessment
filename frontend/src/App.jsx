import './App.css'
import Navbar from "./components/NavBar.jsx";
import Tasks from "./pages/Tasks.jsx"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";

function App() {
  return (

      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <div className="w-full h-screen flex flex-col ">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route
                path="/tasks"
                element={
                  <ProtectedRoute>
                    <Tasks />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App
