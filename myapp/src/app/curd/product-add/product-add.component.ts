import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  prodData:any;
  constructor(private dbserve:DatabaseServiceService,private routerobj:Router){}

  ngOnInit(){
    this.prodData = new FormGroup({
      pname:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')]),
      price:new FormControl("",[Validators.required,Validators.pattern('^[0-9]{3,20}')]),
      company:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')])
    })
  }
  addData(){
    // console.log(this.prodData.value)
    this.dbserve.addRecord("product",this.prodData.value).subscribe(()=>{
      window.alert("Record Added...");
      this.routerobj.navigate(['/maindashboard/Productdash']);
    })
  }

}
