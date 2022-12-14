import { IRequest } from '../global/global.model';
import { Observable } from 'rxjs';

export interface IServiceContact {
  sendMessage(message: ISendMessageDTO, toggleButton: boolean): Observable<IRequest>;
}


export interface ISendMessageDTO{
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}
