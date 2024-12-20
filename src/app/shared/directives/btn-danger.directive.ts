import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[btn-danger]'
})
export class BtnDangerDirective {
@HostBinding('class') private readonly classes = 'text-white bg-red-800 hover:bg-red-900 px-2.5 py-1.5 rounded outline-none border-none';
}
