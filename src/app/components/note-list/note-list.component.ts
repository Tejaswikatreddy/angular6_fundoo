import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
import { MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NotelistComponent implements OnInit {
 @Input() NoteArray;
 @Output() eventEmit=new EventEmitter();
  constructor(private auth: AuthService, public service: httpService,
              public dialog: MatDialog) { }
  ngOnInit() {
    console.log(this.NoteArray)
  }
 eventDone(event){
   console.log("deleted in note list",event)
   if(event){
     this.eventEmit.emit({});
   }
 }
  openDialog(note): void {
    console.log(note.color)

    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      // width: 'min-content',
      data: { title: note.title, description: note.description,id:note.id,color:note.color},
      panelClass: 'my-dialog'
    });
console.log(note);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventEmit.emit({});
      
      
      // this.animal = result;
    });
  }

}
  

