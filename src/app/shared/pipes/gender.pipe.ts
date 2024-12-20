import { Pipe, PipeTransform } from '@angular/core';
import { GendersService } from '../../core/services/genders.service';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  constructor(private _gendersService: GendersService) { }

  transform(value: string): string {
    return this._gendersService.findGender(value)?.gender || 'Nd.';
  }

}
