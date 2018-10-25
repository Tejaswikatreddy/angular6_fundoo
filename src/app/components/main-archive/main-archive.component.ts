import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-main-archive',
  templateUrl: './main-archive.component.html',
  styleUrls: ['./main-archive.component.css']
})
export class MainArchiveComponent implements OnInit {

  constructor(public service:httpService) { }
  archiveArray = [];
 
  ngOnInit() {
    this.getList();
  }
  getList(){
    this.service.get("notes/getArchiveNotesList",localStorage.getItem("id")).subscribe(response=>{
      console.log(response['data'].data)
      for (var i = 0; i < response['data'].data.length;i++){
        this.archiveArray.push(response['data'].data[i])
      }
      console.log("Archive",this.archiveArray)
    })
  }
}
