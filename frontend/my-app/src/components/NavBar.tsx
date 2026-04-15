import { NavLink } from "react-router-dom";

const NavBar = () => {
  const base =
    "px-4 py-3 text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition";

  const active =
    "text-purple-600 border-purple-600 font-medium";

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Top bar */}
      <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
          <span className="text-sm font-medium text-gray-800">
            Salary Predictor · Random Forest
          </span>
        </div>
        <span className="text-xs text-gray-400">ML Project</span>
      </div>

      {/* Tabs */}
      <nav className="flex px-5">
        <NavLink
          to="/dataset_info"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ""}`
          }
        >
          Dataset
        </NavLink>

        <NavLink
          to="/get_prediction"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ""}`
          }
        >
          Get Prediction
        </NavLink>

        <NavLink
          to="/model_info"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ""}`
          }
        >
          Model Info
        </NavLink>

        <NavLink
          to="/about_me"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ""}`
          }
        >
          About Me
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;