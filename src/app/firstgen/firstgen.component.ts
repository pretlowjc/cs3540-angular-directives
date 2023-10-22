import { Component } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

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
  {name: 'North American F86', crew: 1, length: 11.3, wingspan: 11.91, height: 4.29, emptyWeight: 11125, maxSpeed: 687, range: 1525, rateOfClimb: 46},
  {name: 'Heinkel He 162A', crew: 1, length: 9.05, wingspan: 7.2, height: 2.6, emptyWeight: 3660, maxSpeed: 490, range: 975, rateOfClimb: 23.42},
  {name: 'Gloster Meteor', crew: 1, length: 13.59, wingspan: 11.33, height: 3.96, emptyWeight: 10684, maxSpeed: 600, range: 600, rateOfClimb: 36},
  {name: 'de Havilland Vampire', crew: 1, length: 9.37, wingspan: 11.58, height: 2.69, emptyWeight: 7283, maxSpeed: 548, range: 1220, rateOfClimb: 24},
  {name: 'Lockheed P-80 Shooting Star', crew: 1, length: 10.49, wingspan: 11.81, height: 3.43, emptyWeight: 8420, maxSpeed: 594, range: 825, rateOfClimb: 34.9},
  {name: 'Messerschmitt Me 262', crew: 1, length: 10.6, wingspan: 12.6, height: 3.5, emptyWeight: 8367, maxSpeed: 560, range: 650, rateOfClimb: 20},
  {name: 'Mikoyan-Gurevich MiG-15', crew: 1, length: 10.102, wingspan: 10.085, height: 3.7, emptyWeight: 8115, maxSpeed: 669, range: 1570, rateOfClimb: 51.2}
]

@Component({
  selector: 'app-firstgen',
  templateUrl: './firstgen.component.html',
  styleUrls: ['./firstgen.component.css'],
})

export class FirstgenComponent {
  displayedColumns: string[] = ['name', 'crew', 'length', 'wingspan', 'height', 'emptyWeight', 'maxSpeed', 'range', 'rateOfClimb'];
  dataSource = ELEMENT_DATA;
}
