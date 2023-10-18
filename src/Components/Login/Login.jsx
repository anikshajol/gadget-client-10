import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/pexels-armand-valendez-544295.jpg";
import { useContext, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { loginUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // sign in

    setError("");

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Login!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //   google sign in

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Login With Your Google Account!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
      className=" hero h-screen "
    >
      <div className="hero-overlay bg-black bg-opacity-90 "></div>
      <div className="w-full mx-auto max-w-sm p-4 bg-transparent  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-white dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button type="submit" className="w-full primary-btn">
            Login to your account
          </button>
        </form>

        <div className="">
          <button
            onClick={handleGoogleSignIn}
            className="w-full my-3 py-2 border border-[#ffbe30] btn-outline text-white rounded-3xl"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl">
                <FcGoogle />
              </span>
              <p>Login With Google</p>
            </div>
          </button>
          <div className="text-sm font-medium text-center text-white dark:text-gray-300">
            Not registered?{" "}
            <Link
              to={"/register"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
