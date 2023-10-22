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
  {name: 'Lockheed Martin F-22 Raptor', crew: 1, length: 18.92, wingspan: 13.56, height: 5.08, emptyWeight: 43340, maxSpeed: 1500, range: 530, rateOfClimb: 314},
  {name: 'Lockheed Martin F-35 Lightning II', crew: 1, length: 15.7, wingspan: 11, height: 4.4, emptyWeight: 29300, maxSpeed: 1227, range: 770, rateOfClimb: 228},
  {name: 'Chengdu J-20 Mighty Dragon', crew: 1, length: 21.2, wingspan: 13.01, height: 4.69, emptyWeight: 37479, maxSpeed: 1534, range: 1200, rateOfClimb: 304}, 
  {name: 'Sukhoi Su-57 Felon', crew: 1, length: 20.1, wingspan: 14.1, height: 4.6, emptyWeight: 39683, maxSpeed: 1327, range: 930, rateOfClimb: 330}
]

@Component({
  selector: 'app-fifthgen',
  templateUrl: './fifthgen.component.html',
  styleUrls: ['./fifthgen.component.css']
})
export class FifthgenComponent {
  displayedColumns: string[] = ['name', 'crew', 'length', 'wingspan', 'height', 'emptyWeight', 'maxSpeed', 'range', 'rateOfClimb'];
  dataSource = ELEMENT_DATA;
}
