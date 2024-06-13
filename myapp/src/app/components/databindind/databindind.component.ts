import { Component } from '@angular/core';

@Component({
  selector: 'app-databindind',
  templateUrl: './databindind.component.html',
  styleUrl: './databindind.component.css'
})
export class DatabindindComponent {
 
  myname:string = "Ravi";
  imgPath:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFonnQoHSZ7TXo4nuXDCpleEROqxT6YkYoUTdGEs1zuA&s"
  imgName:string = "Rajini";

    Greeting(){
      window.alert("Good Afternoon Friends")
    }
    mydata:any
}
