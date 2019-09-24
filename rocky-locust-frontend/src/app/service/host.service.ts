import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Host } from '../model/host';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HostService {

  private hostsUrl: string;

  constructor(private http: HttpClient) {
    this.hostsUrl = 'http://localhost:8080/hosts';
  }

  public findAll(id: string): Observable<Host[]> {

    let params = new HttpParams().append('id', id);

    return this.http.get<Host[]>(this.hostsUrl, {params: params});
  }

  public save(host: Host) {
    return this.http.post<Host>(this.hostsUrl, host);
  }
}
