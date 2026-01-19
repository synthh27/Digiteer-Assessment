import { useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";

function Navbar() {
  const { user, logout } = useContext(AuthContext); // Assuming logoutUser is provided by context
  const navigate = useNavigate();

  const logoutUser = () => {
    console.log("logout");
    logout();
    navigate("/login");
  };

  const isLoggedIn = !!user;

  return (
    <nav className="w-full bg-gray-800 py-1 float-left flex justify-center items-center shadow-md">
      <div className="w-4/5 flex flex-row justify-between items-center py-2">
        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          📝 React Task Evaluator
        </h1>
        {/* Button */}
        {isLoggedIn && (
          <button
            onClick={logoutUser}
            className="px-4 py-2 rounded-sm text-xs font-medium transition bg-red-500 hover:bg-red-600">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
