import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuIsActive: WritableSignal<boolean> = signal(false);

  toggleMenu(): void {
    const newValue = !this.menuIsActive();
    this.menuIsActive.set(newValue);
    const body = document.body;
    if (newValue) {
      body.classList.add('block-scroll');
    } else {
      body.classList.remove('block-scroll');
    }
  }
}
