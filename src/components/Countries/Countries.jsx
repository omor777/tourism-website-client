import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import API_URL from "../../utils/api";

const Countries = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/countries`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-24">
      <div className="">
        <Slide direction="down" duration={1300}>
          <h1 className="text-[clamp(28px,6vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto">
            Journey Through Diverse Destinations
          </h1>
        </Slide>
        <Slide direction="up" duration={1300}>
          <p className="text-center max-w-2xl mx-auto mt-4">
            Embark on a voyage of discovery as you uncover the richness of our
            planet&apos;s many nations. From the lush rainforests of Costa Rica
            to the snow-capped peaks of Nepal, each country holds its own
            treasures waiting to be explored.
          </p>
        </Slide>
      </div>

      {loading ? (
        <div className="grid place-items-center mt-32">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {countries?.map((country) => {
            const { _id, image, country_name, description } = country;
            return (
              <Link key={_id} to={`/touristSpots/${country_name}`}>
                <div className=" p-4 rounded-md shadow-card flex flex-col justify-between h-[470px] border">
                  <img
                    src={image}
                    className="object-cover object-center w-full rounded-md h-60 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <h2 className="text-2xl font-semibold tracking-wide">
                      {country_name}
                    </h2>
                  </div>
                  <p>{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Countries;
