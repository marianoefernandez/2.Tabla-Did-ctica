import { Component } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public mi_avatar : string;

  constructor(public autenticador:AutenticacionService) {

    this.mi_avatar = "";
    this.GenerarAvatar();

  }

  async ngOnInit()
  {
    this.autenticador.usuarioActual =  await firstValueFrom(this.autenticador.obtenerUsuarioLogueado());
  }

  GenerarAvatar(){
  
    const valor : number = Date.now()
    const cadena : string = valor.toString() + "?d=identicon&f=y";

    this.mi_avatar = `https://www.gravatar.com/avatar/${ cadena }`;
    
  }


}
