
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { isValidEmail } from "../helpers/Helpers.js";
import AuthContext  from "../context/AuthContext.jsx";
import api from "../api/axios.js";

const Login = () => {
  // const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // SET ERROR MESSAGE IF INVALID EMAIL
      if (!isValidEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      const res = await api.post('/auth/login', { email, password });
      login(res.data.token);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6  w-96 r bg-gray-800 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
