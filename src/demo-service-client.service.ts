import { Injectable } from '@angular/core';
import { IDataPage } from 'cjlib';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {promise} from 'selenium-webdriver';
import map = promise.map;


@Injectable()
export class DemoServiceClientService {

  constructor(private http: Http) { }

  getComboData() {
    return this.http.get('./assets/combo-data/combo-mock.json')
      .map((res: Response) => res.json().data);
  }

  getPage( page: number, sorting?: Array<string> ): Observable<IDataPage<Object>> {
    const sortingParam = sorting ? sorting[0] : '';
    return this.http.get(`./assets/table-data/table-data/table-mock_${page}.json?orderBy=${sortingParam}`)
      .map((res: Response) => res.json().data);
  }
}
