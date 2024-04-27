import Banner from "../../components/Banner/Banner";
import Countries from "../../components/Countries/Countries";
import Testimonial from "../../components/Testimonial/Testimonial";
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
      <div>
        <Countries />
      </div>
      <div>
        <Testimonial />
      </div>
    </section>
  );
};

export default Home;
