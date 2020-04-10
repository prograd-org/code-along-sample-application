import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private data: any = [];

  url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';

  constructor(private http: HttpClient) { }

  getImage(): Observable<any>{
    this.http.get(this.url).subscribe((res) => {

      this.data = res;
    });
    return this.data;
  }
}
