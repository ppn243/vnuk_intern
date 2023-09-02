import { Link } from "react-router-dom";
import { useState } from "react";
import Context from "../Context/Context";
import { useContext } from "react";

const AdminLoginModal = ({ handleClose }: any) => {
  const [notify, setNotify] = useState("");
  const [admin, setAdmin]: any = useContext(Context);
  const onLogin = () => {
    const email = document.getElementById("email")! as HTMLInputElement;
    const password = document.getElementById("password")! as HTMLInputElement;

    console.log(admin);

    if (email.value === admin.email && password.value === admin.password) {
      setAdmin({ ...admin, isLogin: true });
      console.log(admin);
      setNotify("");
      handleClose();
    }else{
      setNotify("Login failed");
    }

  };

  return (
    <>
      <div className="space-y-6">
        <p className="text-red-600">{notify}</p>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
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
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-blue-900 hover:underline "
          >
            Forgot Password?
          </a>
        </div>
        <button
          onClick={onLogin}
          type="submit"
          className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
          New To IT LAND? Register {"("}
          <Link
            to="/SignUp"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Student
          </Link>
          /
          <Link
            to="/SignUp"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Company{")"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminLoginModal;
