import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryTouristSpotCard from "../../components/CountryTouristSpotCard/CountryTouristSpotCard";
import API_URL from "../../utils/api";

const CountryTouristSpot = () => {
  const [countryTouristSpots, setCountryTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const { country } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/countries_tourist_spots/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryTouristSpots(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [country]);

  if (loading) {
    return (
      <div className="grid place-items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="container min-h-[calc(100vh-632px)]  mt-20">
      <div className="w-full">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryTouristSpots?.map((country) => (
              <CountryTouristSpotCard key={country._id} country={country} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryTouristSpot;
