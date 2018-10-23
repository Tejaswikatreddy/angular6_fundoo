import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.css']
})
export class NoteComponent implements OnInit {
public title;
public note;
public pinned=false;
  constructor(private service:httpService,private auth:AuthService ) { }
public clicked=false;
  ngOnInit() {
   
  }
  click(){
    this.title = document.getElementById("title").innerHTML;
    this.note=document.getElementById("note").innerHTML;
    console.log(this.title)
    console.log(this.note);
    console.log(this.pinned)
    this.clicked=!this.clicked;
    this.service.post("notes/addNotes",{
      "title":this.title,
      "description":this.note,
      // "labelIdList":"",
      // "checklist":"",
      "isPined":this.pinned
    },this.auth.getToken()).subscribe(response=>{
      if(response){
        console.log(response);
        console.log("success")
      }
    })

  }
   pin(){
      this.pinned=true;
   }
  }


