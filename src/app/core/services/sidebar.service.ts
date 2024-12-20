import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private readonly isOpen: WritableSignal<boolean> = signal(true);

  public getIsOpen(): WritableSignal<boolean> {
    return this.isOpen;
  }

  public toggleIsOpen(): void {
    this.isOpen.update((value: boolean) => !value);
  }
  
}
