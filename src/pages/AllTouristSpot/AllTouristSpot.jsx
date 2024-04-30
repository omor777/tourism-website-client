import { useEffect, useState } from "react";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import API_URL from "../../utils/api";

const AllTouristSpot = () => {
  const [loading, setLoading] = useState(true);
  const [allTouristSpots, setAllTouristSpots] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/tourist_spots`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAllTouristSpots(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(allTouristSpots);
  const handleSortTouristSpots = (e) => {
    const value = e.target.value;

    if (value === "averageCost") {
      fetch(`${API_URL}/sorted_tourist_spots`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setAllTouristSpots(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetch(`${API_URL}/tourist_spots`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setAllTouristSpots(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="container min-h-[calc(100vh-632px)]  mt-40">
      <div>
        <div>
          <h1 className="text-[clamp(28px,6vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto">
            Explore Our Tourist Spot Gallery
          </h1>
          <p className="text-center max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Dive into our tourist spot gallery and uncover a treasure trove of
            mesmerizing destinations waiting to be explored. From iconic
            landmarks to hidden gems off the beaten path.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center">
            <select
              onChange={handleSortTouristSpots}
              className="select select-info bg-primary-main text-white font-semibold focus:outline-none uppercase"
            >
              <option className="text-center font-medium" value="default">
                Default
              </option>
              <option value="averageCost" className="text-center font-medium">
                Average Cost
              </option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {allTouristSpots?.map((spot) => (
              <TouristSpotCard key={spot._id} spot={spot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTouristSpot;
