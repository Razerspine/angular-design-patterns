import {Injectable} from '@angular/core';
import {AdminProfile} from './admin-profile';
import {GuestProfile} from './guest-profile';
import {UserProfilePrototype} from './user-profile.prototype';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  createAdmin(name: string): UserProfilePrototype {
    return new AdminProfile(name);
  }

  createGuest(name: string): UserProfilePrototype {
    return new GuestProfile(name);
  }

  cloneProfile(profile: UserProfilePrototype): UserProfilePrototype {
    return profile.clone();
  }
}
