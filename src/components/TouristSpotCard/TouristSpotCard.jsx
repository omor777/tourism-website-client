import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
  const {
    _id,
    tourist_spot_name,
    country_name,
    short_description,
    average_cost,
    photo_url,
  } = spot;

  return (
    <div className=" gap-5 border shadow-card">
      <figure>
        <img className="object-cover h-[250px] w-full" src={photo_url} />
      </figure>
      <div className="flex flex-col justify-between mt-5  p-5">
        {/* content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold capitalize">{tourist_spot_name}</h1>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 rounded-full">
                <FaLocationDot className="text-blue-500" />{" "}
              </span>{" "}
              <span className="text-xl font-medium capitalize">
                {country_name}
              </span>
            </p>
            <p className="capitalize flex items-center gap-2 font-semibold">
              <IoTime className="text-xl text-primary-main" />7 days
            </p>
          </div>
          <p className="text-gray-500">{short_description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link to={`/details/${_id}`}>
            <button className="py-2.5 px-5 mt-3  bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
              View Details
            </button>
          </Link>
          <div>
            <h1 className="flex flex-wrap items-center text-black/80 ">
              <FaDollarSign className="text-xl" />{" "}
              <span className="text-2xl font-bold">{average_cost}</span>
              <span className="text-sm font-medium ml-0.5 text-gray-700">
                / Average
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default TouristSpotCard;
