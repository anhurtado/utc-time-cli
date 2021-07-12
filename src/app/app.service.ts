import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public getUtcTime(body: any): Observable<any> {
    const headers = { Accept: 'application/json; charset=utf-8' };
    return this.httpClient.post(environment.backend, body, { headers });
  }
}
