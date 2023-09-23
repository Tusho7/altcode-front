import { Link } from "react-router-dom";
import CybercitiLogo from "../assets/cybercity-logo.png";
import xLogo from "../assets/xLogo.png";

const IsMenuOpenContainer = ({
  isLoggedIn,
  user,
  setIsMenuOpen,
  handleLogout,
}: any) => {
  return (
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
                    src={`${import.meta.env.VITE_STORAGE_LINK}/${user?.avatar}`}
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
                <Link to="login">
                  <button className="text-white p-5 bg-slate-800 rounded-full">
                    შესვლა
                  </button>
                </Link>

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
  );
};

export default IsMenuOpenContainer;
