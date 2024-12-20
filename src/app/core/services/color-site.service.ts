import { effect, Inject, Injectable, Renderer2, RendererFactory2, signal, WritableSignal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ColorSiteService {
  private _renderer: Renderer2;
  private readonly isDarkMode: WritableSignal<boolean> = signal(false);

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this._renderer = this.rendererFactory.createRenderer(null, null); 
    this._renderer.addClass(this.document.body, 'bg-gray-300');
    this._renderer.addClass(this.document.body, 'dark:bg-black');
    this._renderer.addClass(this.document.body, 'dark:text-white');

    effect(() => {
      const isDarkMode = this.isDarkMode();
      if (isDarkMode === true) {
        this._renderer.addClass(this.document.body, 'dark');
      } else {
        this._renderer.removeClass(this.document.body, 'dark');
      }
    });
  }

  public getIsDarkMode(): WritableSignal<boolean> {
    return this.isDarkMode;
  }

  public toggleIsDarkMode(): void {
    this.isDarkMode.update((value) => {
      return !value;
    });
  }
}
