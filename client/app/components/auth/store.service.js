class storeService {
  constructor(sessionStorage){
    'ngInject';
    this.sessionStorage = sessionStorage;
  }

  set(key,value) {
    return this.sessionStorage.set(key,value);
  }

  get(key) {
    return this.sessionStorage.get(key);
  }

  destroy(key){
    return this.sessionStorage.remove(key);
  }
}

export default storeService;
