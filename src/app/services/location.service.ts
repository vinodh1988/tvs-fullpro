import { Injectable } from '@angular/core';
import { location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations:location[];

  constructor() {
      this.locations=[
        {
          name:"Chennai Corporate office",
          description:"Located in Mount Road , spacious campus situated in heart of the city",
          revenue: 110,
          empcount:14000,
          image:"chennai.jpg"
        },
        {
          name:"Bangalore Manufacturing unit",
          description:"Located in city outskirt , spacious campus could be reached from any part of the city",
          revenue: 67,
          empcount:8000,
          image:"bangalore.jpg"
        },
        {
          name:"Jaipur Manufacturing unit",
          description:"Located in city outskirt , spacious campus could be reached from any part of the city",
          revenue: 11,
          empcount:2000,
          image:"jaipur.jpg"
        },
        {
          name:"Nagpur Manufacturing unit",
          description:"Located in city outskirt ,  campus that could be reached in 20 minutes from anywhere in the city",
          revenue: 18,
          empcount:3000,
          image:"mumbai.jpg"
        },
        {
          name:"Mumbai Corporate office",
          description:"Located in heart of the city, spacious campus could be reached from any part of the city",
          revenue: 98 ,
          empcount:11500,
          image:"chennai.jpg"
        },
        {
          name:"Delhi Corporate office",
          description:"Located in heart of the city, spacious campus could be reached from any part of the city",
          revenue: 64 ,
          empcount:4500,
          image:"delhi.jpg"
        },
        {
          name:"Madurai Manufacturing unit",
          description:"Located in heart of the city, spacious campus could be reached from any part of the city",
          revenue: 44,
          empcount:6500,
          image:"madurai.jpeg"
        },
        {
          name:"Pune Corporate office",
          description:"Located in heart of the city, spacious campus could be reached from any part of the city",
          revenue: 33 ,
          empcount:4500,
          image:"pune.jpg"
        },
        {
          name:"Kolkata Corporate office",
          description:"Located in heart of the city, spacious campus could be reached from any part of the city",
          revenue: 88 ,
          empcount:9500,
          image:"kolkata.jpg"
        },
      ]
   }

   getLocations(){
      return this.locations;
   }

}
