import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit, AfterViewInit{
 @Output() exportTask = new EventEmitter<any>()

 toDos = [
  { name : 'portare a spasso il cane/gatto',  completed : true},
  { name : 'portare a spasso il cane/gatto',  completed : true},
  { name : 'portare a spasso il cane/gatto',  completed : false},
  { name : 'portare a spasso il cane/gatto',  completed : true},
  { name : 'portare a spasso il cane/gatto',  completed : false},
  { name : 'portare a spasso il cane/gatto',  completed : true},
  { name : 'portare a spasso il cane/gatto',  completed : true},
  { name : 'portare a spasso il cane/gatto',  completed : true},
] 
  task: object = {name: '', completed: false};
  newTask:string = ''
  constructor(){} 
  ngAfterViewInit(): void {
  
    
  }
  ngOnInit(): void {
    this.exportTask.emit(this.toDos)
  }
  
  addTask(newTask:any) {
    if (newTask !== '') {
      let help = {name: newTask , completed: false}
      this.toDos.push(help);
      newTask = ''
      help = {name: '', completed: false}
    }  
  }
  

  exTask(){
    this.exportTask.emit(this.toDos)
  }
}
