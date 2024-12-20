import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly version: WritableSignal<string> = signal(packageJson.version);
  public readonly title: Signal<string> = computed(() => {
    return `Angular 19 CRUD Example: (v: ${this.version()})`;
  });
  public readonly subTitle: WritableSignal<string> = signal('This site, built entirely in Angular 19, simulates a frontend CRUD application. It features a table where users can be edited or deleted, and a form to modify existing users or add new ones, offering a seamless and intuitive user management experience.');
}
