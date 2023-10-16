import PageBanner from "../components/common/page-banner/PageBanner";
import Bands from "../components/watchesBands/Bands";
import Layout from "../layout/Layout";
import BandBg from "../images/banner/band-background.jpg";

const BandsPage = () => {
  return (
    <Layout>
      <PageBanner
        mainTitle={" Watch Bands"}
        links={["Home", "Bands"]}
        BannerImage={BandBg}
      />
      <Bands />
    </Layout>
  );
};

export default BandsPage;
