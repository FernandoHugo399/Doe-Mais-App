import { IRequest } from './../../global/global.model';
import { Observable } from "rxjs";

export interface IServiceContact {
  sendMessage(message: ISendMessageDTO, inputSubmit: { nativeElement: HTMLInputElement }): Observable<IRequest>
}

export interface IServiceContactMethods {
  sendMessage(): void
}


export interface ISendMessageDTO{
  nome: string
  email: string
  telefone: string
  mensagem: string
}
