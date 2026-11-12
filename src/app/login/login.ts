import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLoggedin() {
    const isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser) {
      this.router.navigate(['/']);
    } else {
      this.erreur = 1;
      //alert('Login ou mot de passe incorrecte!');
    }
  }
}