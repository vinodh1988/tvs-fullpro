import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataformsComponent } from './pages/dataforms/dataforms.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"forms",component:DataformsComponent},
  {path:"reports",component:ReportsComponent},
  {path:"visualization",component:VisualizationComponent},
  {path:"projects",component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
