import { Link } from "react-router-dom";
import "./PageBanner.scss";

const PageBanner = ({ mainTitle }) => {
  return (
    <div className="page-banner">
      <div className="page-banner-background"></div>
      <div className="page-banner-inner">
        <h1>{mainTitle}</h1>
        <p>
          <Link>Home</Link> / <Link>Watches</Link>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
