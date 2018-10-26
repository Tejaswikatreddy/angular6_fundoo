import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';


@Component({
  selector: 'app-main-trash',
  templateUrl: './main-trash.component.html',
  styleUrls: ['./main-trash.component.css']
})
export class MainTrashComponent implements OnInit {

  constructor(public service:httpService) { }
public trashArray=[];
  ngOnInit() {
    this.getList()
  }
  getList(){
    this.service.get("notes/getTrashNotesList", localStorage.getItem("id")).subscribe(response => {
      console.log(response['data'].data)
      for (var i = 0; i < response['data'].data.length; i++) {
        this.trashArray.push(response['data'].data[i])
      }
      console.log("trash", this.trashArray)
    })
  }

}
