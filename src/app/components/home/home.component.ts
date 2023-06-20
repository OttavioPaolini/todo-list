import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toDos:any
  constructor(){}
  ngOnInit(): void {
    
  }
  
  
  onExportData(value:any){
    this.toDos = value
    console.log("eila", this.toDos);
    
  }

}
