import { makeObservable } from 'mobx';

class UserStore {
  constructor() {
    makeObservable(this);
  }
}

const userStore = new UserStore();
export default userStore;
