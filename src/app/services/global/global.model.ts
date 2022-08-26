export interface IRequest{
  error: string;
  message: string;
}

export interface IGlobalService {
  verifyRequest(res: any): void;
  cleanVars(): void;
};
