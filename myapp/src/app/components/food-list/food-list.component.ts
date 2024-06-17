import { Component } from '@angular/core';
import { MyserviceService } from '../../shared/services/myservice.service'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

    constructor(private myserObj:MyserviceService){}
    items:any;
    ngOnInit(){
      this.items = this.myserObj.foods;
    }
}
