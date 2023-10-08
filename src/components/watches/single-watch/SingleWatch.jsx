import { useParams } from "react-router-dom";
import "./SingleWatch.scss";
import SingleWatchCard from "./single-watch-card/SingleWatchCard";

const SingleWatch = () => {
  const { id } = useParams();

  return (
    <div className="single-watch">
      <h1>{id}</h1>
      <SingleWatchCard />
    </div>
  );
};

export default SingleWatch;
