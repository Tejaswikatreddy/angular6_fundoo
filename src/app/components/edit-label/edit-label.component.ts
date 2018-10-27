import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.css']
})
export class EditLabelComponent implements OnInit {
  public labelArray=[];
  constructor(public labelRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public service:httpService) { }
public label;
  @ViewChild('myDiv') myDiv: ElementRef;

  ngOnInit() {
    this.getLabels();
  }
  onClose(): void {
    this.labelRef.close();
    this.addLabel();
    this.getLabels();

  }
  addLabel(){
    console.log("addLabel method")
    this.service.postDel("noteLabels",{
      "label": this.myDiv.nativeElement.innerHTML,
      "isDeleted": false,
      // "userId": "string",
      "userId": localStorage.getItem('userId')
    },localStorage.getItem('id')).subscribe(response=>{
      console.log(response)
    })
  }
  getLabels(){
   
    this.service.get("noteLabels/getNoteLabelList",localStorage.getItem('id')).subscribe(
      response=>{
        console.log(response['data'].details);
        for (var i =0;i< (response['data'].details.length);i++){
          this.labelArray.push(response['data'].details[i])
        }
        console.log(this.labelArray,"labelArray")
      }
    )
  }
}
