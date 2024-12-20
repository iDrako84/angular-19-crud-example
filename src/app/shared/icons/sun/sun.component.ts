import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-sun',
  imports: [],
  templateUrl: './sun.component.html',
  styleUrl: './sun.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconSunComponent {
  @Input() color: string = 'none';
}
