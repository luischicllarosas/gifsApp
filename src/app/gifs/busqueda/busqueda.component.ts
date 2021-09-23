import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gifs-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>


  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value

    if (!valor.trim()) {
      this.txtBuscar.nativeElement.placeholder = 'Debes agregar un texto valido'
      return
    } else {
      this.txtBuscar.nativeElement.placeholder = 'Agregar un valor'
    }

    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = ''
  }

}
