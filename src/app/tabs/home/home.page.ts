/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Institutions } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public institutions!: Institutions;
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
      },
      660: {
        slidesPerView: 5.5,
        spaceBetween: 18
      },
      900: {
        slidesPerView: 6.5,
        spaceBetween: 25
      },
      1280: {
        slidesPerView: 7.5,
        spaceBetween: 30
      },
      1600: {
        slidesPerView: 8.5,
        spaceBetween: 35
      }
    }
  };

  constructor(private institutionsService: InstitutionsService, private nativePageTransitions: NativePageTransitions) { }

  /* ionViewWillLeave() {
    this.navigationTransitionConfig();
   } */

  ngOnInit(): void {
    this.getAllInstitutions();
  }

  getAllInstitutions(): void {
    this.institutionsService.getAllInstitutions()
    .subscribe( res =>  this.institutions = res );
  }

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
