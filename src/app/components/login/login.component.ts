import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={
    "email": "",
    "password":""
  };
  hide=true;
  constructor(private _signupService: SignupService,
    public snackbar: MatSnackBar) { }

  ngOnInit() {
  
  }

  login(){
    this._signupService.postData("user/login", {
      "email": this.model.emailid,
      "password": this.model.password
    }).subscribe(response => {
      console.log("login succesfull")
     
      this.snackbar.open('login', 'success', {
        duration: 2000,
      });

      console.log(response)
    },
      error => {
        console.log("Error", error);
        this.snackbar.open('login', 'failed', {
          duration: 2000,
        });
      })
  }
}
