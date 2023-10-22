import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';


import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstgenComponent } from './firstgen/firstgen.component';
import { SecondgenComponent } from './secondgen/secondgen.component';
import { ThirdgenComponent } from './thirdgen/thirdgen.component';
import { FourthgenComponent } from './fourthgen/fourthgen.component';
import { FifthgenComponent } from './fifthgen/fifthgen.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { NgFor } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstgenComponent,
    SecondgenComponent,
    ThirdgenComponent,
    FourthgenComponent,
    FifthgenComponent,
    BreakdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
