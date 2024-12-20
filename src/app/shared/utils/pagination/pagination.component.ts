import { Component, EventEmitter, Input, Output, Signal, signal, WritableSignal } from '@angular/core';
import { IPagination } from './pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [
    FormsModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input({required: true}) pagination!: Signal<IPagination>;
  @Input({required: true}) itemsForPageOptions: WritableSignal<number[]> = signal([]);
  @Output() onSelectedPage: EventEmitter<number> = new EventEmitter();
  @Output() onSelectedItemForPage: EventEmitter<number> = new EventEmitter();
  public readonly classesActive: WritableSignal<string> = signal('bg-blue-50 text-blue-600 enabled:hover:bg-blue-100 enabled:hover:text-blue-700');

  public onSetPage(page: number): void {
    this.onSelectedPage.emit(page);
  }

  public onItemForPage(itemForPage: string): void {
    this.onSelectedItemForPage.emit(+itemForPage)
  }
}
