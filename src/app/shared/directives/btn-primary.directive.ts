import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[btn-primary]'
})
export class BtnPrimaryDirective {
  @HostBinding('class') private readonly classes = 'text-white bg-neutral-600 hover:enabled:bg-neutral-700 dark:bg-gray-700 hover:enabled:dark:bg-gray-800 px-2.5 py-1.5 rounded outline-none border-none disabled:opacity-40 disabled:cursor-not-allowed';
}
