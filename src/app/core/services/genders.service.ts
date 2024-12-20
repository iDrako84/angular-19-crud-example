import { Injectable, signal, WritableSignal } from '@angular/core';
import { GenderModel } from './gender.model';
import { GenderEnum } from './gender.enum';

@Injectable({
  providedIn: 'root'
})
export class GendersService {
  private genders: WritableSignal<GenderModel[]> = signal([
    { abbreviation: GenderEnum.FEMALE, gender: 'Female' },
    { abbreviation: GenderEnum.MALE, gender: 'Male' },
    { abbreviation: GenderEnum.ND, gender: 'Not Definited' },
  ])

  public getGenders(): WritableSignal<GenderModel[]> {
    return this.genders;
  }

  public findGender(abbreviation: string): GenderModel | null {
    const genders = this.genders();
    const index = genders.findIndex((gender) => gender.abbreviation === abbreviation);
    if (index !== -1) {
      return genders[index];
    } else {
      return null;
    }
  }
}
