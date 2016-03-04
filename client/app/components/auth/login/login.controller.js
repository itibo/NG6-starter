class LoginController {

  constructor(Auth, $location) {
    'ngInject';
    this.authService = Auth;
    this.$location = $location;
  }

  login(){
    this.authService.login(
      Object.assign(
        {},
        {username: this.username, password: this.password}
    )).then(() => {
      this.$location.path('/');});
  }
}

export default LoginController;
