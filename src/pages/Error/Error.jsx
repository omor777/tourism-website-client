import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="grid place-items-center min-h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-primary-main">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to={"/"}>
            <button className="py-3 px-8 rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
              back to home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
