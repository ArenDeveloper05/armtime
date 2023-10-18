import { Link } from "react-router-dom";
import "./PageBanner.scss";
import { ROUTER } from "../../../router/router";

const PageBanner = ({ mainTitle, BannerImage, links }) => {
  return (
    <div className="page-banner">
      <div className="page-banner-background">
        <img src={BannerImage} alt="" />
      </div>
      <div className="page-banner-inner">
        <h1>{mainTitle}</h1>
        <p>
          <Link to={ROUTER.HOME_PAGE_ROUTE}>{links[0]}</Link> /{" "}
          <Link>{links[1]}</Link>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
