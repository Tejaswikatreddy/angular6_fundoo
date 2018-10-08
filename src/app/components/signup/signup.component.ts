import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide=true;
  Bclicked = false;
  Aclicked=false;
  clicked_basic(){

    this.Bclicked=!this.Bclicked;
    this.Aclicked=false;
  } 
  
  clicked_advance(){
   this.Aclicked=!this.Aclicked;
   this.Bclicked=false;
  }
  
  constructor() { }

  ngOnInit() {
  }
  
}
