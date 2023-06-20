import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  toDos = [{
    name: '',
    completed: false
  }]

  constructor() { }

  
}
