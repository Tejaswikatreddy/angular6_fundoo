import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  @Input() Note;
  constructor(private service: httpService) { }

  ngOnInit() {
  }
  @Output() eventEmit = new EventEmitter();

  archive(){
    console.log(this.Note.id)
    var arr = []
    arr.push(this.Note.id)
    console.log(arr);
    if(this.Note.id!=undefined){
    this.service.postDel("notes/archiveNotes",
      {
        "isArchived": true,
        "noteIdList": arr

      }, localStorage.getItem("id"))
      .subscribe(response => {
        console.log(response);
        this.eventEmit.emit({})
      },error=>{
        console.log(error)
      })
    }
  }
  }
