import Banner from "../../components/Banner/Banner";
import Testimonial from "../../components/Testimonial/Testimonial";
import TouristSpots from "../../components/TouristSpots/TouristSpots";


const Home = () => {
  return (
    <section>
      <div className="mt-20">
        <Banner />
      </div>
      <div>
        <div className="mt-24">
          <TouristSpots />
        </div>
        <Testimonial />
      </div>
    </section>
  );
};

export default Home;
