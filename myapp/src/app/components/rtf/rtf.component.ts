import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  userForm:any;
  
  ngOnInit(){
    this.userForm = new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      Userpassword:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      uemail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      term:new FormControl("",Validators.requiredTrue)
      
    })
  }
  getData(){
    console.log(this.userForm.value);
  }

}
