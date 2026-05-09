import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
})
export class AddUser {
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  form!: any;

  ngOnInit() {
    this.form = this.fb.group({
    name: [''],
    email: [''],
    active: true
  });
  }


  submit() {
  const newUser = {
    id: Date.now(),
    ...this.form.value
  };

  this.userService.addUser(newUser as any);

  this.router.navigate(['/']);

  alert("User Added!");
}
}
