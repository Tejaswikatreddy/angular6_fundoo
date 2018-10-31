/** Purpose         : update-note page
 *  @description
 *  @file           : updateNote.component.ts
 *  @author         : K.Dhana Tejaswi
*/


import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { httpService } from '../../services/http.service';
//component decorator
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
public bgcolor=this.data.color;
  ngOnInit() {
    console.log(this.data);
  }
  /**
   * @function onClose() invoked when the close button on the popup is clicked
   */
  onClose(): void {
    this.dialogRef.close();
    this.updateNotes();

  }
  //a function to call the update notes api
  updateNotes(){
    console.log(document.getElementById("Updatedtitle").innerHTML)
    this.title = document.getElementById("Updatedtitle").innerHTML;
    this.description = document.getElementById("Updatednote").innerHTML;
    this.id=this.data.id;
    this.service.post("notes/updateNotes",{
      "noteId":[this.id],
      "title":this.title,
      "description":this.description

    },localStorage.getItem("id")).subscribe(response=>{
      console.log(response);
     
    })
    }
  colorChanged(event){
    this.bgcolor=event;
  }
 
  }


