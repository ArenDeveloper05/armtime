import PageBanner from "../components/common/page-banner/PageBanner";
import Belts from "../components/belts/Belts";
import Layout from "../layout/Layout";
import BeltsBg from "../images/banner/belt-background.jpg";
import Container from "../components/container/Container";

const BeltsPage = () => {
  return (
    <Layout>
      <PageBanner
        mainTitle={" Watch Belts"}
        links={["Home", "Belts"]}
        BannerImage={BeltsBg}
      />
      <Container>
        <Belts />
      </Container>
    </Layout>
  );
};

export default BeltsPage;
