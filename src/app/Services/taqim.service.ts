import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { company } from '../Interfaces/taqim';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaqimService {
  private apiUrl = 'http://10.100.102.50:44366/api/Taqim'; 
  private baseurl = 'http://10.100.102.50:44366/api/FilTersCompanies';

  constructor(private http: HttpClient, private _AuthService: AuthService) {}

  private getAuthHeaders() {
    const token = this._AuthService.userToken || localStorage.getItem('userToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getCompanies(requestType: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.apiUrl}?companyid=${requestType}`, { headers });
  }

  GetEdit(requestType: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.apiUrl}/GetEdit?companyid=${requestType}`, { headers });
  }

  getNotUploade(requestType: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.apiUrl}/Getlmetmelraf3?companyid=${requestType}`, { headers });
  }

  GetAllwithFilter(requestType: string, startDate: string, endDate: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.apiUrl}/gitallwaithfilter?companyid=${requestType}&&startdate=${startDate}&&enddatae=${endDate}`, { headers });
  }

  GetAllFilterEdit(requestType: string, startDate: string, endDate: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.apiUrl}/gitallwaithfilteredit?companyid=${requestType}&&startdate=${startDate}&&enddatae=${endDate}`, { headers });
  }

  GetFilterCompanies(requestType: string, startDate: string, endDate: string, Months: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.baseurl}?companyid=${requestType}&StartYear=${startDate}&EndYear=${endDate}&Months=${Months}`, { headers });
  }

  GetFilterGetT3delat(requestType: string, startDate: string, endDate: string): Observable<company[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<company[]>(`${this.baseurl}/Get T3delat?companyid=${requestType}&StartYear=${startDate}&EndYear=${endDate}`, { headers });
  }

  getData(companyId: number, startDate: string, endDate: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const url = `${this.apiUrl}?companyid=${companyId}&startdate=${startDate}&enddate=${endDate}`;
    return this.http.get(url, { headers });
  }
}
