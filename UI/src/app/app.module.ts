import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component';
import { SharedService } from './shared.service';
import {AuthenServiceService} from './authen-service.service';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import {OkDialog} from './ok-dialog/ok-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {
    MatDialogContainer,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTooltipModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ReviewComponent,
    OkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SharedService,AuthenServiceService,OkDialog],
  bootstrap: [AppComponent],
  entryComponents:[OkDialogComponent]
})
export class AppModule { }
