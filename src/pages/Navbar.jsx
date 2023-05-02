
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="bg-transparent ml-2 uppercase text-gray-700 font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink className="bg-transparent ml-2 uppercase text-gray-700 font-medium">Blog</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-4xl"><span className="text-orange-500 text-5xl">F</span>oo<span className="text-orange-500 text-5xl">d</span>ie</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="bg-transparent ml-2 uppercase text-gray-700 font-medium">Home</NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent ml-2 uppercase text-gray-700 font-medium">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className="btn" to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
