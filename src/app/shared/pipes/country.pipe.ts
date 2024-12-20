import { Pipe, PipeTransform } from '@angular/core';
import { CountrysService } from '../../core/services/countrys.service';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  constructor(private _countrysService: CountrysService) {}

  transform(value: string): string {
    return this._countrysService.findCountry(value)?.country || 'Nd.';
  }

}
