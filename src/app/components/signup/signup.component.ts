import { Component, OnInit } from '@angular/core';
import { SignupService } from  '../../services/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide=true;
  
  cards=[];
  constructor(private _signupService: SignupService,
              public snackbar:MatSnackBar) { }

  ngOnInit() {
    let obs = this._signupService.getData("user/service");
   obs.subscribe((response)=>
   {
     console.log(response)
    var data = response["data"];
     for (var i = 0; i < data.data.length;i++){
       data.data[i].select=false;
       this.cards.push(data.data[i])
     }
     console.log("cards",this.cards)
  });
   let obs1 = this._signupService.getData("user");
   obs1.subscribe((response)=>
   {
     console.log(response)
  });
  
  }
  service="";
  model: any = {
     "firstName": "",
     "lastName": "",
     "phoneNumber": "" ,
     "service": "",
     "createdDate": new Date(),
     "modifiedDate": new Date(),
     "username":"",
     "email":"" ,
     "emailVerified": true,
     "password": "",
  };
checked=false;
 signup(){
   console.log(this.service.length)
   if (this.model.firstName.length == 0 || this.model.lastName.length == 0 || this.model.email.length == 0 || 
    this.model.password.length == 0 || this.service.length==0  ){
     console.log("fill all the details")
     this.snackbar.open("fill in all the details", "signup failed", {
       duration: 2000
     })
     return;
   }
   else if(this.model.password!=this.model.cpassword){
     console.log("give same password to confirm");
     this.checked=true;
     this.snackbar.open("should give same password", "signup failed", {
       duration: 2000
     })
        return;
   }
   console.log(this.service.length)
   this._signupService.postData("user/userSignUp",{
     "firstName": this.model.firstName,
     "lastName": this.model.lastName,
     "service": this.service,
     "email":this.model.email ,
     "emailVerified": true,
     "password": this.model.password,
   }).subscribe(response=>{
     console.log("signup succesfull")
     this.snackbar.open("signup","sucess",{
          duration:2000
     })
     console.log(response)
   },
     error => {
       console.log("Error", error);
       this.snackbar.open("signup", "failed",{
            duration:2000
       })
     })
 }
 respond(card){
  console.log(card.name);
  this.service=card.name;

  card.select=!card.select;
  if(card.select==false){
    this.service=""
  }
  for(var i=0;i<this.cards.length;i++){
    if(card.name==this.cards[i].name){
      continue;
    }
    this.cards[i].select=false;
  }
 }
}

