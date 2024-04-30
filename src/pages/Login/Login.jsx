import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useAuth();
  const form = useForm();
  const { register, handleSubmit } = form;

  const navigator = useNavigate();
  const location = useLocation();

  const handleLogin = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Login Successful",
          icon: "success",
        });

        navigator(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Opps!",
          text: "Invalid credential!",
          icon: "error",
        });
      });
  };

  const handleGoogleLogin = (params) => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Login Successful",
          icon: "success",
        });

        navigator(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        Swal.fire({
          title: "Login Successful",
          icon: "success",
        });

        navigator(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container min-h-[calc(100vh-632px)] mt-40">
      <div className="w-full">
        <div className=" border border-primary-extraLight  overflow-hidden">
          <div className="p-10 order-2 lg:order-1">
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
                <button className="py-3 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
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
                <button onClick={handleGithubLogin}>
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
        </div>
      </div>
    </section>
  );
};

export default Login;
