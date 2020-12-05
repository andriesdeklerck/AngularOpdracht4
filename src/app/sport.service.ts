import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const sports = [
  {
    name:'Footbal',
    isBalSport: true
  },
  {
    name:'Hockey',
    isBalSport: true
  },
  {
    name:'Ski',
    isBalSport: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }

  getTopRated(){
    return of(sports);
  }
}
