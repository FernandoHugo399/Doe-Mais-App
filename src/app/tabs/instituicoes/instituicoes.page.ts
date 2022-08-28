import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { SearchbarCustomEvent, ToastController } from '@ionic/angular';
import { Institution } from 'src/app/services/institutions/institutions.model';

@Component({
  selector: 'app-instituicoes',
  templateUrl: 'instituicoes.page.html',
  styleUrls: ['instituicoes.page.scss']
})
export class InstituicoesPage implements OnInit{
  public allInstitutions: Institution[];
  public queryText = '';
  public institutions: Institution[];

  constructor(
    private institutionsService: InstitutionsService,
    private globalService: GlobalService,
    private toastController: ToastController
  )
  { }

  ionViewWillEnter() {
    if(this.globalService.errMessage) {
      this.errToastr(this.globalService.errMessage);
    }
  }

  ngOnInit(): void {
    this.getAllInstitutions();
  }

  public filterInstitutions(_event: Event){
    const event = _event as SearchbarCustomEvent;
    const query = event.target.value;

    if(query && query.trim() !== ''){
      this.institutions = this.allInstitutions
      .filter((institution)=> institution.nome.toLowerCase().indexOf(query.toLowerCase()) > -1 );
    } else {
      this.institutions = this.allInstitutions;
    }
  }

  private getAllInstitutions(): void {
    this.institutionsService.getAllInstitutions()
    .subscribe(
      res => { this.allInstitutions = res; this.institutions = this.allInstitutions; },
      err => this.errToastr('Ocorreu ao carregar as instituições')
    );
  }

  private async errToastr(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}

