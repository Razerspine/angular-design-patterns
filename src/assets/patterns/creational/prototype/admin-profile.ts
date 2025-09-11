import {UserProfilePrototype} from './user-profile.prototype';

export class AdminProfile extends UserProfilePrototype {
  constructor(name: string) {
    super(name, 'Admin');
  }

  clone(): AdminProfile {
    return new AdminProfile(this.name);
  }
}
