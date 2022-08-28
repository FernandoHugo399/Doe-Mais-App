import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';
import { Institution } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.page.html',
  styleUrls: ['./saiba-mais.page.scss'],
})
export class SaibaMaisPage implements OnInit {
  public institution: Institution;
  public id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private institutionsService: InstitutionsService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.institutionsService.getInstitutionById(this.id)
    .subscribe(
      res => this.institution = res,
      err => {
        this.globalService.errMessage = 'Ocorreu um erro ao carregar as informações';
        this.route.navigate(['tabs/instituicoes']);
      }
    );
  }
}
