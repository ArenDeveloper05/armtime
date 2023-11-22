import { Link } from "react-router-dom";
import "./PageBanner.scss";
import { ROUTER } from "../../../router/router";

const PageBanner = ({ mainTitle, BannerImage }) => {
  return (
    <div
      className="page-banner"
      style={{
        height: BannerImage ? "400px" : "220px",
      }}
    >
      <div
        className="page-banner-background"
        style={{
          filter: BannerImage ? "brightness(0.5) blur(3px)" : "",
        }}
      >
        {BannerImage && <img src={BannerImage} alt="" />}
      </div>
      <div className="page-banner-inner">
        <h1>{mainTitle}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
