import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-bars-3',
  imports: [],
  templateUrl: './bars-3.component.html',
  styleUrl: './bars-3.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconBars3Component {
  @Input() color: string = 'none';
}
