import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstgenComponent } from './firstgen/firstgen.component';
import { SecondgenComponent } from './secondgen/secondgen.component';
import { ThirdgenComponent } from './thirdgen/thirdgen.component';
import { FourthgenComponent } from './fourthgen/fourthgen.component';
import { FifthgenComponent } from './fifthgen/fifthgen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstgenComponent,
    SecondgenComponent,
    ThirdgenComponent,
    FourthgenComponent,
    FifthgenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
