import PageBanner from "../components/common/page-banner/PageBanner";
import Watches from "../components/watches/Watches";
import Layout from "../layout/Layout";
import WatchBg from "../images/banner/watch-background.jpg";

const WatchesPage = () => {
  return (
    <Layout>
      <PageBanner BannerImage={WatchBg} />
      <Watches />
    </Layout>
  );
};

export default WatchesPage;
