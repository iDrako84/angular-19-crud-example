import { Injectable, signal, WritableSignal } from '@angular/core';
import { HeaderModel } from './header.model';
import { ColorSiteService } from '../../core/services/color-site.service';
import { SidebarService } from '../../core/services/sidebar.service';

@Injectable()
export class HeaderService {
  private readonly paths: WritableSignal<HeaderModel[]> = signal([
    new HeaderModel('table-users', 'Table Users', 'table-cells'),
    new HeaderModel('insert-edit-user', 'Inser / Edit User', 'user'),
    new HeaderModel('about', 'About', 'face-smilie'),
  ]);

  constructor(
    private _colorSiteService: ColorSiteService,
    private _sidebarService: SidebarService
  ) { }

  public getPaths(): WritableSignal<HeaderModel[]> {
    return this.paths;
  }

  public getIsDarkMode(): WritableSignal<boolean> {
    return this._colorSiteService.getIsDarkMode();
  }

  public onToggleColorSite(): void {
    this._colorSiteService.toggleIsDarkMode();
  }

  public getIsOpen(): WritableSignal<boolean> {
    return this._sidebarService.getIsOpen();
  }

  public onToggleIsOpen(): void {
    this._sidebarService.toggleIsOpen();
  }
}
