import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../models/gitusers';

@Injectable()
export class GitProvider {
  private ROOT_URL : string = "https://api.github.com/users?since=135";
  //private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEGP';
  
  constructor(private http: HttpClient) {
  }
  GetUserInfo()
  {
    //return this.http.get<user>(this.ROOT_URL);
    return this.http.get<any[]>(this.ROOT_URL);
  }

}
