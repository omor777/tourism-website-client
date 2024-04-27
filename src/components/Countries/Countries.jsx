import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../utils/api";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/countries`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="container mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries?.map((country) => {
          const { _id, image, country_name, description } = country;
          return (
            <Link key={_id} to={`/touristSpots/${country_name}`}>
              <div className=" p-4 rounded-md shadow-card bg-gray-50 text-gray-900 flex flex-col justify-between h-[470px]">
                <img
                  src={image}
                  className="object-cover object-center w-full rounded-md h-60 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <h2 className="text-2xl font-semibold tracking-wide">
                    {country_name}
                  </h2>
                </div>
                <p className="text-gray-800">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
