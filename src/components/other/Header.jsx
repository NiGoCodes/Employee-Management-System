import React from 'react';

const Header = (props) => {
  const { data, changeUser } = props; // Destructuring props

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ''); // Clear stored user
    changeUser(null); // Clear the current user
  };

  return (
    <div className="flex items-center justify-between p-6 rounded-lg shadow-lg bg-gradient-to-b from-dark-gray to-deep-gray">
      {data ? (
        // Render for logged-in user
        <>
          <h1 className="text-3xl font-bold text-light-gray">
            Welcome Back, <br />
            <span className="text-5xl font-extrabold text-cool-teal">
              {data.firstName} 👋
            </span>
          </h1>
          <button
            onClick={logOutUser}
            className="px-6 py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-dark-teal to-cool-teal text-white shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Log Out
          </button>
        </>
      ) : (
        // Render for guest (no user logged in)
        <>
          <h1 className="text-3xl font-bold text-light-gray">
            Hello, <br />
            <span className="text-5xl font-extrabold text-cool-teal">
              Admin 👋
            </span>
          </h1>
          <button
            onClick={logOutUser}
            className="px-6 py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-dark-teal to-cool-teal text-white shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
