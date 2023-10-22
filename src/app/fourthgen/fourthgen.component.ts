import { Component } from '@angular/core';

export interface AircraftSpecifications {
  name: string;
  crew: number;
  length: number; // m
  wingspan: number; // m
  height: number; // m
  emptyWeight: number; // lbs
  maxSpeed: number; // mph
  range: number; // mi
  rateOfClimb: number; // m/s
}

const ELEMENT_DATA: AircraftSpecifications[] = [
  {name: 'General Dynamics F-16 Fighting Falcon', crew: 1, length: 15.06, wingspan: 9.96, height: 4.9, emptyWeight: 18900, maxSpeed: 1353, range: 339, rateOfClimb: 300},
  {name: 'Saab 37 Viggen', crew: 1, length: 16.4, wingspan: 10.6, height: 5.9, emptyWeight: 20944, maxSpeed: 1386, range: 621, rateOfClimb: 203},
  {name: 'McDonnell Douglas AV-8B Harrier II', crew: 1, length: 14.12, wingspan: 9.25, height: 3.55, emptyWeight: 13968, maxSpeed:673, range: 1400, rateOfClimb: 75},
  {name: 'Sukhoi Su-27', crew: 1, length: 21.9, wingspan: 14.7, height: 5.92, emptyWeight: 36112, maxSpeed: 1600, range: 830, rateOfClimb: 300},
  {name: 'Panavia Tornado', crew: 2, length: 16.72, wingspan:13.91, height: 5.95, emptyWeight: 30622, maxSpeed: 1500, range: 860, rateOfClimb: 77},
  {name: 'Grumman F-14 Tomcat', crew: 2, length: 19.13, wingspan: 19.545, height: 4.9, emptyWeight: 43735, maxSpeed: 1544, range: 580, rateOfClimb: 230},
  {name: 'Mikoyan MiG-35', crew: 1, length: 17.3, wingspan: 12, height: 4.7, emptyWeight: 24251, maxSpeed: 1300, range: 620, rateOfClimb: 330},
  {name: 'Mikoyan MiG-29', crew: 1, length: 17.32, wingspan: 11.36, height: 4.73, emptyWeight: 24251, maxSpeed: 1520, range: 560, rateOfClimb: 330},
  {name: 'HAL Tejas', crew: 1, length: 13.2, wingspan: 8.2, height: 4.4, emptyWeight: 14462, maxSpeed: 1230, range: 310, rateOfClimb: 300}
]

@Component({
  selector: 'app-fourthgen',
  templateUrl: './fourthgen.component.html',
  styleUrls: ['./fourthgen.component.css']
})

export class FourthgenComponent {
  displayedColumns: string[] = ['name', 'crew', 'length', 'wingspan', 'height', 'emptyWeight', 'maxSpeed', 'range', 'rateOfClimb'];
  dataSource = ELEMENT_DATA;
}
