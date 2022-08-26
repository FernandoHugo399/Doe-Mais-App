import { GlobalService } from './../../services/global/global.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Institutions } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public institutions: Institutions;
  public option_slide = {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 8,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      280:{
        slidesPerView: 2.5,
        spaceBetween: 8
      },
      340:{
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 4.5,
        spaceBetween: 14
      }
    }
  };

  constructor(
    private institutionsService: InstitutionsService,
    private globalService: GlobalService,
    private toastController: ToastController
    ) { }

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

  /* ionViewWillLeave() {
    this.navigationTransitionConfig();
   } */

  /* private navigationTransitionConfig(){
    const options: NativeTransitionOptions = {
      direction: 'left',
      duration: 200,
      slowdownfactor: -1,
      androiddelay: 50
     };

     this.nativePageTransitions.slide(options);
  } */
}
