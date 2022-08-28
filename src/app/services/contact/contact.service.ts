import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISendMessageDTO, IServiceContact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';
import { IRequest } from '../global/global.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements IServiceContact {
  private baseURL: string;
  constructor(private http: HttpClient, private globalService: GlobalService) {
    this.baseURL = globalService.baseURL;
   }

  public sendMessage(message: ISendMessageDTO): Observable<IRequest> {
    return this.http.post<IRequest>(`${this.baseURL}/save-message`, {
      nome: message.nome,
      email: message.email,
      telefone: message.telefone,
      mensagem: message.mensagem
    })
    .pipe(tap(()=>{
      message.email = '';
      message.nome = '';
      message.telefone = '';
      message.mensagem = '';
    }))
    .pipe(tap((res)=>{
      this.globalService.verifyRequest(res);
    }));
  }

}
