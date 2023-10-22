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
  {name: 'McDonnell Douglas F-4 Phantom II', crew: 2, length: 19.2, wingspan: 11.7, height: 5, emptyWeight: 30328, maxSpeed: 1470, range: 420, rateOfClimb: 210},
  {name: 'General Dynamics F-111 Aardvark', crew: 2, length: 22.40, wingspan: 19, height: 5.220, emptyWeight: 47200, maxSpeed: 1650, range: 350, rateOfClimb: 131.5},
  {name: 'Mikoyan-Gurevich MiG-23', crew: 1, length: 16.7, wingspan: 13.965, height: 4.82, emptyWeight: 32717, maxSpeed: 1553, range: 930, rateOfClimb: 230},
  {name: 'Sukhoi Su-17', crew: 1, length: 19.02, wingspan: 13.68, height: 5.12, emptyWeight: 26808, maxSpeed: 870, range: 710, rateOfClimb: 230},
  {name: 'Shenyang J-8', crew: 1, length: 21.39, wingspan: 9.344, height: 5.41, emptyWeight: 22864, maxSpeed: 1400, range: 620, rateOfClimb: 224},
  {name: 'Hawker Siddeley Harrier', crew: 1, length: 14.27, wingspan: 7.75, height: 3.63, emptyWeight: 13535, maxSpeed: 731, range: 410, rateOfClimb: 61.5}
]

@Component({
  selector: 'app-thirdgen',
  templateUrl: './thirdgen.component.html',
  styleUrls: ['./thirdgen.component.css']
})
export class ThirdgenComponent {
  displayedColumns: string[] = ['name', 'crew', 'length', 'wingspan', 'height', 'emptyWeight', 'maxSpeed', 'range', 'rateOfClimb'];
  dataSource = ELEMENT_DATA;
}
