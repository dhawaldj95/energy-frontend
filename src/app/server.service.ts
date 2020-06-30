import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  getData() {
    let path = 'http://localhost:3000/energy';
    console.log(path);
    return this.http.get(path);
  }
}
