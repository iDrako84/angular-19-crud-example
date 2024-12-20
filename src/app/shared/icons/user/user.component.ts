import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconUserComponent {
  @Input() color: string = 'none';
}
