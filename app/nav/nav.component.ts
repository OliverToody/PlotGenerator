import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';    

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( 
    private eventEmitterService: EventEmitterService    
    ) { }

  ngOnInit() {
  }

  updatePlot(){    
    this.eventEmitterService.onUpdateClick();    
  }  
}
