import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  toDos = [
    {name: 'Lavare i piatti', desctiption:'', done:true},
    {name: 'Riordinare camera', desctiption:'', done:true},
    {name: 'Pulire Bagno', desctiption:'', done:true}
  ]

  constructor() { }

  
}
