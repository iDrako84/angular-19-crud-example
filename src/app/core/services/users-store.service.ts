import { Injectable, signal, WritableSignal } from '@angular/core';
import { UserModel } from './user.model';
import { GenderEnum } from './gender.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {
  private readonly users: WritableSignal<UserModel[]> = signal([
    new UserModel(new Date('1970-01-01').getTime(), 'Mario', 'Rossi', GenderEnum.MALE, 20, 'Vl. Empoli', 'IT', '00100', 'm.rossi@fakeemail.it', '3330011222')
  ]);

  public getUsers(): WritableSignal<UserModel[]> {
    return this.users;
  }

  public findUser(id: number): UserModel | null {
    const users: UserModel[] = this.users();
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return users[index];
    } else {
      return null;
    }
  }

  public addUser(newUser: UserModel): void {
    this.users.update((values) => {
      return [
        ...values,
        newUser
      ];
    });
  }

  public removeUser(user: UserModel): void {
    this.users.update((values) => {
      return [
        ...values.filter((u) => u.id !== user.id)
      ];
    });
  }
}
