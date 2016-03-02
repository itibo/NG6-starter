let authFactory = function () {

  //mockup service

  let users, usersLoggedIn = [];

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let signUp = () => {
    return user.isSignedIn;
  };

  let login = (user) => {

    return user;
  };


  return { getUser, isSignedIn, signUp, login };
}

export default authFactory
