import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApplicationConfig } from '../../module.config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
/**
 * Client Http per recuperare le informazioni di cjCustomContext
 */
export declare class CjCustomContextClientService<T> {
    protected config: ApplicationConfig;
    protected http: HttpClient;
    protected headers: HttpHeaders;
    constructor(config: ApplicationConfig, http: HttpClient);
    /**
     * Esegue la chiamata http per recupeare il contesto custom passando come url param il token e la key
     */
    getCustomContext(token: string, key: string): Observable<T>;
    setCustomContext(token: string, key: string, data: T): Observable<T>;
    removeCustomContext(token: string, key: string): Observable<any>;
}
