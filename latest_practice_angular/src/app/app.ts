import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { UserService } from './services/userService';
import { User } from './models/user.model';
import { UserCard } from './components/user-card/user-card';
import { UserDetails } from './components/user-details/user-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLinkWithHref],
   templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('latest practice angular');
  // users: User[] = [];
  // selectedUser! : User;

  // constructor(private userService: UserService) {
  //   this.users = this.userService.getUsers();
  // }

  // onSelect(user: User) {
  //   this.selectedUser = user;
  // }
}
