import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImage from "../../assets/istockphoto-1130884625-612x612.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to={"/add-products"}>Add Product</NavLink>{" "}
      </li>
      <li>
        <NavLink to={"/cart"}>My Cart</NavLink>{" "}
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">AS-gadget</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && <Link className="user-name">{user.displayName}</Link>}

          <div className="avatar mx-2">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL ? user?.photoURL : userImage} />
            </div>
          </div>

          {!user ? (
            <Link to={"/login"} className="nav-btn">
              Login
            </Link>
          ) : (
            <Link onClick={handleLogOut} className="nav-btn">
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
