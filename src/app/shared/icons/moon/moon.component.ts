import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-moon',
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconMoonComponent {
  @Input() color: string = 'none';
}
