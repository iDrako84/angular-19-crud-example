import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-pencil-square',
  imports: [],
  templateUrl: './pencil-square.component.html',
  styleUrl: './pencil-square.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconPencilSquareComponent {
  @Input() color: string = 'none';
}
