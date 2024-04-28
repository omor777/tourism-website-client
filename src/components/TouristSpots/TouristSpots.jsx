import { useEffect, useState } from "react";
import API_URL from "../../utils/api";
import TouristSpotCard from "../TouristSpotCard/TouristSpotCard";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tourist_spots`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="">
        <h1 className="text-[clamp(28px,5vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent">
          Explore Spectacular Tourist Destinations
        </h1>
        <p className="text-center max-w-2xl mx-auto mt-4">
          Embark on a journey of discovery with our curated selection of
          breathtaking tourist spots from around the globe. From iconic
          landmarks to hidden gems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {touristSpots.slice(0, 6).map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
