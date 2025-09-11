import {UserProfilePrototype} from './user-profile.prototype';

export class GuestProfile extends UserProfilePrototype {
  constructor(name: string) {
    super(name, 'Guest');
  }

  clone(): GuestProfile {
    return new GuestProfile(this.name);
  }
}
