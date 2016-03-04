let self;

class HttpInterceptor {
  constructor(StoreService){
    'ngInject';

    this.storeService = StoreService;
    self = this;
  }

  request(config) {
    let access_token = self.storeService.get('token') || null;
    config.headers.authorization = access_token;
    return config;
  }
}

export default HttpInterceptor;
