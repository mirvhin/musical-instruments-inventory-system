import { Model } from './model';

export class User extends Model {
  static login(username, password) {
    return this.api().users().login(username, password);
  }
}

export interface UserModel {
  id: string;
  username: string;
}
