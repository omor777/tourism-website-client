import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const form = useForm();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const handleLogin = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = (params) => {
    googleLogin()
      .then((result) => {
        console.log("google login done");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-primary-extraLight  overflow-hidden">
        <div className="p-10">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-4xl font-rancho text-center font-bold mb-8">
              Login Now
            </h1>
            <div className="space-y-6">
              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  {...register("email")}
                />
              </div>

              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  {...register("password")}
                />
              </div>
              <button className="py-2.5 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                Login
              </button>
            </div>
          </form>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 mt-6">
            <div className="divider "></div>
            <div className="flex items-center gap-10">
              <button onClick={handleGoogleLogin}>
                <FaGoogle className="text-4xl" />
              </button>
              <button>
                <FaGithub className="text-4xl" />
              </button>
            </div>
            <div className="divider"></div>
          </div>
          <p className="text-sm mt-5 text-center">
            Don&apos;t have an account yet?{" "}
            <Link
              className="underline  font-bold text-primary-main  ml-0.5"
              to={"/register"}
            >
              Register
            </Link>
          </p>
        </div>
        <div className="bg-formBg bg-center bg-cover bg-no-repeat border-l border-primary-light"></div>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
