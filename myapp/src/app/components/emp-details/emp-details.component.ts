import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
  emp:any =[
    {id:101,name:"suresh",salary:67770,post:"Manager",Address:"Chennai"},
    {id:102,name:"Ravi",salary:67676,post:"TL",Address:"Delhi"},
    {id:103,name:"Sathya",salary:67790,post:"GC",Address:"Mumbai"},
    {id:104,name:"Nithish",salary:69070,post:"Analyst",Address:"Bangalore"},
    {id:105,name:"Dinesh",salary:65550,post:"Traine",Address:"Goa"}
  ]

}
