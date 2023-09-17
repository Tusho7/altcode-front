import { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import CybercitiLogo from "../assets/cybercity-logo.png";
import xLogo from "../assets/xLogo.png";

function Navigation() {
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
                  <div className="flex justify-between items-center mt-10">
                    <button className="text-white p-5 bg-slate-800 rounded-full">
                      შესვლა
                    </button>
                    <button className="text-white p-5 bg-slate-800 rounded-full">
                      რეგისტრაცია
                    </button>
                  </div>
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

        <button className="text-white bg-slate-800 rounded-full p-3">
          შესვლა
        </button>
        <button className="text-white bg-slate-800 rounded-full p-3">
          რეგისტრაცია
        </button>
      </div>
    </>
  );
}

export default Navigation;
