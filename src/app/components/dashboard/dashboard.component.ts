import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
click;
  constructor() { }
  @Input() childMessage: boolean;
  ngOnInit() {
   
  }
  clicked(){
    console.log(this.childMessage)
    if (this.childMessage == true) {
      this.click = true;
      return this.click
    }
    return false;
  }
 
}
