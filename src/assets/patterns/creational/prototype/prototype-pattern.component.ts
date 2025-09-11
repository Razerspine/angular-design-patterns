import {Component} from '@angular/core';
import {UserProfileService} from './user-profile.service';
import {UserProfilePrototype} from './user-profile.prototype';

@Component({
  selector: 'app-prototype-pattern',
  standalone: true,
  template: `
    <h2>Prototype Pattern Example</h2>
    <button (click)="createAdmin()">Create Admin</button>
    <button (click)="cloneAdmin()">Clone Admin</button>
    <button (click)="createGuest()">Create Guest</button>
    <button (click)="cloneGuest()">Clone Guest</button>

    @for (profile of profiles; track profile) {
      <p>{{ profile.role }}: {{ profile.name }}</p>
    }
  `
})
export class PrototypePatternComponent {
  profiles: UserProfilePrototype[] = [];
  private lastAdmin?: UserProfilePrototype;
  private lastGuest?: UserProfilePrototype;

  constructor(private profileService: UserProfileService) {
  }

  createAdmin() {
    this.lastAdmin = this.profileService.createAdmin('Alice');
    this.profiles.push(this.lastAdmin);
  }

  cloneAdmin() {
    if (this.lastAdmin) {
      this.profiles.push(this.profileService.cloneProfile(this.lastAdmin));
    }
  }

  createGuest() {
    this.lastGuest = this.profileService.createGuest('Bob');
    this.profiles.push(this.lastGuest);
  }

  cloneGuest() {
    if (this.lastGuest) {
      this.profiles.push(this.profileService.cloneProfile(this.lastGuest));
    }
  }
}
