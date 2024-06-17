import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service'
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {
   myproducts:any;
   constructor(private dbserve:DatabaseServiceService){}

   ngOnInit(){
    this.fetchData();
   }
   fetchData(){
    this.dbserve.getRecord("product").subscribe((response)=>{
      this.myproducts=response;
      console.log(response);
    }

    )
    
   }
   deleteData(id:any){
    if(window.confirm(`Are You Sure To Delete Record With Id ${id}`)){
    this.dbserve.deleteRecord("product",id).subscribe(()=>{
      window.alert("Record deleted");
      this.fetchData();
    }

    )}

   }

}
