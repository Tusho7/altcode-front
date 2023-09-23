import { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import { MainProps } from "../types/main-props-type";
import IsLoggedIn from "./IsLoggedIn";
import IsMenuOpenContainer from "./IsMenuOpenContainer";


function Navigation({ isLoggedIn, user, handleLogout }: MainProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative lg:hidden">
        <button onClick={toggleMenu}>
          <img src={HamburgerIcon} className="w-[35px] h-[30px]" alt="Menu" />
        </button>

        {isMenuOpen && (
          <IsMenuOpenContainer
            isLoggedIn={isLoggedIn}
            user={user}
            setIsMenuOpen={setIsMenuOpen}
            handleLogout={handleLogout}
          />
        )}
      </div>

      <div className="hidden lg:flex text-white justify-center items-center gap-5 text-sm">
        <p>სერვისები</p>
        <p>კონტაქტი</p>
        <p>რა არის ALTCODE ?</p>
        <p>SERVICE</p>

       <IsLoggedIn isLoggedIn={isLoggedIn} user={user}/>

        {isLoggedIn ? (
          <button className="text-white bg-slate-800 rounded-full p-3">
            რეგისტრაცია
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Navigation;
