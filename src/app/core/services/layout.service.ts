import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuIsActive: WritableSignal<boolean> = signal(false);

  toggleMenu(): void {
    this.menuIsActive.update(value => !value);
  }
}
