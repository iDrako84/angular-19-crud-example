import { computed, effect, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { InsertEditUserEnum } from './insert-edit-user.enum';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { GenderEnum } from '../../core/services/gender.enum';
import { Patterns } from '../../shared/forms/patterns';
import { GenderModel } from './gender.model';
import { CountrysService } from '../../core/services/countrys.service';
import { CountryModel } from '../../core/services/country.model';
import { UsersStoreService } from '../../core/services/users-store.service';
import { UserModel } from '../../core/services/user.model';
import { Router } from '@angular/router';

@Injectable()
export class InsertEditUserService {
  private readonly id: WritableSignal<number | null> = signal(null);
  private readonly mode: Signal<InsertEditUserEnum> = computed(() => {
    const id: number | null = this.id();
    return id !== null ? InsertEditUserEnum.EDIT : InsertEditUserEnum.NEW;
  });
  private readonly title: Signal<string> = computed(() => {
    const mode: InsertEditUserEnum = this.mode();
    const id: number | null = this.id();
    if (mode === InsertEditUserEnum.NEW) {
      return 'New User';
    } else {
      return `Edit User (id: ${id})`;
    }
  });
  private form: FormGroup;
  private firstnameSignal: Signal<string | null | undefined>;
  private lastNameSignal: Signal<string | null | undefined>;
  private genderSignal: Signal<GenderEnum | null | undefined>;
  private ageSignal: Signal<number | null | undefined>;
  private addressSignal: Signal<string | null | undefined>;
  private countrySignal: Signal<string | null | undefined>;
  private zipSignal: Signal<string | null | undefined>;
  private emailSignal: Signal<string | null | undefined>;
  private telephoneSignal: Signal<string | null | undefined>;
  private formValue = computed(() => {
    return {
      firstName: this.firstnameSignal() as string,
      lastName: this.lastNameSignal() as string,
      gender: this.genderSignal() as GenderEnum,
      age: +(this.ageSignal() as number),
      address: this.addressSignal() as string,
      country: this.countrySignal() as string,
      zip: this.zipSignal() as string,
      email: this.emailSignal() as string,
      telephone: this.telephoneSignal() as string,
    };
  });
  private readonly genderOptions: WritableSignal<GenderModel[]> = signal([
    new GenderModel(GenderEnum.FEMALE, 'Female'),
    new GenderModel(GenderEnum.MALE, 'Male'),
    new GenderModel(GenderEnum.ND, 'Not Definited')
  ]);
  private readonly countryOptions: WritableSignal<CountryModel[]>;

  constructor(
    private _fb: FormBuilder,
    private _countrysService: CountrysService,
    private _usersStoreService: UsersStoreService,
    private _router: Router
  ) {
    this.form = this._fb.group({
      firstName: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NAME), Validators.maxLength(40)]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NAME), Validators.maxLength(40)]),
      gender: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NUMBER), Validators.min(0), Validators.max(130)]),
      address: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NAME), Validators.maxLength(40)]),
      country: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NUMBER), Validators.maxLength(6)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(Patterns.EMAIL), Validators.maxLength(60)]),
      telephone: new FormControl(null, [Validators.required, Validators.pattern(Patterns.NUMBER), Validators.minLength(8), Validators.maxLength(14)]),
    });
    effect(() => {
      const id: number | null = this.id();
      if (id !== null) {
        const user = this._usersStoreService.findUser(id);
        if (user) {
          this.form.patchValue({...user});
          this.form.markAsPristine();
          this.form.updateValueAndValidity();
        }
      }
    });
    this.firstnameSignal = toSignal(
      this.form.controls['firstName'].valueChanges,
      { initialValue: this.form.controls['firstName'].value }
    );
    this.lastNameSignal = toSignal(
      this.form.controls['lastName'].valueChanges,
      { initialValue: this.form.controls['lastName'].value }
    );
    this.genderSignal = toSignal(
      this.form.controls['gender'].valueChanges,
      { initialValue: this.form.controls['gender'].value }
    );
    this.ageSignal = toSignal(
      this.form.controls['age'].valueChanges,
      { initialValue: this.form.controls['age'].value }
    );
    this.addressSignal = toSignal(
      this.form.controls['address'].valueChanges,
      { initialValue: this.form.controls['address'].value }
    );
    this.countrySignal = toSignal(
      this.form.controls['country'].valueChanges,
      { initialValue: this.form.controls['country'].value }
    );
    this.zipSignal = toSignal(
      this.form.controls['zip'].valueChanges,
      { initialValue: this.form.controls['zip'].value }
    );
    this.emailSignal = toSignal(
      this.form.controls['email'].valueChanges,
      { initialValue: this.form.controls['email'].value }
    );
    this.telephoneSignal = toSignal(
      this.form.controls['telephone'].valueChanges,
      { initialValue: this.form.controls['telephone'].value }
    );
    this.countryOptions = this._countrysService.getCountryes();
  }

  public setId(id: number): void {
    this.id.set(id);
  }

  public getTitle(): Signal<string> {
    return this.title;
  }

  public get getForm(): FormGroup {
    return this.form;
  }

  public getGenderOptions(): WritableSignal<{ key: GenderEnum, value: string }[]> {
    return this.genderOptions;
  }

  public getCountryOptions(): WritableSignal<CountryModel[]> {
    return this.countryOptions;
  }

  public save(): void {
    if (this.form.valid) {
      const mode: InsertEditUserEnum = this.mode();
      const formValue = this.formValue();
      if (mode === InsertEditUserEnum.NEW) {
        this._usersStoreService.addUser({...formValue, id: new Date().getTime()});
      } else {
        const id: number = this.id() as number;
        this._usersStoreService.getUsers().update((values: UserModel[]) => values.map((user: UserModel) => {
          if (user.id === id) {
            return {
              id,
              ...formValue
            };
          }
          return user;
        }));
      }
      this._router.navigate(['table-users']);
    }
  }
}
