import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { DataformsComponent } from './pages/dataforms/dataforms.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LocationComponent } from './pages/home/location/location.component';
import { RatedPipe } from './pipes/rated.pipe';
import { ProductivityPipe } from './pipes/productivity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    DataformsComponent,
    ReportsComponent,
    VisualizationComponent,
    ProjectsComponent,
    LocationComponent,
    RatedPipe,
    ProductivityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
