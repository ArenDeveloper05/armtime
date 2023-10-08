import PageBanner from "../components/common/page-banner/PageBanner";
import Watches from "../components/watches/Watches";
import Layout from "../layout/Layout";

const WatchesPage = () => {
  return (
    <Layout>
      <PageBanner mainTitle={"Watches"} links={["Home", "Watches"]} />
      <Watches />
    </Layout>
  );
};

export default WatchesPage;
