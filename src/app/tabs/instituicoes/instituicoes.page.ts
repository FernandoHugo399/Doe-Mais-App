import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instituicoes',
  templateUrl: 'instituicoes.page.html',
  styleUrls: ['instituicoes.page.scss']
})
export class InstituicoesPage {

  constructor(private institutionsService: InstitutionsService) {

  }

}
