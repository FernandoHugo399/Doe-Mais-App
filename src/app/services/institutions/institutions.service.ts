import { Router } from '@angular/router';
import { Institution, InstitutionBankInformation, IServiceInstitutions } from './institutions.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService implements IServiceInstitutions {
  private baseURL: string;
  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService) {
    this.baseURL = globalService.baseURL;
   }

  getAllInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.baseURL + '/institutions')
    .pipe(tap((res)=>{
      this.globalService.verifyRequest(res);
    }));
  }

  getInstitutionById(id: string): Observable<Institution> {
    return this.http.get<Institution>(this.baseURL + '/institution/' + id)
    .pipe(tap((res)=>{
     this.globalService.verifyRequest(res);
      if(this.globalService.errMessage) {
        this.router.navigate(['tabs/instituicoes']);
      }
    }));
  }

  getBankInformationsByIdOffInstitution(id: string): Observable<InstitutionBankInformation> {
    return this.http.get<InstitutionBankInformation>(this.baseURL + '/institution-information/' + id)
    .pipe(tap((res)=>{
      this.globalService.verifyRequest(res);
      if(this.globalService.errMessage) {
        this.router.navigate(['tabs/instituicoes']);
      }
    }));
  }

}
