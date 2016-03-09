class LoginController {

  constructor(Auth, $state, $location, $q) {
    'ngInject';
    this.authService = Auth;
    this.$state = $state;
    this.$location = $location;
    this.$q = $q;

    this.login_callback = () => {
      return this.$q((resolve, reject) => {
        if (angular.equals({}, this.$state.params.toState)){
          this.$location.path('/');
        } else {
          this.$state.go(this.$state.params.toState.name, this.$state.params.toParams);
        }
        resolve('Ok');
      });
    }
  }

  login(){
    this.authService.login(
      Object.assign(
        {},
        {username: this.username, password: this.password}
    )).then(() => {
      return this.login_callback();
    });
  }
}

export default LoginController;
