import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PlotComponent } from './plot/plot.component';
import { JsonComponent } from './json/json.component';

const routes: Routes = [
  {path: "", component: StartComponent},
  {path: "plot", component: PlotComponent},
  {path: "json", component: JsonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
