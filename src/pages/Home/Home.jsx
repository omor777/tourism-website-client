import Banner from "../../components/Banner/Banner";
import Countries from "../../components/Countries/Countries";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";
import TouristSpots from "../../components/TouristSpots/TouristSpots";

const Home = () => {
  return (
    <section className="container min-h-[calc(100vh-632px)]  mt-40">
      <div>
        <Banner />
      </div>
      <div>
        <Services />
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
