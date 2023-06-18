import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toDos : any

  constructor(public service: ServiceService){}

  ngOnInit(): void {
    this.toDos = this.service.toDos;
    console.log(this.toDos);
    
  }

}
