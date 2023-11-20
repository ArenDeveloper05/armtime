import PageBanner from "../components/common/page-banner/PageBanner";
import Belts from "../components/belts/Belts";
import Layout from "../layout/Layout";
import BeltsBg from "../images/banner/belt-background.jpg";
import Container from "../components/container/Container";
import { useTranslation } from "react-i18next";

const BeltsPage = () => {
  const { t } = useTranslation();

  const links = [t("header.home"), t("main.belts")];
  return (
    <Layout>
      <PageBanner
        mainTitle={t("main.belts")}
        links={links}
        BannerImage={BeltsBg}
      />
      <Container>
        <Belts />
      </Container>
    </Layout>
  );
};

export default BeltsPage;
