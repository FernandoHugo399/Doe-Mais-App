import { Injectable } from '@angular/core';
import { IGlobalService } from './global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements IGlobalService{

  public errMessage: string;
  public successMessage: string;
  /* public baseURL: string = 'http://localhost:3333' */
  public baseURL = 'https://api-doe-mais.herokuapp.com';

  public verifyRequest(res: any){
    if(!res.error) {
      this.successMessage = res.message;
      this.errMessage = '';

    } else {
      this.errMessage = res.error;
      this.successMessage = '';
    }
  }

  public cleanVars(): void{
    this.errMessage = '';
    this.successMessage = '';
  }
}
