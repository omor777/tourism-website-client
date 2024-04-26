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
  console.log(touristSpots);
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {touristSpots.slice(0, 6).map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
