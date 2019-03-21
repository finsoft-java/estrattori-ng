import { CjCustomContextClientService } from './cj-custom-context-client.service';
import { CjContextService } from './cj-context.service';
import { Observable } from 'rxjs/Observable';
export declare abstract class ICjCustomContextService<T> {
    protected contextService: CjContextService;
    constructor(contextService: CjContextService);
    abstract getCustomContextByTokenAndKey(key: string): Observable<T>;
    abstract setCustomContextByTokenAndKey(key: string, value: T): Observable<T>;
    abstract removeCustomContextByTokenAndKey(key: string): Observable<any>;
    protected _getToken(): string;
}
export declare class CjCustomContextService<T> extends ICjCustomContextService<T> {
    private cjCustomContextClient;
    constructor(cjCustomContextClient: CjCustomContextClientService<T>, contextService: CjContextService);
    getCustomContextByTokenAndKey(key: string): Observable<T>;
    setCustomContextByTokenAndKey(key: string, value: T): Observable<T>;
    removeCustomContextByTokenAndKey(key: string): Observable<any>;
}
