/* eslint-disable @typescript-eslint/naming-convention */
import { Observable } from 'rxjs';

export interface Institution{
  id_instituicao: number;
  nome: string;
  logo: string;
  email: string;
  localizacao: string;
  telefone_1: string;
  telefone_2?: string;
  cpf_responsavel: string;
  cnpj?: string;
  website?: string;
  sobre: string;
  sobre_curto: string;

}

export interface InstitutionBankInformation{
  id_dados: number;
  banco_pix_1: string;
  pix_1: string;
  qr_code_pix_1: string;
  banco_pix_2?: string;
  pix_2?: string;
  qr_code_pix_2?: string;
  localizacao: string;
  logo: string;
  sobre_curto: string;
  nome: string;
  id_instituicao: number;
}


export interface IServiceInstitutions {
  getAllInstitutions(): Observable<Institution[]>;
  getInstitutionById(id: string): Observable<Institution>;
  getBankInformationsByIdOffInstitution(id: string): Observable<InstitutionBankInformation>;
}
