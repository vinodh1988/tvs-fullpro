import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
locations:location[];
ctype:string="All";
  constructor(private ls:LocationService) {
      this.locations=this.ls.getLocations();
   }

  ngOnInit() {
  }

}
