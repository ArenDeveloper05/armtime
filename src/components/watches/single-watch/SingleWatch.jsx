import { useParams } from "react-router-dom";
import "./SingleWatch.scss";

const SingleWatch = () => {
  const { id } = useParams();
  return (
    <div className="single-watch">
      <h1>{id}</h1>
    </div>
  );
};

export default SingleWatch;
