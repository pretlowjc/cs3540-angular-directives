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
  {name: 'Lockheed F-104 Starfighter', crew: 1, length: 16.66, wingspan: 6.63, height: 4.11, emptyWeight: 14000, maxSpeed: 1528, range: 420, rateOfClimb: 240},
  {name: 'Mikoyan-Gurevich MiG-21', crew: 1, length: 14.7, wingspan: 7.154, height: 4.1, emptyWeight: 19235, maxSpeed: 1351, range: 410, rateOfClimb: 235},
  {name: 'Dassault Mirage III', crew: 1, length: 15.03, wingspan: 8.22, height: 4.5, emptyWeight: 15543, maxSpeed: 1460, range: 750, rateOfClimb: 83},
  {name: 'English Electric Lightning', crew: 1, length: 16.84, wingspan: 10.62, height: 5.97, emptyWeight: 31068, maxSpeed: 1500, range: 155, rateOfClimb: 100}
]

@Component({
  selector: 'app-secondgen',
  templateUrl: './secondgen.component.html',
  styleUrls: ['./secondgen.component.css']
})
export class SecondgenComponent {
  displayedColumns: string[] = ['name', 'crew', 'length', 'wingspan', 'height', 'emptyWeight', 'maxSpeed', 'range', 'rateOfClimb'];
  dataSource = ELEMENT_DATA;
}
