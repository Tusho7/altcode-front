import { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import CybercitiLogo from "../assets/cybercity-logo.png";
import xLogo from "../assets/xLogo.png";
import { Link } from "react-router-dom";
import { MainProps } from "../types/main-props-type";

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
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="p-6 w-full h-full absolute  rounded-md shadow-lg bg-[#000913] text-white">
              <div className="mb-6 h-full">
                <div className="flex justify-between">
                  <img src={CybercitiLogo} className="w-[150px] h-[30px]" />
                  <img
                    src={xLogo}
                    className="w-[30px] h-[30px] bg-[#8CFEE7] p-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
                <ul className="mt-20">
                  <li>სერვისები</li>
                  <li className="pt-[30px]">კონტაქტი</li>
                  <li className="pt-[30px]">რა არის ALTCODE ?</li>
                  <li className="pt-[30px]">SERVICE</li>
                  {isLoggedIn && user && user.avatar ? (
                    <div className="flex items-center justify-between mt-10">
                      <div className="flex gap-3 items-center justify-start">
                        <img
                          src={`https://altcode-api.onrender.com/${user?.avatar}`}
                          alt="User Avatar"
                          className="rounded-full w-10 h-10"
                        />
                        <p>{user.username}</p>
                      </div>

                      <p
                        className="border-[1px] border-white rounded-full p-2"
                        onClick={handleLogout}
                      >
                        LogOut
                      </p>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mt-10">
                      <button className="text-white p-5 bg-slate-800 rounded-full">
                        შესვლა
                      </button>
                      <Link to="/signup">
                        <button className="text-white p-5 bg-slate-800 rounded-full">
                          რეგისტრაცია
                        </button>
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex text-white justify-center items-center gap-5 text-sm">
        <p>სერვისები</p>
        <p>კონტაქტი</p>
        <p>რა არის ALTCODE ?</p>
        <p>SERVICE</p>

        {isLoggedIn ? (
          user && user.avatar ? (
            <img src={user.avatar} alt="User Avatar" className="rounded-full" />
          ) : (
            <button className="text-white bg-slate-800 rounded-full p-3">
              შესვლა
            </button>
          )
        ) : (
          <button className="text-white bg-slate-800 rounded-full p-3">
            შესვლა
          </button>
        )}

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
