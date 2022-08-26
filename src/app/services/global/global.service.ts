import { Injectable } from '@angular/core';
import { IGlobalService } from './global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements IGlobalService{

  public messageError: string;
  public messageSuccess: string;
  /* public baseURL: string = 'http://localhost:3333' */
  public baseURL = 'https://api-doe-mais.herokuapp.com';

  public verifyRequest(res: any){
    if(!res.error) {
      this.messageSuccess = res.message;
      this.messageError = '';

    } else {
      this.messageError = res.error;
      this.messageSuccess = '';
    }
  }

  public cleanVars(): void{
    this.messageError = '';
    this.messageSuccess = '';
  }
}
