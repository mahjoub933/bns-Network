import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';
import { TokenService } from 'src/app/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];
  

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    console.log(this.authRequest)
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe( {
      next: (res) => {
        
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
        
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
          console.log("im here");
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
