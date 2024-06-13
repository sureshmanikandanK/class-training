import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {


    msg:string = "Hello Friends All are great.";

    emp:any={
      id:101,
      name:"Suresh",
      salary:9000
    }

    dateObj = new Date();

}
