import { Pipe, PipeTransform } from '@angular/core';
import { location } from '../models/location';

@Pipe({
  name: 'productivity'
})
export class ProductivityPipe implements PipeTransform {

  transform(locations: location[], type?: any): any {
    //let result:location[]=[];
    if(type=="Low Revenue"){
         return locations.filter(x=>x.revenue<=40)   
    }
    else if(type=="High Revenue")
    {
        return locations.filter(x=>x.revenue>40 && x.revenue<=100)  
    }
    else if(type=="Very High"){
         return locations.filter(x=>x.revenue>100)
    }
    else if(type=="Low to High"){
        
         return locations.sort((x,y)=>x.revenue>y.revenue?1:x.revenue==y.revenue?0:-1)
    }
    else if(type=="High to Low"){
         return locations.sort((x,y)=>x.revenue>y.revenue?-1:x.revenue==y.revenue?0:1)
    }
    else
         return locations;
  }

}
