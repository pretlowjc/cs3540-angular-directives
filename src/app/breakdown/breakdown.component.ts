import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

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

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})
export class BreakdownComponent {
  aircrafts: AircraftSpecifications[] = [
    { name: 'North American F86', crew: 1, length: 11.3, wingspan: 11.91, height: 4.29, emptyWeight: 11125, maxSpeed: 687, range: 1525, rateOfClimb: 46 },
    { name: 'Heinkel He 162A', crew: 1, length: 9.05, wingspan: 7.2, height: 2.6, emptyWeight: 3660, maxSpeed: 490, range: 975, rateOfClimb: 23.42 },
    { name: 'Gloster Meteor', crew: 1, length: 13.59, wingspan: 11.33, height: 3.96, emptyWeight: 10684, maxSpeed: 600, range: 600, rateOfClimb: 36 },
    { name: 'de Havilland Vampire', crew: 1, length: 9.37, wingspan: 11.58, height: 2.69, emptyWeight: 7283, maxSpeed: 548, range: 1220, rateOfClimb: 24 },
    { name: 'Lockheed P-80 Shooting Star', crew: 1, length: 10.49, wingspan: 11.81, height: 3.43, emptyWeight: 8420, maxSpeed: 594, range: 825, rateOfClimb: 34.9 },
    { name: 'Messerschmitt Me 262', crew: 1, length: 10.6, wingspan: 12.6, height: 3.5, emptyWeight: 8367, maxSpeed: 560, range: 650, rateOfClimb: 20 },
    { name: 'Mikoyan-Gurevich MiG-15', crew: 1, length: 10.102, wingspan: 10.085, height: 3.7, emptyWeight: 8115, maxSpeed: 669, range: 1570, rateOfClimb: 51.2 },
    { name: 'Lockheed F-104 Starfighter', crew: 1, length: 16.66, wingspan: 6.63, height: 4.11, emptyWeight: 14000, maxSpeed: 1528, range: 420, rateOfClimb: 240 },
    { name: 'Mikoyan-Gurevich MiG-21', crew: 1, length: 14.7, wingspan: 7.154, height: 4.1, emptyWeight: 19235, maxSpeed: 1351, range: 410, rateOfClimb: 235 },
    { name: 'Dassault Mirage III', crew: 1, length: 15.03, wingspan: 8.22, height: 4.5, emptyWeight: 15543, maxSpeed: 1460, range: 750, rateOfClimb: 83 },
    { name: 'English Electric Lightning', crew: 1, length: 16.84, wingspan: 10.62, height: 5.97, emptyWeight: 31068, maxSpeed: 1500, range: 155, rateOfClimb: 100 },
    { name: 'McDonnell Douglas F-4 Phantom II', crew: 2, length: 19.2, wingspan: 11.7, height: 5, emptyWeight: 30328, maxSpeed: 1470, range: 420, rateOfClimb: 210 },
    { name: 'General Dynamics F-111 Aardvark', crew: 2, length: 22.40, wingspan: 19, height: 5.220, emptyWeight: 47200, maxSpeed: 1650, range: 350, rateOfClimb: 131.5 },
    { name: 'Mikoyan-Gurevich MiG-23', crew: 1, length: 16.7, wingspan: 13.965, height: 4.82, emptyWeight: 32717, maxSpeed: 1553, range: 930, rateOfClimb: 230 },
    { name: 'Sukhoi Su-17', crew: 1, length: 19.02, wingspan: 13.68, height: 5.12, emptyWeight: 26808, maxSpeed: 870, range: 710, rateOfClimb: 230 },
    { name: 'Shenyang J-8', crew: 1, length: 21.39, wingspan: 9.344, height: 5.41, emptyWeight: 22864, maxSpeed: 1400, range: 620, rateOfClimb: 224 },
    { name: 'Hawker Siddeley Harrier', crew: 1, length: 14.27, wingspan: 7.75, height: 3.63, emptyWeight: 13535, maxSpeed: 731, range: 410, rateOfClimb: 61.5 },
    { name: 'General Dynamics F-16 Fighting Falcon', crew: 1, length: 15.06, wingspan: 9.96, height: 4.9, emptyWeight: 18900, maxSpeed: 1353, range: 339, rateOfClimb: 300 },
    { name: 'Saab 37 Viggen', crew: 1, length: 16.4, wingspan: 10.6, height: 5.9, emptyWeight: 20944, maxSpeed: 1386, range: 621, rateOfClimb: 203 },
    { name: 'McDonnell Douglas AV-8B Harrier II', crew: 1, length: 14.12, wingspan: 9.25, height: 3.55, emptyWeight: 13968, maxSpeed: 673, range: 1400, rateOfClimb: 75 },
    { name: 'Sukhoi Su-27', crew: 1, length: 21.9, wingspan: 14.7, height: 5.92, emptyWeight: 36112, maxSpeed: 1600, range: 830, rateOfClimb: 300 },
    { name: 'Panavia Tornado', crew: 2, length: 16.72, wingspan: 13.91, height: 5.95, emptyWeight: 30622, maxSpeed: 1500, range: 860, rateOfClimb: 77 },
    { name: 'Grumman F-14 Tomcat', crew: 2, length: 19.13, wingspan: 19.545, height: 4.9, emptyWeight: 43735, maxSpeed: 1544, range: 580, rateOfClimb: 230 },
    { name: 'Mikoyan MiG-35', crew: 1, length: 17.3, wingspan: 12, height: 4.7, emptyWeight: 24251, maxSpeed: 1300, range: 620, rateOfClimb: 330 },
    { name: 'Mikoyan MiG-29', crew: 1, length: 17.32, wingspan: 11.36, height: 4.73, emptyWeight: 24251, maxSpeed: 1520, range: 560, rateOfClimb: 330 },
    { name: 'HAL Tejas', crew: 1, length: 13.2, wingspan: 8.2, height: 4.4, emptyWeight: 14462, maxSpeed: 1230, range: 310, rateOfClimb: 300 },
    { name: 'Lockheed Martin F-22 Raptor', crew: 1, length: 18.92, wingspan: 13.56, height: 5.08, emptyWeight: 43340, maxSpeed: 1500, range: 530, rateOfClimb: 314 },
    { name: 'Lockheed Martin F-35 Lightning II', crew: 1, length: 15.7, wingspan: 11, height: 4.4, emptyWeight: 29300, maxSpeed: 1227, range: 770, rateOfClimb: 228 },
    { name: 'Chengdu J-20 Mighty Dragon', crew: 1, length: 21.2, wingspan: 13.01, height: 4.69, emptyWeight: 37479, maxSpeed: 1534, range: 1200, rateOfClimb: 304 },
    { name: 'Sukhoi Su-57 Felon', crew: 1, length: 20.1, wingspan: 14.1, height: 4.6, emptyWeight: 39683, maxSpeed: 1327, range: 930, rateOfClimb: 330 }
  ]

  sortedData: AircraftSpecifications[];

  constructor() {
    this.sortedData = this.aircrafts.slice();
  }

  sortData(sort: Sort) {
    const data = this.aircrafts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'crew':
          return compare(a.crew, b.crew, isAsc);
        case 'length':
          return compare(a.length, b.length, isAsc);
        case 'wingspan':
          return compare(a.wingspan, b.wingspan, isAsc);
        case 'height':
          return compare(a.height, b.height, isAsc);
        case 'emptyWeight':
          return compare(a.emptyWeight, b.emptyWeight, isAsc);
        case 'maxSpeed':
          return compare(a.maxSpeed, b.maxSpeed, isAsc);
        case 'range': 
          return compare(a.range, b.range, isAsc);
        case 'rateOfClimb':
          return compare(a.rateOfClimb, b.rateOfClimb, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
