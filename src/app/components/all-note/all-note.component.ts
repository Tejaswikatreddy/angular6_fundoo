import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-all-note',
  templateUrl: './all-note.component.html',
  styleUrls: ['./all-note.component.css']
})
export class AllNoteComponent implements OnInit {

  constructor(private auth: AuthService, public service: httpService) { }
  public notes = [];

  ngOnInit() {
    console.log("all notes ts file")
    this.getNotes();
  }
  addNewEntry(event){
    
    console.log(event);
    if(event){
      this.getNotes();
    }
   
  }
  public getNotes() {
    this.service.get("notes/getNotesList", this.auth.getToken()).subscribe(response => {
      if (response) {
        this.notes = [];
        for (var i = response['data'].data.length - 1; i >= 0; i--) {
          if (response['data'].data[i].isDeleted == false && response['data'].data[i].isArchived == false){
               this.notes.push(response['data'].data[i])
          }
          }
        console.log("array", this.notes)

      }
    })
  }
 
}
