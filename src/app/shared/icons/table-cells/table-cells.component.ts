import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-table-cells',
  imports: [],
  templateUrl: './table-cells.component.html',
  styleUrl: './table-cells.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class IconTableCellsComponent {
  @Input() color: string = 'none';
}
