import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }






  public getPNRStatus(pnr: any):Observable<any> {
    const pnrDetails={
      'x-rapidapi-key':'646210614dmshfa1853333c3dfe0p12d7edjsn8392f50b07df',
      'x-rapidapi-host':'pnr-status-indian-railway.p.rapidapi.com',
      'Access-Control-Allow-Origin':'*',
     }
  
     const httpOptions = {
      headers: new HttpHeaders(pnrDetails)
     }
    let url = `https://pnr-status-indian-railway.p.rapidapi.com/rail/${pnr}`;
    return this.http.get(url,httpOptions);
  }
}
