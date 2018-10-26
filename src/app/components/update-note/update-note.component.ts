import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
                   @Inject(MAT_DIALOG_DATA)public data:any,public service:httpService) { }
public title;
public description;
public id;
  ngOnInit() {
    console.log(this.data);
  }
  
  onClose(): void {
    this.dialogRef.close();
    this.updateNotes();

  }
  updateNotes(){
    console.log(document.getElementById("title").innerHTML)
    this.title = document.getElementById("title").innerHTML;
    this.description = document.getElementById("note").innerHTML;
    this.id=this.data.id;
    this.service.post("notes/updateNotes",{
      "noteId":[this.id],
      "title":this.title,
      "description":this.description

    },localStorage.getItem("id")).subscribe(response=>{
      console.log(response);
      // this.eventEmitted.emit({})
    })
    }
  }


