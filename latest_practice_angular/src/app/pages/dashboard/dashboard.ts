import { Component, computed, signal } from '@angular/core';
import { UserService } from '../../services/userService';
import { UserCard } from '../../components/user-card/user-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
users!: any;
selectedUser: any;

constructor(private userService: UserService) {
  this.users = this.userService.getUsers();
}

  search = signal('');

  filteredUsers = computed(() =>
    this.users().filter((user: any) =>
      user.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  onSelect(user: any) {
  console.log('Selected user:', user); // 🔍 debug
  this.selectedUser = user;
}

}
