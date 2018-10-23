import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private auth: AuthService, public service: httpService) { }
public notes=[];
  ngOnInit() {
    this.service.get("notes/getNotesList", this.auth.getToken()).subscribe(response=>{
      if(response){
        console.log(response['data'].data);
        for (var i = 0; i < response['data'].data.length;i++){
          this.notes.push(response['data'].data[i])
        }
        console.log("array",this.notes)
        
      }
    })
  }
  
}
