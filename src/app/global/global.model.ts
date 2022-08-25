
export default class GlobalVars {
  public static messageError: string;
  public static messageSuccess: string;
  /* public static baseURL: string = 'http://localhost:3333' */
  public static baseURL = 'https://api-doe-mais.herokuapp.com';

  public static verifyRequest(res: any){
    if(!res.error) {
      this.messageSuccess = res.message;
      this.messageError = '';

    } else {
      this.messageError = res.error;
      this.messageSuccess = '';
    }
  }

  public static cleanVars(): void{
    this.messageError = '';
    this.messageSuccess = '';
  }
}

export interface IRequest{
  error: string;
  message: string;
}
