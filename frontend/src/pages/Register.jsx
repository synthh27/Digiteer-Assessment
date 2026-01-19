import {isValidEmail, isValidPassword} from "../helpers/Helpers.js";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Validations
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // SET ERROR MESSAGE IF INVALID EMAIL FORMAT
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // SET ERROR MESSAGE IF PASSWORD TOO SHORT
    if (!isValidPassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // SET ERROR MESSAGE IF PASSWORDS DON'T MATCH
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // REGISTER USER
    localStorage.setItem("registeredUser", JSON.stringify({email, password}));
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6  w-96 r bg-gray-800 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />


        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>


        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
