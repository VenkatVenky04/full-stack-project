import { Injectable, signal } from '@angular/core';
import { USERS } from '../data/user.data';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users = signal<User[]>(USERS);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMobilesdata() {
    return this.http.get(`${this.apiUrl}/mobiles`);
  }

  addMobilesData(data: any) {
    return this.http.post(`${this.apiUrl}/mobiles`, data)
  }

  deleteMobile(id: number) {
    return this.http.delete(`${this.apiUrl}/mobiles`, {
      body: { id: id}
    })
  }

  updateExistData(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/mobiles/${id}`, data)
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.update(prev => [...prev, user])
  }

  // getUsers(): User[] {
  //   return USERS
  // }
}
