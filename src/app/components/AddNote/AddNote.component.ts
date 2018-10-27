/** Purpose         : AddNote page
 *  @description
 *  @file           : addNote.component.ts
 *  @author         : K.Dhana Tejaswi
*/

import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-note',
  templateUrl: './AddNote.component.html',
  styleUrls: ['./AddNote.component.css'],
  // outputs: ['onNewEntryAdded']
})

export class AddNoteComponent implements OnInit {
public title;
public note;
public pinned=false;
public changedColor="#ffffff"
  @Output() onNewEntryAdded = new EventEmitter();
//creating an object for eventEmitter
  constructor(private service:httpService,private auth:AuthService ) { }
public clicked=false;
  ngOnInit() {
   
  }
  addNotes(){
    var apiColor=this.changedColor;
    this.changedColor = "#ffffff"
    //binding values from the html page
    this.title = document.getElementById("title").innerHTML;
    this.note=document.getElementById("note").innerHTML;
  
    this.clicked=!this.clicked;
    //calling the api to add the Note through services
    this.service.post("notes/addNotes",{
      "title":this.title,
      "description":this.note,
      "isPined":this.pinned,
      "color": apiColor
    },this.auth.getToken()).subscribe(response=>{
        console.log(response);
             //emitting an event when the note is added
              this.onNewEntryAdded.emit({})         
    }),error=>{
      console.log(error);
     
    }
    
  }
   pin(){
      this.pinned=true;
   }
  colorChanged(event){
    this.changedColor=event;
  }
  }


