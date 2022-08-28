import { GlobalService } from './../../services/global/global.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ISendMessageDTO } from 'src/app/services/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contate-nos',
  templateUrl: 'contate-nos.page.html',
  styleUrls: ['contate-nos.page.scss']
})
export class ContateNosPage {
  public disableButton = false;
  public message: ISendMessageDTO = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  constructor(
    private contactService: ContactService,
    private toastController: ToastController,
    private globalService: GlobalService
    ) { }

  public sendMessage(): void {
    this.disableButton = true;
    this.contactService.sendMessage(this.message,)
    .subscribe( ()=>{
        if(!this.globalService.successMessage) {
          this.errorToastr(this.globalService.errMessage);
        } else {
          this.successToastr();
        }
        this.globalService.cleanVars();
        this.disableButton = false;
      },
      (err)=> {
        this.errorToastr('Ocorreu um erro interno');
        this.disableButton = false;
      }
    );
  }


  public async errorToastr(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  public async successToastr() {
    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
