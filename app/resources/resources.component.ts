import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MainComponent } from '../main/main.component';
import { $ } from 'protractor';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resourceData:Object;
  type: string;
  isLoading: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.resource('people');

  }

  resource(type) {
    this.isLoading = true;
    this.type = type;
    this.data.getResource(type).subscribe(data => {
      this.resourceData = data['results'];
      console.log(this.resourceData);
      this.isLoading = false;

    })
  }

  addToPlot(res, type) {
    this.data.addToPlot(res, type);
  }

}
