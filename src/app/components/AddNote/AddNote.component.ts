/** Purpose         : AddNote page
 *  @description
 *  @file           : addNote.component.ts
 *  @author         : K.Dhana Tejaswi
*/

import { Component, OnInit, EventEmitter, Output, Input, ViewChild} from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"


@Component({
  selector: 'app-add-note',
  templateUrl: './AddNote.component.html',
  styleUrls: ['./AddNote.component.css'],
  // outputs: ['onNewEntryAdded']
})

export class AddNoteComponent implements OnInit {
public title;
public note;
public changedColor="#ffffff"
  @Output() onNewEntryAdded = new EventEmitter();
 
//creating an object for eventEmitter
  constructor(private service:httpService,private auth:AuthService ) { }
public clicked=false;
public labelId=[];
public checkList=[];
  ngOnInit() {

  }
  public isPinned = false;
  public isArchived=false;
  addNotes(){
    var apiColor=this.changedColor;
    this.changedColor = "#ffffff"
    //binding values from the html page
    this.title = document.getElementById("title").innerHTML;
    this.note=document.getElementById("note").innerHTML;
  
    this.clicked=!this.clicked;
    //calling the api to add the Note through services
    if(this.title!=""){
    this.service.post("notes/addNotes",{
      "title":this.title,
      "description":this.note,
      "isPined":this.isPinned,
      "color": apiColor,
      "isArchived":this.isArchived,
      "labelIdList":JSON.stringify(this.labelId)
    },this.auth.getToken()).subscribe(response=>{
        console.log(response);
      this.labelId = []
      this.labelName=[];
             //emitting an event when the note is added
              this.onNewEntryAdded.emit({})         
    },error=>{
      console.log(error);
      this.labelId = []
      this.labelName = [];
     
    })
  }
  }
   pinEvent(event){
      this.isPinned=true;
   }
  colorChanged(event){
    this.changedColor=event;
  }
  public labelName=[];
  labelEvent(event){
    if(this.labelName.indexOf(event)<0){
      this.labelId.push(event.id);
      this.labelName.push(event)
    }
    else{
      this.labelName.splice(this.labelName.indexOf(event),1);
      this.labelId.splice(this.labelId.indexOf(event), 1);
    }
    console.log("add component label",event)
  }
  onEnter(event){
    console.log(event,"keydown")
  }
  deleteLabel(label){
    this.labelName.splice(this.labelName.indexOf(label), 1);
    this.labelId.splice(this.labelId.indexOf(label), 1);
  }
  archiveEvent(event){
    this.isArchived=true;
  }
  }


