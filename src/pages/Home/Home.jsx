import Banner from "../../components/Banner/Banner";
import TouristSpots from "../../components/TouristSpots/TouristSpots";

const Home = () => {
  return (
    <section>
      <div className="mt-20">
        <Banner />
      </div>
      <div className="mt-24">
        <TouristSpots />
      </div>
    </section>
  );
};

export default Home;
