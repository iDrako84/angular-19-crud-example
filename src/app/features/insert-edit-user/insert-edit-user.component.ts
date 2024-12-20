import { Component, OnInit, Signal } from '@angular/core';
import { InsertEditUserService } from './insert-edit-user.service';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../shared/utils/title/title.component';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-insert-edit-user',
  imports: [TitleComponent, FormUserComponent],
  templateUrl: './insert-edit-user.component.html',
  styleUrl: './insert-edit-user.component.scss',
  providers: [
    InsertEditUserService
  ]
})
export class InsertEditUserComponent implements OnInit {
  public readonly title: Signal<string>;

  constructor(private route: ActivatedRoute, private _insertEditUserService: InsertEditUserService) {
    this.title = this._insertEditUserService.getTitle();
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.queryParams['id'];
    if (id !== undefined) {
      this._insertEditUserService.setId(+id);
    }
  }
}
