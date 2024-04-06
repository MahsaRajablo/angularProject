import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../Model/Iuser';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  apiUrl: string = "http://localhost:5500/user";
  signUp(newUser: Iuser){
    this.http.post(this.apiUrl , newUser).subscribe(res =>{

    })
  }
}
