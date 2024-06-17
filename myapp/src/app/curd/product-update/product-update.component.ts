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
      console.log(this.id);
      this.dbserve.getSingleRecord("product",this.id).subscribe((response)=>{
       
        console.log(response);
        this.oldData = {...response}
        this.prodData = new FormGroup({
          pname:new FormControl(this.oldData.pname,[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')]),
          price:new FormControl(this.oldData.price,[Validators.required,Validators.pattern('^[0-9]{3,20}')]),
          company:new FormControl(this.oldData.company,[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}')]),
        })

      })

      
    })
    
  }


  addData(){
    // console.log(this.prodData.value)
    this.dbserve.updateRecord("product",this.id,this.prodData.value).subscribe(()=>{
      window.alert("Record updated...");
      this.routerobj.navigate(['/maindashboard/Productdash']);
    })
  }
}
