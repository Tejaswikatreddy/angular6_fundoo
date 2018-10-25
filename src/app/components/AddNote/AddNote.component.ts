import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
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
public pinned=false;
  // @Input() value;
  @Output() onNewEntryAdded = new EventEmitter();

  constructor(private service:httpService,private auth:AuthService ) { }
public clicked=false;
  ngOnInit() {
   
  }
  addNotes(){
   
    this.title = document.getElementById("title").innerHTML;
    this.note=document.getElementById("note").innerHTML;
  
    this.clicked=!this.clicked;
    this.service.post("notes/addNotes",{
      "title":this.title,
      "description":this.note,
            "isPined":this.pinned
    },this.auth.getToken()).subscribe(response=>{
        console.log(response);
        this.onNewEntryAdded.emit({})
        
      
    })

  }
   pin(){
      this.pinned=true;
   }
  }


