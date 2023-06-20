import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  
})
export class TaskComponent implements OnInit, AfterViewInit, OnChanges{
  @Input() data: any
  
  @ViewChild ('viewData') viewData!: ElementRef

  selectedOption: any

  completed: boolean = true;



  constructor(){}


  deleteTask(task:string|number){
    const index = this.data.indexOf(task);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

 

  ngAfterViewInit(): void {
   
    
  }
  
  ngOnInit(): void {
   
    
  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
}
