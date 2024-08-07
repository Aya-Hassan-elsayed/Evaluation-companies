import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { company } from '../Interfaces/taqim';

@Injectable({
  providedIn: 'root'
})
export class TaqimService {
  private apiUrl = 'http://10.100.102.50:44363/api/Taqim'; 
  private baseurl='http://10.100.102.50:44363/api/FilTersCompanies'

  constructor(private http: HttpClient) {}

  getCompanies(requestType: string): Observable<company[]> {
 
    return this.http.get<company[]>(`${this.apiUrl}?companyid=${requestType}`);
  }


  GetEdit():Observable<company[]>{
    return this.http.get<company[]>(`${this.apiUrl}/GetEdit`)

  }
  getNotUploade(requestType: string, ):Observable<company[]>{
  return this.http.get<company[]>(`${this.apiUrl}/Getlmetmelraf3?companyid=${requestType}`)

}
GetAllwithFilter(requestType: string,startDate: string, endDate: string):Observable<company[]>{
  return this.http.get<company[]>(`${this.apiUrl}/gitallwaithfilter?companyid=${requestType}&&startdate=${startDate}&&enddatae=${endDate}`)

}
GetAllFilterEdit(requestType: string,startDate: string, endDate: string):Observable<company[]>{
  return this.http.get<company[]>(`${this.apiUrl}/gitallwaithfilteredit?companyid=${requestType}&&startdate=${startDate}&&enddatae=${endDate}`)
}
GetFilterCompanies(requestType: string,startDate: string, endDate: string,Months:string):Observable<company[]>{
 return this.http.get<company[]>(`${this.baseurl}?companyid=${requestType}&StartYear=${startDate}&EndYear=${endDate}&Months=${Months}`)
}

GetFilterGetT3delat(requestType: string,startDate: string, endDate: string):Observable<company[]>{ 
  return this.http.get<company[]>(`${this.baseurl}/Get T3delat?companyid=${requestType}&StartYear=${startDate}&EndYear=${endDate}`)

}

}
