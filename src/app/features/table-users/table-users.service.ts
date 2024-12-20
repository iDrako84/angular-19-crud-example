import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { UserModel } from '../../core/services/user.model';
import { IPagination } from '../../shared/utils/pagination/pagination';
import { UsersStoreService } from '../../core/services/users-store.service';
import { Router } from '@angular/router';

@Injectable()
export class TableUsersService {
  private readonly users: WritableSignal<UserModel[]>;
  private readonly tableHead: WritableSignal<string[]> = signal([
    'First Name',
    'Last Name',
    'Gender',
    'Age',
    'Address',
    'Country',
    'Zip Code',
    'Email',
    'Telephone',
    'Actions'
  ]);
  private readonly count: Signal<number> = computed(() => {
    return this.users().length;
  });
  private readonly itemsForPageOptions: WritableSignal<number[]> = signal([2, 5, 10, 50]);
  private readonly page: WritableSignal<number> = signal(1);
  private readonly itemsForPage: WritableSignal<number> = signal(10);
  private readonly startIndex: Signal<number> = computed(() => {
    return (this.page() - 1) * this.itemsForPage();
  });
  private readonly endIndex: Signal<number> = computed(() => {
    return this.startIndex() + this.itemsForPage();
  });
  private readonly lastPage: Signal<number> = computed(() => {
    return Math.ceil(this.count() / this.itemsForPage());
  });
  private readonly pagination: Signal<IPagination> = computed(() => {
    return {
      page: this.page(),
      itemsForPage: this.itemsForPage(),
      count: this.users().length,
      startIndex: this.startIndex(),
      endIndex: this.endIndex(),
      lastPage: this.lastPage(),
    };
  });
  private readonly usersPagination: Signal<UserModel[]> = computed(() => {
    const startIndex = this.pagination().startIndex;
    const endIndex = this.pagination().endIndex;
    return this.users().slice(startIndex, endIndex);
  });

  constructor(
    private _usersStoreService: UsersStoreService,
    private _router: Router
  ) {
    this.users = this._usersStoreService.getUsers();
  }

  public getTableHead(): WritableSignal<string[]> {
    return this.tableHead;
  }

  public getUsersPagination(): Signal<UserModel[]> {
    return this.usersPagination
  }

  public getPagination(): Signal<IPagination> {
    return this.pagination;
  }

  public setItemForPage(itemForPage: number): void {
    this.itemsForPage.set(itemForPage);
  }

  public setPage(page: number): void {
    this.page.set(page);
  }

  public getItemsForPageOptions(): WritableSignal<number[]> {
    return this.itemsForPageOptions;
  }

  public onEditUser(user: UserModel): void {
    this._router.navigate(['insert-edit-user'], { queryParams: { id: user.id } });
  }

  public onDeleteUser(user: UserModel): void {
    this._usersStoreService.removeUser(user);
    this.page.set(1);
  }
}
