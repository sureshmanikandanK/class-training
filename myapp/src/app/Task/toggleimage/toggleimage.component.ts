import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimage',
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {

  imgPath:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFonnQoHSZ7TXo4nuXDCpleEROqxT6YkYoUTdGEs1zuA&s"
  imgName:string = "Rajini";
 
  Greeting(){
    if(this.imgName=="Rajini"){
   this.imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYeRFfJgOrVQVI9KSS-cKXiMUOoA-6lgtmQ&s";
   this.imgName="vijay";
    }else if(this.imgName=="vijay"){
      this.imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFonnQoHSZ7TXo4nuXDCpleEROqxT6YkYoUTdGEs1zuA&s";
      this.imgName="Rajini";
    }
  }

}
