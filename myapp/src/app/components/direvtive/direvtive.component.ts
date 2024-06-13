import { Component } from '@angular/core';

@Component({
  selector: 'app-direvtive',
  templateUrl: './direvtive.component.html',
  styleUrl: './direvtive.component.css'
})
export class DirevtiveComponent {

    isCond1:boolean=true;
    isCond2:boolean=false;


    bikes:string[] = ["Pulsar","Apache","Splendor","R15","Duke"]
    mybike:string="Duke"
}













