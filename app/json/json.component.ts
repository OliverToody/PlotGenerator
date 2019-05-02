import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {
  plotJson: string;
  plot: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.plotCast.subscribe(plot => this.plot = plot); 
    this.plotJson = JSON.stringify(this.plot, null, "\t"); //format js object to json
  }

}
