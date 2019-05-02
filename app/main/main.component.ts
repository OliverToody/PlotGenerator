import { Component, OnInit, getPlatform } from '@angular/core';
import { DataService } from '../data.service';
import { PlotComponent } from '../plot/plot.component';
import { EventEmitterService } from '../event-emitter.service';    

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  plot: Object;
  title: string;
  description: string;
  detail: boolean;
  resDetail: Object;
  resType: string;
  showJSON: boolean;
  jsonFormat: string;

  constructor(
    private data: DataService,
    private eventEmitterService: EventEmitterService    
    ) { }

  ngOnInit() {
    this.data.plotCast.subscribe(plot => this.plot = plot); 
    this.title = this.plot['title'];
    this.description = this.plot['description'];

    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeUpdatePlot.subscribe((name:string) => {    
        this.updatePlot();    
      });    
    } 
  }

  remove(id, res) {
    delete this.plot[res][id];
    this.data.updatePlot(this.plot);
  }

  showDetail(charachter, type) {
    this.resType = type;
    this.resDetail = charachter;
    this.detail = ! this.detail;
  }
  updatePlot() {
    this.plot['title'] = this.title;
    this.plot['description'] = this.description;
    this.data.updatePlot(this.plot);
  }
}


