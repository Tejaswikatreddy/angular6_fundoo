import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  constructor(private service: httpService) { }
  @Input() Note: object;
  @Output() labelArray=[];
  public flag = true;
  public checked = false;
  @Output() eventEmit = new EventEmitter();
  @Output() labelEvent = new EventEmitter();
  public noteLabels = [];
  public search;
  ngOnInit() {
    console.log(this.Note);
    
      if(this.Note!=null){
      for (var i = 0; i < this.Note['noteLabels'].length; i++) {
        this.noteLabels.push(this.Note['noteLabels'][i])
      }
    }
      this.getLabels()
  }
  
 
  delete() {
    console.log(this.Note['id'])
    var arr = []
    arr.push(this.Note['id'])
    console.log(arr);
    this.service.postDel("notes/trashNotes",
      {
        "isDeleted": true,
        "noteIdList": arr
      }, localStorage.getItem("id"))
      .subscribe(response => {
        console.log(response);
        this.eventEmit.emit({})
      })
  }
 
 
  getLabels() {
  
    this.service.get("noteLabels/getNoteLabelList", localStorage.getItem('id')).subscribe(
      response => {
        this.labelArray = response['data'].details;
        if(this.noteLabels.length>0){
        for (var i = 0; i < this.labelArray.length; i++) {
          for (var j = 0; j < this.noteLabels.length; j++) {
            if (this.labelArray[i].id == this.noteLabels[j].id) {
              this.labelArray[i].isChecked = true;
            }
          }
        }
      }
      })
  }

  labelSelected(labelObj) {
    console.log("selected label is", labelObj.isChecked);
    this.labelEvent.emit(labelObj.id)
    if (this.Note != null && labelObj.isChecked==null){    
      console.log("add function");

      console.log(labelObj.id)
      this.service.postDel("/notes/" + this.Note['id'] + "/addLabelToNotes/" + labelObj.id + "/add", null, localStorage.getItem('id'))
        .subscribe(Response => {
          console.log(Response);
          this.eventEmit.emit({})
        }, error => {
          console.log(error)
        })
      }
    if (this.Note != null && labelObj.isChecked==true){
      this.service.postDel("/notes/" + this.Note['id'] + "/addLabelToNotes/" + labelObj.id + "/remove", null, localStorage.getItem('id'))
        .subscribe(Response => {
          console.log(Response);
          this.eventEmit.emit({})
        }, error => {
          console.log(error)
        })
    }
    }
  
}
