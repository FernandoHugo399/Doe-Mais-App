import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { ToastController } from '@ionic/angular';
import { Institutions } from 'src/app/services/institutions/institutions.model';

@Component({
  selector: 'app-instituicoes',
  templateUrl: 'instituicoes.page.html',
  styleUrls: ['instituicoes.page.scss']
})
export class InstituicoesPage implements OnInit{
  public institutions: Institutions;
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

  private getAllInstitutions(): void {
    this.institutionsService.getAllInstitutions()
    .subscribe(
      res => { this.institutions = res; },
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
