import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
  id;
  constructor(private _signupService: httpService,
    public snackbar: MatSnackBar,
    public router:Router) { }

  ngOnInit() {
  
  }

  login(){
    if(this.model.email.length==0 || this.model.password.length==0){
      console.log("fill all the details")
      this.snackbar.open("fill in all the details", "signup failed", {
        duration: 2000
      })
      return;
    }
    this._signupService.postData("user/login", {
      "email": this.model.email,
      "password": this.model.password
    }).subscribe(response => {
      console.log("login succesfull")
      console.log(response["id"])
      this.id = response["id"];
    // localStorage.setItem("id",this.id)
      this.snackbar.open('login', 'success', {
        duration: 2000,
      });
      this.router.navigate(['\dashboard'])
    },
      error => {
        console.log("Error", error);
        this.snackbar.open('login', 'failed', {
          duration: 2000,
        });
      })
  }
}
