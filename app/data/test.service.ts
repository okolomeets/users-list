import { Injectable }     from '@angular/core';
import { Http, Observable } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { User }           from './posts';



@Injectable()
export class TestService  {

    constructor(
        private http:Http
    ) { }

    private baseUrl = 'http://api.wunderground.com/api/2ad187c33b4b525a/forecast/q/zmw:94125.1.99999.json';

    getPosts(): Observable<Posts[]> {
        return this.http.get(this.baseUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}