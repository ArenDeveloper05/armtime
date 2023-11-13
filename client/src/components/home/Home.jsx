import HomeSlider from "../homeSlider/HomeSlider";
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
