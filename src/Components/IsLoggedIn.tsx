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
        <button className="text-white bg-slate-800 rounded-full p-3">
          შესვლა
        </button>
      )}
    </div>
  );
};

export default IsLoggedIn;
