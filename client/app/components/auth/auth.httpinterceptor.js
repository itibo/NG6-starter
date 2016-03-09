let self;

class HttpInterceptor {
  constructor(StoreService, $q/*, $injector, $location*/){
    'ngInject';

    this.storeService = StoreService;
    this.$q = $q;
    // this.$injector = $injector;


/*
    this.$location = $location;
*/
    self = this;
  }

/*  request(config) {
    let access_token = self.storeService.get('token') || null;
    config.headers.authorization = access_token;
    return config;
  }
*/
/*  responseError(response) {
    console.log("responseError: %O", response);
    if(response.status === 404){
      self.$location.state('login');
      // return self.$q.reject(response);
    } else {
      // return self.$q.reject(response);
    }

  return response;
  }
*/
  static createInstance (StoreService, $q/*, $injector, $location*/){
    return new HttpInterceptor(StoreService, $q/*, $injector, $location*/);
  }
}

HttpInterceptor.createInstance.$inject = ['StoreService', '$q'/*, '$injector', $location*/];

export default HttpInterceptor;
/*

let httpInterceptor = function HttpInterceptor() {

  function interceptor (promise) {
    console.log("in interceptor function");
    return promise.then(
      () => {
        console.log("success");
      },
      (error) => {
        console.log("error: %O", error);
      },
    )
  }
  return {
    interceptor: interceptor
  }
}

export default httpInterceptor;
*/
