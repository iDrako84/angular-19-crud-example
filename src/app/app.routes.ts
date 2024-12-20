import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'table-users', pathMatch: 'full' },
    { path: 'table-users', loadComponent: () => import('./features/table-users/table-users.component').then(c => c.TableUsersComponent) },
    { path: 'insert-edit-user', loadComponent: () => import('./features/insert-edit-user/insert-edit-user.component').then(c => c.InsertEditUserComponent) },
    { path: 'about', loadComponent: () => import('./features/about/about.component').then(c => c.AboutComponent) }
];
