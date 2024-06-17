import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  foods:any[]=[
    {name:"Parotta" , photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_Ka6vOR7oEbYnRy0EU8r8x6PDNnF76UXfA&s",Price:30},
    {name:"idly" , photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vEv-6x-pDusmQQ5mssgwTA7SF4cPG1I5HQ&s",Price:10},
    {name:"Dosa" , photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNRkQBAaLqrXbPH1qQncIKl6ZuusEMTndEA&s",Price:60},
    {name:"Biriyani" , photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVKqKN0m0QppdWMgYBhIb9tbHbLVHfEVOfw&s",Price:300},
  ];


}
