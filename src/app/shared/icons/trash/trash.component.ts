import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-trash',
  imports: [],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconTrashComponent {
  @Input() color: string = 'none';
}
