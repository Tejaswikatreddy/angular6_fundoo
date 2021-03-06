import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatToolbarModule, MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './components/signup/signup.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { httpService } from './services/http.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { IconsComponent } from './components/icons/icons.component';
import { RemindMeComponent } from './components/remind-me/remind-me.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { MoreComponent } from './components/more/more.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
      AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ResetPasswordComponent,
    SidebarComponent,
    ToolbarComponent,
    NavbarComponent,
    IconsComponent,
    RemindMeComponent,
    CollaboratorComponent,
    ChangeColorComponent,
    AddImageComponent,
    ArchiveComponent,
    MoreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [
    httpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
