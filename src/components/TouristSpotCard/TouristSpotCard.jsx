import PropTypes from "prop-types";
import { FaClock, FaDollarSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiWinterHat } from "react-icons/gi";
import { IoIosUmbrella } from "react-icons/io";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
  const {
    _id,
    tourist_spot_name,
    country_name,
    short_description,
    average_cost,
    photo_url,
    total_visitors_per_year,
    seasonality,
    travel_time,
  } = spot;

  return (
    <div className=" gap-5 border shadow-card ">
      <figure className="relative">
        <img className="object-cover h-[250px] w-full" src={photo_url} />
        <div className="shadow-md py-3.5 px-4 flex items-center justify-between w-10/12 mx-auto absolute left-[8.5%] -bottom-[9%] rounded bg-base-100">
          <p className="text-sm font-semibold capitalize flex items-center gap-1.5">
            <FaClock className="text-lg text-primary-main" />
            {travel_time} days
          </p>
          <p className="text-sm font-semibold capitalize flex items-center gap-1.5">
            {seasonality === "Summer" ? (
              <IoIosUmbrella className="text-lg text-primary-main" />
            ) : seasonality === "Winter" ? (
              <GiWinterHat className="text-lg text-primary-main" />
            ) : (
              ""
            )}
            {seasonality}
          </p>
          <p className="text-sm font-semibold capitalize flex items-center gap-1.5">
            <FaPeopleGroup className="text-lg text-primary-main" />
            {total_visitors_per_year} M
          </p>
        </div>
      </figure>
      <div className="grid grid-rows-[1fr_auto] mt-10  p-5  h-[260px]">
        {/* content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold capitalize">{tourist_spot_name}</h1>

          <p>{short_description}</p>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-y-3 ">
          <Link to={`/details/${_id}`}>
            <button className="py-2.5 px-5 mt-3  bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
              View Details
            </button>
          </Link>
          <div>
            <h1 className="flex flex-wrap items-center">
              <FaDollarSign className="text-xl" />{" "}
              <span className="text-2xl font-bold">{average_cost}</span>
              <span className="text-sm font-medium ml-0.5 ">/ Average</span>
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
