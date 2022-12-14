import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';
import { InstitutionBankInformation } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';

@Component({
  selector: 'app-doar-agora',
  templateUrl: './doar-agora.page.html',
  styleUrls: ['./doar-agora.page.scss'],
})
export class DoarAgoraPage implements OnInit {

  public institutionBankInformation: InstitutionBankInformation;
  public id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private institutionsService: InstitutionsService,
    private globalService: GlobalService,
    private toastController: ToastController
  ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.request(this.id);
  }

  ionViewDidLeave() {
    if(this.globalService.errMessage) {
      this.errToastr(this.globalService.errMessage);
      this.globalService.cleanVars();
    }
  }

  public request(id: string): void {
    this.institutionsService.getBankInformationsByIdOffInstitution(id)
    .subscribe(
      res => this.institutionBankInformation = res,
      err => {
        this.globalService.errMessage = 'Ocorreu um erro ao carregar as informações';
        this.route.navigate(['tabs/instituicoes']);
      }
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
