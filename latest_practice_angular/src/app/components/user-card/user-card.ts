import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user!: User;
  @Output() selectUser = new EventEmitter<User>();

  select() {
    console.log('Clicked user:', this.user);
    this.selectUser.emit(this.user)
  }
}
