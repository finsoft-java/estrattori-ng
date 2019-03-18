import { DemoServiceClientService } from './demo-service-client.service';
import { INbpDataSource, IDataPage } from 'cjlib';

import { Observable } from 'rxjs/Observable';


// abstract getPage(pageNumber ?: number, sorting ?: string[], pageSize ?: number): Observable<IDataPage<T>>;
// sendDataEvent(pageNumber ?: number, sortFields ?: Array < string >, pageSize ?: number): void;
// getDataStream(): Observable<IDataPage<T>>;

//damodificarecamillo
// export class DemoHttpDataSource<T> implements INbpDataSource<T> {
export class DemoHttpDataSource<T>  {
  public pageDataSubject;
  // publilgetPage(pageNumber?: number, sorting?: string[], pageSize?: number): Observable<IDataPage<T>>;
  public sendDataEvent(pageNumber?: number, sortFields?: Array<string>, pageSize?: number): void {

  }
  public getDataStream(): Observable<IDataPage<T>> {
    return null;
  }

  constructor(private demoServiceClient: DemoServiceClientService, private defaultPageSize?: number) { }

  public getPage(pageNumber?: number, sort?: Array<string>): Observable<IDataPage<T>> {
    if (!pageNumber) {
      // return this.demoServiceClient.getAllData();
    }

    return this.demoServiceClient.getPage(pageNumber, sort) as Observable<IDataPage<T>>;
  }

}
