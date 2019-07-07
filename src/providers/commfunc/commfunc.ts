import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommfuncProvider {

  public domainURL : string = "http://www.videomemes.in/";
  //public domainURL : string = "http://localhost:49161/videoMemes/";
  constructor(public http: HttpClient) {
    
  }

}
