import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { AppModule } from '../app.module';
 import { Configuration } from '../app.constants';
import 'rxjs/add/operator/map'; 
@Injectable()
export class TestService {
    private actionUrl: string;
    private headers: Headers;
    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + 'test/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getTests(): Observable<any> {
        return this._http.get(this.actionUrl)
            .map((response: Response) => { return response; })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}