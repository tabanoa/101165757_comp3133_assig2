import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.username = form.value.username;
    this.password = form.value.password;

    this.auth.login(this.username, this.password).subscribe((data) => {
      console.log('logged in:', data);
      if (data) {
        this.router.navigate(['/hotels']);
      } else {
        alert('Invalid username/password');
      }
    });
  }
}