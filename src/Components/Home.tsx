import { MainProps } from "../types/main-props-type";
import ExperiencedAndTrusted from "./ExperiencedAndTrusted";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services";
import SliderMenu from "./SliderMenu";

const Home = ({ isLoggedIn, user, handleLogout }: MainProps) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout} />
      <SliderMenu />
      <Services />
      <ExperiencedAndTrusted />
      <Footer />
    </div>
  );
};

export default Home;
