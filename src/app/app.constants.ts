import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:17553/';
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl
}