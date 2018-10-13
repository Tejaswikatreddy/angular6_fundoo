import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  parentMessage=false;
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  menuClicked(){
    console.log("clicked")
    this.parentMessage=!this.parentMessage;
    console.log("navabar message",this.parentMessage)
  }
  }
