import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { carta } from './carta';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public idioma = "español";
  public tema = "colores";
  public imagenIdioma = "../../assets/espania.png";
  public imagenTema = "../../assets/color.png";
  public matrizCartas : carta[][] = this.inicializarCartas();
  public indiceTema = 0;
  public indiceIdioma = 0;
  public audioActual:HTMLAudioElement = new Audio();


  constructor(public navCtrl: NavController,public autenticador:AutenticacionService,private router:Router,public spinner:NgxSpinnerService) {

  }

  async ngOnInit()
  {
    this.autenticador.usuarioActual =  await firstValueFrom(this.autenticador.obtenerUsuarioLogueado());
    this.matrizCartas = this.inicializarCartas();
    console.log(this.matrizCartas);

  }


  inicializarCartas()
  {
    let matrizCartas : carta[][] = []
    let cartasColores : carta[] = [
      {imagen:"",color:"red",sonido:["../../assets/sonidos/esp/rojo.mp3","../../assets/sonidos/por/rojo.mp3","../../assets/sonidos/ing/rojo.mp3"]},
      {imagen:"",color:"purple",sonido:["../../assets/sonidos/esp/violeta.mp3","../../assets/sonidos/por/violeta.mp3","../../assets/sonidos/ing/violeta.mp3"]},
      {imagen:"",color:"blue",sonido:["../../assets/sonidos/esp/azul.mp3","../../assets/sonidos/por/azul.mp3","../../assets/sonidos/ing/azul.mp3"]},
      {imagen:"",color:"pink",sonido:["../../assets/sonidos/esp/rosa.mp3","../../assets/sonidos/por/rosa.mp3","../../assets/sonidos/ing/rosa.mp3"]},
      {imagen:"",color:"black",sonido:["../../assets/sonidos/esp/negro.mp3","../../assets/sonidos/por/negro.mp3","../../assets/sonidos/ing/negro.mp3"]},
      {imagen:"",color:"orange",sonido:["../../assets/sonidos/esp/naranja.mp3","../../assets/sonidos/por/naranja.mp3","../../assets/sonidos/ing/naranja.mp3"]}
    ];

    let cartasNumeros : carta[] = [
      {imagen:"../../assets/numeros/uno.png",color:"",sonido:["../../assets/sonidos/esp/uno.mp3","../../assets/sonidos/por/uno.mp3","../../assets/sonidos/ing/uno.mp3"]},
      {imagen:"../../assets/numeros/dos.png",color:"",sonido:["../../assets/sonidos/esp/dos.mp3","../../assets/sonidos/por/dos.mp3","../../assets/sonidos/ing/dos.mp3"]},
      {imagen:"../../assets/numeros/tres.png",color:"",sonido:["../../assets/sonidos/esp/tres.mp3","../../assets/sonidos/por/tres.mp3","../../assets/sonidos/ing/tres.mp3"]},
      {imagen:"../../assets/numeros/cuatro.png",color:"",sonido:["../../assets/sonidos/esp/cuatro.mp3","../../assets/sonidos/por/cuatro.mp3","../../assets/sonidos/ing/cuatro.mp3"]},
      {imagen:"../../assets/numeros/cinco.png",color:"",sonido:["../../assets/sonidos/esp/cinco.mp3","../../assets/sonidos/por/cinco.mp3","../../assets/sonidos/ing/cinco.mp3"]},
      {imagen:"../../assets/numeros/seis.png",color:"",sonido:["../../assets/sonidos/esp/seis.mp3","../../assets/sonidos/por/seis.mp3","../../assets/sonidos/ing/seis.mp3"]}
    ];

    let cartasAnimales : carta[] = [
      {imagen:"../../assets/animales/gato.png",color:"",sonido:["../../assets/sonidos/esp/gato.mp3","../../assets/sonidos/por/gato.mp3","../../assets/sonidos/ing/gato.mp3"]},
      {imagen:"../../assets/animales/jirafa.png",color:"",sonido:["../../assets/sonidos/esp/jirafa.mp3","../../assets/sonidos/por/jirafa.mp3","../../assets/sonidos/ing/jirafa.mp3"]},
      {imagen:"../../assets/animales/leon.png",color:"",sonido:["../../assets/sonidos/esp/leon.mp3","../../assets/sonidos/por/leon.mp3","../../assets/sonidos/ing/leon.mp3"]},
      {imagen:"../../assets/animales/mono.png",color:"",sonido:["../../assets/sonidos/esp/mono.mp3","../../assets/sonidos/por/mono.mp3","../../assets/sonidos/ing/mono.mp3"]},
      {imagen:"../../assets/animales/oso.png",color:"",sonido:["../../assets/sonidos/esp/oso.mp3","../../assets/sonidos/por/oso.mp3","../../assets/sonidos/ing/oso.mp3"]},
      {imagen:"../../assets/animales/perro.png",color:"",sonido:["../../assets/sonidos/esp/perro.mp3","../../assets/sonidos/por/perro.mp3","../../assets/sonidos/ing/perro.mp3"]}
    ];

    matrizCartas.push(cartasColores);
    matrizCartas.push(cartasNumeros);
    matrizCartas.push(cartasAnimales);

    return matrizCartas;
  }

  cambiarIdioma(idiomaNuevo:string)
  {
    if(idiomaNuevo != this.idioma)
    {
      this.spinner.show();

      setTimeout(() => {
        this.idioma = idiomaNuevo;
  
        switch(idiomaNuevo)
        {
          case "español":
            this.imagenIdioma = "../../assets/espania.png";
            this.idioma = "español";
            this.indiceIdioma = 0;
            break;
          case "portugues":
            this.imagenIdioma = "../../assets/portugal.png";
            this.idioma = "portugues";
            this.indiceIdioma = 1;
            break;
          case "ingles":
            this.imagenIdioma = "../../assets/ingles.png";
            this.idioma = "ingles";
            this.indiceIdioma = 2;
            break;
        }
        this.spinner.hide();
      }, 1000);
    }
  }

  cambiarTema(temaNuevo:string)
  {
    if(temaNuevo != this.tema)
    {
      this.spinner.show();

      setTimeout(() => {
        this.tema = temaNuevo;
  
        switch(temaNuevo)
        {
          case "colores":
            this.imagenTema = "../../assets/color.png";
            this.tema = "colores";
            this.indiceTema = 0;
            break;
          case "numeros":
            this.imagenTema = "../../assets/numeros.png";
            this.tema = "numeros";
            this.indiceTema = 1;
            break;
          case "animales":
            this.imagenTema = "../../assets/animales.png";
            this.tema = "animales";
            this.indiceTema = 2;
            break;
        }
        this.spinner.hide();
      }, 1000); 
    }
  }

  elegirCarta(carta:carta)
  {
    console.log(carta.sonido[this.indiceIdioma]);
    this.audioActual.pause();
    this.audioActual = new Audio(carta.sonido[this.indiceIdioma]);
    this.audioActual.play();
  }

  cerrarSesion()
  {
    this.spinner.show();
    setTimeout(async () => {
      await this.autenticador.cerrarSesion();
      this.navigate("sesiones");
      this.spinner.hide();
      
    }, 500);
  }

  public navigate(url:string)
  {
    this.router.navigateByUrl(url);
  }

}
