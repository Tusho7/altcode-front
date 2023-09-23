import { MainProps } from "../types/main-props-type";
import ExperiencedAndTrusted from "../Components/ExperiencedAndTrusted";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Services from "../Components/Srvices/Services";
import SliderMenu from "../Components/SliderMenu";

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
