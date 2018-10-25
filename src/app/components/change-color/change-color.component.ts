import { Component,Output, OnInit,Input,EventEmitter } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css'],
  
})
export class ChangeColorComponent implements OnInit {
@Input() Noteid;
@Output() eventEmitter=new EventEmitter(); 
  constructor(public service: httpService) { }

  ngOnInit() {
  }
  change(color){
    var arr=[]
    arr.push(this.Noteid)
    this.service.postDel("notes/changesColorNotes",{
      "color":color,
      "noteIdList":arr
    },localStorage.getItem("id")).subscribe(response=>{
      console.log(response);
      this.eventEmitter.emit({})
    })
  }
}
