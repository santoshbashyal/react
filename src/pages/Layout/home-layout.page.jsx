import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footers/footer.component";
import { HomeHeader } from "../../components/headers/header.component";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />
      {/* content */}

      <Outlet />

      <Footer />
    </>
  );
};
export default HomePageLayout;
