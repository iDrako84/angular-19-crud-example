import { Injectable, WritableSignal } from '@angular/core';
import { SidebarService } from '../core/services/sidebar.service';

@Injectable()
export class LayoutService {

  constructor(private _sidebarService: SidebarService) {}

  public getMenuIsOpen(): WritableSignal<boolean> {
    return this._sidebarService.getIsOpen();
  }
}
