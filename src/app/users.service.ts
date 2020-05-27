import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }


  isvalidToken() {
    if (typeof(Storage) !== 'undefined') {
      const token = sessionStorage.getItem('userToken');
      if (token !== null) {
        return true;
      }
    }
  }
}
