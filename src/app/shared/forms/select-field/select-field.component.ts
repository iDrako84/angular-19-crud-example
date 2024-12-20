import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  forwardRef,
  Injector,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControlName,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-select-field',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true,
    },
  ],
})
export class SelectFieldComponent implements ControlValueAccessor, AfterViewInit {
  @Input({required: true}) fieldId = '';
  @Input() fieldLabel: string | null = '';
  @Input() fieldErrorRequiredMess = 'Mandatory Field.';

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  public disabled: boolean = false;
  public value!: string;
  public ngControl!: NgControl;

  public get fieldFormControlName(): FormControlName {
    return this.ngControl as FormControlName;
  }

  public get inputError(): boolean {
    return !!(
      (this.ngControl as FormControlName)?.control?.touched &&
      (this.ngControl as FormControlName)?.control?.touched &&
      (this.ngControl as FormControlName)?.control?.invalid
    );
  }

  constructor(private inj: Injector) {}

  ngAfterViewInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public setValue(e: string): void {
    if (this.disabled) return;
    this.value = e;
    this.onChange(this.value);
    this.onTouched();
  }
}
