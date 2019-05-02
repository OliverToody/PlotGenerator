import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  plotChange = {
    title: "",
    description: "",
    planets: [],
    species: [],
    people: []
  };

  private plot = new BehaviorSubject({
    title: "",
    description: "",
    planets: [],
    species: [],
    people: []
  });

  plotCast = this.plot.asObservable();
 
  constructor(private http: HttpClient) { }

  getResource(type) {
    return this.http.get("https://swapi.co/api/" + type);
  }

  addToPlot(res, type) {
     this.plotChange[type].push(res);
    //update plot
    this.plot.next(this.plotChange);
  }

  getPlot() {
    return this.plot;
  }

  updatePlot(p) {
        this.plot.next(p);
  }
}
