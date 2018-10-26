import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"
import { MatDialog } from '@angular/material';
import { EditLabelComponent } from '../edit-label/edit-label.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
public clicked=false;
public data:any={}
public firstname=localStorage.getItem("firstName")
public lastname = localStorage.getItem("lastName")
public frstLetter=this.firstname[0];
public email = localStorage.getItem("email")
  @Output() eventEmit = new EventEmitter();

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public router: Router, 
    private service: httpService, private auth: AuthService, public dialog: MatDialog) {}

  logout(){
    console.log("logout function")
   console.log(this.auth.getToken())
    this.service.post("/user/logout",this.data,this.auth.getToken()).subscribe(response=>{
      
        this.auth.removeToken();
        console.log(response);
        this.router.navigate(['login']);
      
    },error=>{
        if(error){
          console.log(error);
        }
    })
    // localStorage.removeItem("id");
   
  }
  ArchiveClicked(){
    this.router.navigate(['archive'])
  }
  TrashClicked(){
    this.router.navigate(['trash'])

  }
  NoteClicked(){
    this.router.navigate(['home'])
  }
  openDialog(note): void {
    const dialogRef = this.dialog.open(EditLabelComponent, {

      // data: { title: note.title, description: note.description, id: note.id }
    });
    console.log(note);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventEmit.emit({});


      // this.animal = result;
    });
  }
  
 
  }
