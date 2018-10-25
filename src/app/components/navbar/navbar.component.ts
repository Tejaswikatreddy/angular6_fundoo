import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { httpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service"

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

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public router: Router, 
    private service: httpService, private auth: AuthService) {}

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
 
  }
