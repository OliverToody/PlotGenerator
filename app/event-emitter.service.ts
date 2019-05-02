import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeUpdatePlot = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onUpdateClick() {    
    this.invokeUpdatePlot.emit();    
  }    
}  