class SignupController {
  constructor(Auth, $location) {
    'ngInject';
    this.authService = Auth;
    this.error_msg = '';
    this.$location = $location;
  }

  register(){
    this.authService.signUp(this.user).then(
      (success) => {
        this.authService.login(this.user).then(()=>{
          this.$location.path('/');
        })
      },
      (error) => {
        this.error_msg = error.message;
        console.log("error: %O", error)
      }
    )
  }

}

export default SignupController;
