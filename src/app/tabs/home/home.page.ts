import { Component } from '@angular/core';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private institutionsService: InstitutionsService) {

  }

}
