import { Component, OnInit,Input  } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
 @Input() NoteArray;
  constructor(private auth: AuthService, public service: httpService) { }
  ngOnInit() {
  // this.getNotes();
  }
 
  
}
