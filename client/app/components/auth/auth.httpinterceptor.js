let self;

class HttpInterceptor {
  constructor(StoreService, $q, $injector){
    'ngInject';

    this.storeService = StoreService;
    this.$q = $q;
    this.$injector = $injector;

    self = this;
  }

  request(config) {
    let access_token = self.storeService.get('token') || null;
    config.headers.authorization = access_token;
    return config;
  }

  responseError(response) {
    try {
      if(response.status === 404){
        let _state = self.$injector.get('$state');

        self.$injector.get('$state').go('login', {
          toState: _state.current,
          toParams: _state.params
        });
      } else {
        self.$injector.get('$state').go(`error.${response.status}`);
      }
    } catch(e){
      self.$injector.get('$state').go('error.404');
    }

    return response;
  }

  static createInstance (StoreService, $q, $injector){
    return new HttpInterceptor(StoreService, $q, $injector);
  }
}

HttpInterceptor.createInstance.$inject = ['StoreService', '$q', '$injector'];

export default HttpInterceptor;
