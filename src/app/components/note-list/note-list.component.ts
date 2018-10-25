import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NotelistComponent implements OnInit {
 @Input() NoteArray;
 @Output() eventEmit=new EventEmitter();
  constructor(private auth: AuthService, public service: httpService) { }
  ngOnInit() {
    console.log(this.NoteArray)
  }
 eventDone(event){
   console.log("deleted in note list",event)
   if(event){
     this.eventEmit.emit({});
   }
 }
  
}
