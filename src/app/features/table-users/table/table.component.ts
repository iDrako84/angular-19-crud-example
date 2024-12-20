import { Component, Signal, WritableSignal } from '@angular/core';
import { TableUsersService } from '../table-users.service';
import { UserModel } from '../../../core/services/user.model';
import { NgClass } from '@angular/common';
import { BtnPrimaryDirective } from '../../../shared/directives/btn-primary.directive';
import { BtnDangerDirective } from '../../../shared/directives/btn-danger.directive';
import { IconPencilSquareComponent } from '../../../shared/icons/pencil-square/pencil-square.component';
import { IconTrashComponent } from '../../../shared/icons/trash/trash.component';
import { PaginationComponent } from '../../../shared/utils/pagination/pagination.component';
import { IPagination } from '../../../shared/utils/pagination/pagination';
import { CountryPipe } from '../../../shared/pipes/country.pipe';
import { GenderPipe } from '../../../shared/pipes/gender.pipe';

@Component({
  selector: 'app-table',
  imports: [
    NgClass,
    BtnPrimaryDirective,
    BtnDangerDirective,
    IconPencilSquareComponent,
    IconTrashComponent,
    PaginationComponent,
    CountryPipe,
    GenderPipe
],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public readonly tableHead: WritableSignal<string[]>;
  public readonly usersPagination: Signal<UserModel[]>;
  public readonly pagination: Signal<IPagination>;
  public readonly itemsForPageOptions: WritableSignal<number[]>

  constructor(
    private _tableUsersService: TableUsersService
  ) {
    this.tableHead = this._tableUsersService.getTableHead();
    this.usersPagination = this._tableUsersService.getUsersPagination();
    this.pagination = this._tableUsersService.getPagination();
    this.itemsForPageOptions = this._tableUsersService.getItemsForPageOptions();
  }

  public onEditUser(user: UserModel): void {
    this._tableUsersService.onEditUser(user);
  }

  public onDeleteUser(user: UserModel): void {
    this._tableUsersService.onDeleteUser(user);
  }

  public onSelectedPage(page: number): void {
    this._tableUsersService.setPage(page);
  }
  public onSelectedItemForPage(itemForPage: number): void {
    this._tableUsersService.setPage(1);
    this._tableUsersService.setItemForPage(itemForPage);
  }
}
