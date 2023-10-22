import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent { 
  pages = [
    {name: "Home", link: ""},
    {name: "First Generation", link: "firstgen"},
    {name: "Second Generation", link: "secondgen"},
    {name: "Third Generation", link: "thirdgen"},
    {name: "Fourth Generation", link: "fourthgen"},
    {name: "Fifth Generation", link: "fifthgen"},
    {name: "Breakdown", link: "breakdown"}
  ]
}
