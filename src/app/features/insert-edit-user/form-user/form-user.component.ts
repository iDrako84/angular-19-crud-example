import { Component, WritableSignal } from '@angular/core';
import { InputFieldComponent } from '../../../shared/forms/input-field/input-field.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InsertEditUserService } from '../insert-edit-user.service';
import { SelectFieldComponent } from '../../../shared/forms/select-field/select-field.component';
import { GenderModel } from '../gender.model';
import { CountryModel } from '../../../core/services/country.model';
import { BtnPrimaryDirective } from '../../../shared/directives/btn-primary.directive';

@Component({
  selector: 'app-form-user',
  imports: [
    InputFieldComponent,
    SelectFieldComponent,
    ReactiveFormsModule,
    BtnPrimaryDirective
  ],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss'
})
export class FormUserComponent {
  public form: FormGroup;
  public readonly genderOptions: WritableSignal<GenderModel[]>;
  public readonly countryOptions: WritableSignal<CountryModel[]>;

  constructor(private _insertEditUserService: InsertEditUserService) {
    this.form = this._insertEditUserService.getForm;
    this.genderOptions = this._insertEditUserService.getGenderOptions();
    this.countryOptions = this._insertEditUserService.getCountryOptions();
  };

  public onSubmit(): void {
    this._insertEditUserService.save();
  }
}
