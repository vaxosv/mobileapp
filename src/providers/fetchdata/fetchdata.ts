import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FetchdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FetchdataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FetchdataProvider Provider');
  }

  getD() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
