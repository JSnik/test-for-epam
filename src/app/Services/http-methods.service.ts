import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class HttpMethodsService {
  private httpClient = inject(HttpClient)
  private url: string = 'https://picsum.photos/200/300';

  getPhotos(): Observable<any> {
    return this.httpClient.get<any>(this.url)
  }
}
