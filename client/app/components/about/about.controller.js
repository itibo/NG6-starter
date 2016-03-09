class AboutController {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.name = 'about';

    $http.get('/somewhere')

  }
}

export default AboutController;
