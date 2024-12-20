import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-face-smilie',
  imports: [],
  templateUrl: './face-smilie.component.html',
  styleUrl: './face-smilie.component.scss',
  host: {
    class: 'flex justify-center'
  }
})
export class FaceSmilieComponent {
  @Input() color: string = 'none';
}
