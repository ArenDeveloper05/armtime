import PageBanner from "../components/common/page-banner/PageBanner";
import Watches from "../components/watches/Watches";
import Layout from "../layout/Layout";
import WatchBg from "../images/banner/watch-background.jpg";
import { useTranslation } from "react-i18next";

const WatchesPage = () => {
  const { t } = useTranslation();

  const links = [t("header.home"), t("main.watches")];
  return (
    <Layout>
      <PageBanner
        mainTitle={t("main.watches")}
        links={links}
        BannerImage={WatchBg}
      />
      <Watches />
    </Layout>
  );
};

export default WatchesPage;
