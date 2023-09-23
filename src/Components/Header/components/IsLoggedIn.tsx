import { Link } from "react-router-dom";

const IsLoggedIn = ({ isLoggedIn, user }: any) => {
  return (
    <div>
      {isLoggedIn ? (
        user && user.avatar ? (
          <img src={user?.avatar} alt="User Avatar" className="rounded-full" />
        ) : (
          <button className="text-white bg-slate-800 rounded-full p-3">
            შესვლა
          </button>
        )
      ) : (
        <div className="flex gap-4">
          <Link to="login">
            <button className="text-white p-2 bg-slate-800 rounded-full">
              შესვლა
            </button>
          </Link>

          <Link to="login">
            <button className="text-white p-2 bg-slate-800 rounded-full">
              რეგისტრაცია
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default IsLoggedIn;
