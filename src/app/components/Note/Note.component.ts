import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.css'],
  outputs: ['onNewEntryAdded']
})
export class NoteComponent implements OnInit {
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
        // this.value = true;
        this.onNewEntryAdded.emit({
          // value: this.value
        })
        
      // }
    })

  }
   pin(){
      this.pinned=true;
   }
  }


