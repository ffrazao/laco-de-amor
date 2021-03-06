import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmeComponent } from './confirme.component';

@Injectable()
export class MensagemService {

  constructor(
    private toastr: ToastrService,
    public dialog: MatDialog,
  ) {
  }

  public sucesso(msg: string, titulo: string = null) {
    this.toastr.success(msg, titulo ? titulo : 'Sucesso!', {
      positionClass: 'toast-top-center',
      closeButton: true,
    });
  }

  public atencao(msg: string, titulo: string = null) {
    this.toastr.warning(msg, titulo ? titulo : 'Atenção!', {
      positionClass: 'toast-top-center',
      closeButton: true,
    });
  }

  public erro(msg: string, titulo: string = null) {
    this.toastr.error(msg, titulo ? titulo : 'Erro!', {
      positionClass: 'toast-top-center',
      closeButton: true,
    });
  }

  public erroGrave(msg: string, titulo: string = null) {
    this.toastr.error(msg, titulo ? titulo : 'Erro Grave!', {
      tapToDismiss: false,
      progressBar: true,
      progressAnimation: 'decreasing',
      timeOut: 10000,
      disableTimeOut: false,
      positionClass: 'toast-top-full-width',
      enableHtml: true,
    });
  }

  public confirme(mensagem: string): Promise<boolean> {
    return new Promise(async resolve => {
      const dialogRef = await this.dialog.open(ConfirmeComponent, {
        width: '450px',
        data: { mensagem }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (typeof result === 'string' || result === undefined) {
          result = false;
        }
        resolve(result);
      });
    });
  }
}
