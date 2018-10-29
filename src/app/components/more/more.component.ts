import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  constructor(private service:httpService) { }
@Input() Note;
public flag=true;
  public labelArray=[];
  @Output() eventEmit = new EventEmitter();
  // public data: any = 
  ngOnInit() {
   
  }
delete(){
  console.log(this.Note.id)
  var arr=[]
  arr.push(this.Note.id)
  console.log(arr);
  this.service.postDel("notes/trashNotes",
    {
      "isDeleted": true,
      "noteIdList": arr

    } ,localStorage.getItem("id"))
  .subscribe(response=>{
  console.log(response);
    this.eventEmit.emit({})
})
}
click(){
 this.flag=false;
 this.getLabels();
}
  getLabels() {
    console.log("get labels")
    this.service.get("noteLabels/getNoteLabelList", localStorage.getItem('id')).subscribe(
      response => {
        this.labelArray = [];
       
        console.log(response['data'].details);
        for (var i = 0; i < (response['data'].details.length); i++) {
          if (response['data'].details[i].isDeleted != true) {
            this.labelArray.push(response['data'].details[i])
            
          }
        }
        console.log(this.labelArray, "labelArray")
        
      }
    )

  }
}
