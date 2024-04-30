import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
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
    <section className="container min-h-[calc(100vh-632px)]  mt-40">
      <div>
        <div>
          <Slide direction="down" duration={1300}>
            <h1 className="text-[clamp(28px,6vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto text-base-content">
              Discover {country} Hidden Gems
            </h1>
          </Slide>
          <Slide direction="up" duration={1300}>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Uncover the beauty and wonder of {country} with our curated
              collection of country-specific tourist spot cards. From iconic
              attractions to lesser-known treasures
            </p>
          </Slide>
        </div>
        <div className="mt-10">
          <div className={`grid grid-cols-1 md:grid-cols-2  gap-6`}>
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
