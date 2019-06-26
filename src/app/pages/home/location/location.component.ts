import { Component, OnInit,Input} from '@angular/core';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
@Input()   location:location;
    
  constructor() { }

  ngOnInit() {
  }

}
