import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

id:any;
prodData:any;
oldData:any;
constructor(private dbserve:DatabaseServiceService,private actRouteObj:ActivatedRoute,private routerobj:Router){}

  ngOnInit(){
    this.actRouteObj.paramMap.subscribe((para)=>{
      this.id = para.get('id');
      this.dbserve.getSingleRecord("product",this.id).subscribe((response)=>{
        this.prodData = response;
        console.log(this.oldData);
        this.oldData = new FormGroup({
          pname:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')]),
          price:new FormControl("",[Validators.required,Validators.pattern('^[0-9]{3,20}')]),
          company:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')])
        })

      })

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
