import HomeSlider from "../home-slider/HomeSlider";
import Watches from "../watches/Watches";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <Watches />
    </div>
  );
};

export default Home;
