import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControlName,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [NgClass, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor, AfterViewInit {
  @Input({required: true}) fieldId = '';
  @Input() fieldType = 'text';
  @Input() fieldLabel: string | null = '';
  @Input() fieldPlaceholder: string | null = '';
  @Input() fieldErrorRequiredMess = 'Mandatory Field.';
  @Input() fieldErrorMinLengthMess = 'The field is too short, Min: ';
  @Input() fieldErrorMaxLengthMess = 'The field is too long, Max: ';
  @Input() fieldErrorPatternMess = 'Invalid field.';
  @Input() fieldErrorMinMess = 'Invalid field, min: ';
  @Input() fieldErrorMaxMess = 'Invalid field, max: ';
  @Input() readonly = false;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  public value!: string;
  public disabled = false;

  public ngControl!: NgControl;

  constructor(private inj: Injector) { }

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
