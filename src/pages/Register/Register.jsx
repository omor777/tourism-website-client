import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const form = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigator = useNavigate();

  const handleRegister = (data) => {
    const { name, email, password, photoUrl } = data;

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Registration Successful",
          icon: "success",
        });
        navigator("/");
        // update user
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container min-h-[calc(100vh-632px)] flex items-center justify-center mt-40">
      <div className="w-full">
        <div className=" border border-primary-extraLight  overflow-hidden">
          <form className="p-10  " onSubmit={handleSubmit(handleRegister)}>
            <h1 className="text-4xl font-rancho text-center font-bold mb-8">
              Register Now
            </h1>
            <div className="space-y-6">
              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                <p className="text-error text-sm mt-1.5">
                  {errors.name?.message}
                </p>
              </div>
              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                  })}
                />
                <p className="text-error text-sm mt-1.5">
                  {errors.email?.message}
                </p>
              </div>
              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="photoUrl"
                >
                  Photo Url
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="photoUrl"
                  type="url"
                  placeholder="Enter photoUrl"
                  {...register("photoUrl", {
                    required: {
                      value: true,
                      message: "PhotoUrl is required!",
                    },
                  })}
                />
                <p className="text-error text-sm mt-1.5">
                  {errors.photoUrl?.message}
                </p>
              </div>
              {/* row */}
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    validate: {
                      passwordLength: (value) => {
                        return (
                          value.length >= 6 ||
                          "Password must be at least 6 character!"
                        );
                      },
                      passwordUpCase: (value) => {
                        return (
                          /^(?=.*[A-Z]).+$/.test(value) ||
                          "Password must have an uppercase letter!"
                        );
                      },
                      passwordLoCase: (value) => {
                        return (
                          /^(?=.*[a-z]).+$/.test(value) ||
                          "Password must have an lowercase letter!"
                        );
                      },
                    },
                  })}
                />
                <p className="text-error text-sm mt-1.5">
                  {errors.password?.message}
                </p>
              </div>
              <button className="py-2.5 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                Register
              </button>
            </div>
            <p className="text-sm mt-5 text-center">
              Already have an account?{" "}
              <Link
                className="underline  font-bold text-primary-main  ml-0.5"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
