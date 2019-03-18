import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ApplicationConfig } from "cjlib";



@Injectable()
export class AppConfigService implements ApplicationConfig {

  constructor(public http: HttpClient) { }

  getSessionManagerBaseUrl(): Observable<string> {
    return this.http.get('/scriptPosa0/pos-v0/api/client-configuration/sm-address', {responseType: 'text'}) as Observable<string>;
  }

  getNpuServicesBaseUrl(): Observable<string> {
    return Observable.of('http://localhost');
  }
}
