import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get GifsHistorial() {
    return this.gifsService.historial
  }
  buscar(item: string) {
    this.gifsService.buscarGifs(item)
  }
}
