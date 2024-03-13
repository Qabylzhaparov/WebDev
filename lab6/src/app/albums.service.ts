import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Album, Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL: string = 'https://jsonplaceholder.typicode.com';
  PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Album[]> {
    let val = this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    return val;
  }
  getAlbum(id: any): Observable<Product[]> {
    return this.client.get<Product[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
  getAlbumItem(id: any): Observable<Product>{
    return this.client.get<Product>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  deleteItem(id: any): Observable<any>{
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  updateItem(item: Product): Observable<Product> {
    return this.client.put<Product>(`https://jsonplaceholder.typicode.com/albums/${item.id}`,item);
  }
  createItem(item: Product): Observable<Product> {
    return this.client.post<Product>(`https://jsonplaceholder.typicode.com/albums`,item);
  }
}
