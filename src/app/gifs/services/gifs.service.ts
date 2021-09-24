import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'LJrhc3iOam9YDXCCT8sW8eOYLEud923n'
  private _historial: string[] = []
  private servicioURL: string = 'https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = []

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    // if (localStorage.getItem('historial')) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || []
    // }
  }

  buscarGifs(query: string) {

    query = query.trim().toLowerCase()

    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10')


    this.http.get<SearchGIFResponse>(`${this.servicioURL}/search`, { params })
      .subscribe((res) => {
        this.resultados = res.data
        localStorage.setItem('resultado', JSON.stringify(res.data))
      })
  }
}
