import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import API_URL from "../../utils/api";
import TouristSpotCard from "../TouristSpotCard/TouristSpotCard";

const TouristSpots = () => {
  const [loading, setLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tourist_spots`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTouristSpots(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <Slide direction="down" duration={1300}>
          <h1 className="text-[clamp(28px,6vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto ">
            Explore Spectacular Tourist Destinations
          </h1>
        </Slide>
        <Slide direction="up" duration={1300}>
          <p className="text-center max-w-2xl mx-auto mt-4">
            Embark on a journey of discovery with our curated selection of
            breathtaking tourist spots from around the globe. From iconic
            landmarks to hidden gems.
          </p>
        </Slide>
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
