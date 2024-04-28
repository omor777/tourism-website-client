import { useEffect, useState } from "react";
import { FaClock, FaDollarSign } from "react-icons/fa";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GiWinterHat } from "react-icons/gi";
import { IoIosUmbrella } from "react-icons/io";
import { useParams } from "react-router-dom";
import API_URL from "../../utils/api";

const TouristSpotDetails = () => {
  const [touristSpot, setTouristSpot] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/update_tourist_spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpot(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const {
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
    photo_url,
  } = touristSpot;

  return (
    <section className="container min-h-[calc(100vh-632px)] mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="border border-primary-extraLight lg:col-span-8 rounded overflow-hidden">
          <figure className="relative">
            <img className="h-[480px] w-full object-cover" src={photo_url} />
            <span className="bg-primary-main text-white px-3 py-1.5 font-semibold absolute top-4 rounded left-4 capitalize">
              {country_name}
            </span>
          </figure>
          <div className="p-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold capitalize text-black/70">
                  {tourist_spot_name}
                </h1>
                <h2 className="flex items-center">
                  <FaDollarSign className="text-2xl text-primary-main" />
                  <span className="text-3xl font-bold text-primary-main">
                    {average_cost}
                  </span>
                  <span className="ml-1 font-medium">/ Average</span>
                </h2>
              </div>

              <p className="flex items-center gap-3 mt-5">
                <span className="text-primary-main p-3 bg-blue-100 rounded-full">
                  <FaLocationDot className="text-xl" />
                </span>
                <span className="text-lg font-medium text-black/60 capitalize">
                  {location}
                </span>
              </p>

              <p className="flex items-center gap-2 mt-5">
                <span className="text-lg font-semibold capitalize mr-1.5">
                  travel time:
                </span>
                <FaClock className="text-primary-main text-lg" />
                <span className="font-medium capitalize">
                  {travel_time} days
                </span>
              </p>

              <p className="flex items-center gap-2 mt-4">
                <span className="text-lg font-semibold capitalize mr-1.5">
                  seasonality:
                </span>
                {seasonality === "sumer" ? (
                  <IoIosUmbrella className="text-primary-main text-xl" />
                ) : (
                  <GiWinterHat className="text-primary-main text-xl" />
                )}
                <span className="font-medium capitalize">{seasonality}</span>
              </p>

              <p className="flex items-center gap-2 mt-4">
                <span className="text-lg font-semibold capitalize mr-1.5">
                  yearly total visitors:
                </span>
                <FaPeopleGroup className="text-primary-main text-xl" />
                <span className="font-medium capitalize ">
                  {total_visitors_per_year} million
                </span>
              </p>

              <p className="max-w-xl mt-4">
                <span className="text-lg font-semibold mr-1.5">
                  Description:
                </span>
                {short_description}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 border border-primary-extraLight rounded px-6 py-8 h-fit">
          <h1 className="text-4xl font-rancho text-center font-bold mb-8">
            Contact Us
          </h1>
          <form className="space-y-6">
            {/* row */}
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                id="name"
                type="text"
                placeholder="Enter name"
              />
            </div>
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
                name="email"
              />
            </div>
            {/* row */}
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main"
                id="phone"
                type="tel"
                placeholder="Enter phone"
                name="phone"
              />
            </div>
            {/* row */}
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                message
              </label>
              <textarea
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main resize-none"
                id="message"
                rows={5}
                placeholder="Enter message"
                name="message"
              />
            </div>
            <button className="py-3 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TouristSpotDetails;
