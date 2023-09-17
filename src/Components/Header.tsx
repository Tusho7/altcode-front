import CybercitiLogo from "../assets/cybercity-logo.png";
import { MainProps } from "../types/main-props-type";
import Navigation from "./Navigation";

function Header({ isLoggedIn, user, handleLogout }: MainProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img
          src={CybercitiLogo}
          className="w-[200px] h-[40px] lg:w-[300px] lg:h-[60px]"
        />
      </div>

      <Navigation
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default Header;
