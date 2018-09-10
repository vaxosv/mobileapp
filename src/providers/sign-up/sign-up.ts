import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignUpProvider {

  constructor(public http: HttpClient) {
  }

  sendata(user){
    // console.log("user sent to server", user);
  }

}
