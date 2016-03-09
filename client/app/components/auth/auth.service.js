import uid from 'uid';

let setToken = (user) => {
  return btoa([user.username, user.password].join('.'));
}

class authService {

  constructor($q, StoreService){
    'ngInject';
    this.$q = $q;
    this.storeService = StoreService;

    this.users = new Map();
    this.loggedIn = new Set();
  }

  signUp(user){
    return this.$q((resolve, reject) => {
      if (this.users.has(user.username)){
        reject({message: 'Such user already exist'});

        // temporary!!!!
        this.users.delete(user.username);
      } else {
        let user_obj = Object.assign({},
          {hash: setToken(user)},
          user
        );
        delete user_obj['password'];

        this.users.set(user.username, user_obj);
        resolve({message: 'Ok'})
      }
    });
  }

  login(user){
    return this.$q((resolve, reject) => {

      if (!this.users.has(user.username)) {
        this.loggedIn.delete(this.storeService.get('token'));
        this.storeService.destroy('token');
        reject({message: 'Wrong username or password'});
      } else {
        let user_obj = this.users.get(user.username);
        if (user_obj.hash === setToken(user)){
          this.storeService.set('token', uid(20))
          this.loggedIn.add(this.storeService.get('token'));
          resolve({message: 'Ok'});
        } else {
          this.loggedIn.delete(this.storeService.get('token'));
          this.storeService.destroy('token');
          reject({message: 'Wrong username or password'});
        }
      }
    })
  }

  get isAuthenticated(){
    return this.loggedIn.has(this.storeService.get('token'));;
  }

 }

export default authService
