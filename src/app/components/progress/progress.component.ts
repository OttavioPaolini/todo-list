import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnChanges{
  @Input() data:any






  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
