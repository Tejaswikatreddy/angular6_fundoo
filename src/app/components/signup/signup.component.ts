import { Component, OnInit } from '@angular/core';
import { SignupService } from  '../../services/signup.service';
import { log } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide=true;
  // Bclicked = false;
  // Aclicked=false;
  // clicked_basic(){

  //   this.Bclicked=!this.Bclicked;
  //   this.Aclicked=false;
  // } 
  
  // clicked_advance(){
  //  this.Aclicked=!this.Aclicked;
  //  this.Bclicked=false;
  // }
  cards=[];
  constructor(private _signupService: SignupService) { }

  ngOnInit() {
    // console.log("onINIt")
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
  
  }
  service:any;
  model: any = {};
 signup(){
  //  this._signupService.postData("user",{
  //    "firstName": "string",
  //    "lastName": "string",
  //    "phoneNumber": "string" ,
  //    "service": "string",
  //    "createdDate": "2018-10-09T06:35:12.617Z",
  //    "modifiedDate": "2018-10-09T06:35:12.617Z",
  //    "username": "string",
  //    "email": "string",
  //    "emailVerified": true,
  //    "password": "string"
  //  })
   console.log(JSON.stringify(this.model))
   console.log(this.service)
 }
 respond(card){
  console.log(card.name);
  this.service=card.name;

  card.select=!card.select;
  for(var i=0;i<this.cards.length;i++){
    if(card.name==this.cards[i].name){
      continue;
    }
    this.cards[i].select=false;
  }
 }
  
}
