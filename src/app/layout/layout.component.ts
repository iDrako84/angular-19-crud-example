import { Component, computed, WritableSignal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NgClass } from '@angular/common';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    LayoutService
  ]
})
export class LayoutComponent {
  private readonly isOpen: WritableSignal<boolean>;
  public readonly headerClasses = computed(() => {
    const isOpen: boolean = this.isOpen();
    return isOpen ? 'w-[300px]' : 'w-[60px]';
  });
  public readonly contentClasses = computed(() => {
    const isOpen: boolean = this.isOpen();
    return isOpen ? 'w-[calc(100%-300px)] ml-[300px]' : 'w-[calc(100%-60px)] ml-[60px]';
  });

  constructor(private _layoutService: LayoutService) {
    this.isOpen = this._layoutService.getMenuIsOpen();
  }
}
