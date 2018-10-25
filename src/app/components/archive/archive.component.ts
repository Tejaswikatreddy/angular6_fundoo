import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  @Input() Noteid;
  constructor(private service: httpService) { }

  ngOnInit() {
  }
  @Output() eventEmit = new EventEmitter();

  archive(){
    console.log(this.Noteid)
    var arr = []
    arr.push(this.Noteid)
    console.log(arr);
    this.service.postDel("notes/archiveNotes",
      {
        "isArchived": true,
        "noteIdList": arr

      }, localStorage.getItem("id"))
      .subscribe(response => {
        console.log(response);
        this.eventEmit.emit({})
      })
  }
  }
