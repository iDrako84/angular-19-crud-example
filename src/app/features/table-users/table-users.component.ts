import { Component, signal, WritableSignal } from '@angular/core';
import { TitleComponent } from '../../shared/utils/title/title.component';
import { TableUsersService } from './table-users.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-table-users',
  imports: [
    TitleComponent,
    TableComponent
  ],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss',
  providers: [
    TableUsersService
  ]
})
export class TableUsersComponent {
  public readonly title: WritableSignal<string> = signal(`Table Users`);
}
