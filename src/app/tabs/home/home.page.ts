import { Component } from '@angular/core';
import { Institutions } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public institutions!: Institutions;
  constructor(private institutionsService: InstitutionsService) {

  }

}
