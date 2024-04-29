import { FaBuilding, FaGlobe } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const Services = () => {
  return (
    <section className="mt-24">
      <div>
        <h1 className="text-[clamp(28px,5vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto tracking-wide">
          Our Services
        </h1>
        <p className="text-center max-w-2xl mx-auto mt-4">
          Explore our comprehensive range of travel services, including
          accommodation, transportation, and guided tours, all meticulously
          curated to ensure an unforgettable adventure.
        </p>
      </div>
      {/* container */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="shadow-card p-5 group transition-colors duration-[400ms] hover:bg-primary-main cursor-pointer">
          <FaGlobe className="text-4xl text-primary-main group-hover:text-white duration-[400ms]" />
          <h1 className="font-bold text-xl mt-4 group-hover:text-white duration-[400ms]">
            WorldWide Tours
          </h1>
          <p className="mt-2  group-hover:text-white duration-[400ms]">
            Explore global  with our curated worldwide tour experiences.
          </p>
        </div>
        <div className="shadow-card p-5 group transition-colors duration-[400ms] hover:bg-primary-main cursor-pointer">
          <FaBuilding className="text-4xl text-primary-main group-hover:text-white duration-[400ms]" />
          <h1 className="font-bold text-xl mt-4 group-hover:text-white duration-[400ms]">
            Hotel Reservation
          </h1>
          <p className="mt-2  group-hover:text-white duration-[400ms]">
            Secure your stay effortlessly with our hotel reservation services.
          </p>
        </div>
        <div className="shadow-card p-5 group transition-colors duration-[400ms] hover:bg-primary-main cursor-pointer">
          <IoPerson className="text-[42px] text-primary-main group-hover:text-white duration-[400ms]" />
          <h1 className="font-bold text-xl mt-4 group-hover:text-white duration-[400ms]">
            Travel Guides
          </h1>
          <p className="mt-2  group-hover:text-white duration-[400ms]">
            Discover hidden gems and must-see attractions with our guides.
          </p>
        </div>
        <div className="shadow-card p-5 group transition-colors duration-[400ms] hover:bg-primary-main cursor-pointer">
          <IoMdSettings className="text-5xl text-primary-main group-hover:text-white duration-[400ms]" />
          <h1 className="font-bold text-xl mt-4 group-hover:text-white duration-[400ms]">
            Event Management
          </h1>
          <p className="mt-2  group-hover:text-white duration-[400ms]">
            Elevate your events with our  event management
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
