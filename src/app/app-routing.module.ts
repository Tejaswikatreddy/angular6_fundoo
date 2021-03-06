import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'forgot', component: ForgotPasswordComponent},
  {
    path: '', component: NavbarComponent ,children:[
    {path:'home',component:SidebarComponent},
    
    
  ]},
  {path:"resetpassword/:forgotToken",component:ResetPasswordComponent},
 

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  // declarations: [],
  
})
export class AppRoutingModule { }
