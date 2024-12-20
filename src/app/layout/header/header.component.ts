import { Component, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderService } from './header.service';
import { HeaderModel } from './header.model';
import { BtnPrimaryDirective } from '../../shared/directives/btn-primary.directive';
import { NgClass } from '@angular/common';
import { IconBars3Component } from "../../shared/icons/bars-3/bars-3.component";
import { IconSunComponent } from "../../shared/icons/sun/sun.component";
import { IconMoonComponent } from '../../shared/icons/moon/moon.component';
import { IconTableCellsComponent } from '../../shared/icons/table-cells/table-cells.component';
import { IconUserComponent } from '../../shared/icons/user/user.component';
import { FaceSmilieComponent } from '../../shared/icons/face-smilie/face-smilie.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink, 
    RouterLinkActive, 
    BtnPrimaryDirective, 
    NgClass, 
    IconBars3Component, 
    IconSunComponent, 
    IconMoonComponent, 
    IconTableCellsComponent,
    IconUserComponent,
    FaceSmilieComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [
    HeaderService
  ]
})
export class HeaderComponent {
  public readonly paths: WritableSignal<HeaderModel[]>;
  public readonly isDarkMode: WritableSignal<boolean>;
  public readonly isOpen: WritableSignal<boolean>;

  constructor(private _headerService: HeaderService) {
    this.paths = this._headerService.getPaths();
    this.isDarkMode = this._headerService.getIsDarkMode();
    this.isOpen = this._headerService.getIsOpen();
  }

  public onToggleColorSite(): void {
    this._headerService.onToggleColorSite();
  }

  public onToggleIsOpen(): void {
    this._headerService.onToggleIsOpen();
  }
}
