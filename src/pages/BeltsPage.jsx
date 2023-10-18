import PageBanner from "../components/common/page-banner/PageBanner";
import Belts from "../components/watchesBelts/Belts";
import Layout from "../layout/Layout";
import BeltsBg from "../images/banner/belt-background.jpg";

const BeltsPage = () => {
  return (
    <Layout>
      <PageBanner
        mainTitle={" Watch Belts"}
        links={["Home", "Belts"]}
        BannerImage={BeltsBg}
      />
      <Belts />
    </Layout>
  );
};

export default BeltsPage;
