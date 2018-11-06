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
  public labels = [];
  public checklist=false;
  public modifiedCheckList;
public arrayObj:any={}
  ngOnInit() {
   
    this.labels=this.data.noteLabels;
    if (this.data.noteCheckLists.length>0){
      this.checklist=true;
    }
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
    if(this.checklist==false){
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
  else{
    var apiData={
         "itemName": this.modifiedCheckList.itemName,
         "status":this.modifiedCheckList.status
    }
      var url = "notes/" +this.data.id+ "/checklist/" + this.modifiedCheckList.id + "/update";
      this.service.postDel(url, JSON.stringify(apiData), localStorage.getItem('id')).subscribe(response => {
        console.log(response);

      })
  }
    }
    editing(editedList,event){
      
      console.log(editedList);
      if(event.code=="Enter")
      this.modifiedCheckList=editedList;
      this.updateNotes();
    }
  colorChanged(event){
    this.bgcolor=event; 
  }
  labelAdded(event){
    var flag=false,index;
  for(var i=0;i<this.labels.length;i++){
    if(event.id==this.labels[i].id){
      flag=true;
      index=i;
    }
  }
  if(flag==true){
    this.labels.splice(index,1)
  }
  else{
    this.labels.push(event)
  }
   
  }
  checkBox(checkList){
    
    if (checkList.status=="open"){
      checkList.status = "close"
    }
    else{
      checkList.status = "open"
    }
    console.log(checkList);
    this.modifiedCheckList=checkList;
    this.updateNotes();
  }
  public removedList;
  removeList(checklist){
    console.log(checklist)
    this.removedList=checklist;
    this.removeCheckList()
  }
  removeCheckList(){
    var url = "notes/" + this.data.id + "/checklist/" + this.removedList.id + "/remove";
    this.service.postDel(url, null, localStorage.getItem('id')).subscribe(response => {
      console.log(response);

    })
  }
  }


