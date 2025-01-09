import { HttpClient } from '@angular/common/http';

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Login, Register } from '../Interfaces/register';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken:string = ""
  private apiUrl = 'http://10.100.102.50:44363/api/Auth/Login'
  companyId : BehaviorSubject<number> = new BehaviorSubject(-1);
  role : BehaviorSubject<string> = new BehaviorSubject("")

  constructor(private _HttpClient:HttpClient , private _Router :Router , @Inject(PLATFORM_ID) private platFormId:object)
  {
    if(isPlatformBrowser(platFormId))
    {
      this.companyId.next(Number(localStorage.getItem('companyId'))) // 29


    }
  }
  getRegister (data:Register) : Observable<any>
  {
    return this._HttpClient.post("http://10.100.102.50:44363/api/Auth/register",data)
  }
  sendlogin (data:Login) : Observable<any>
  {
    return this._HttpClient.post("http://10.100.102.50:44363/api/Auth/Login",data)
  }
  sendToken()
  {
   localStorage.getItem("userToken")
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this._HttpClient.post(this.apiUrl, credentials);
  }

  logOut()
  {
  localStorage.removeItem("userToken")
  localStorage.removeItem("companyId")

  }

}
