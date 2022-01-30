import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }


  public getPNRStatus(pnr: any):Observable<any> {
    let url="https://travelhubserver.herokuapp.com/pnrStatus";
    return this.http.post(url,{
      "PNR_Number":pnr
  });
}

}