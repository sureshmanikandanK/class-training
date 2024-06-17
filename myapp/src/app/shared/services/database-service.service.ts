import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

    baseURL:string="http://localhost:3001";


  constructor(private http:HttpClient) { }
//get request
  getRecord(tableName:string){
    return this.http.get(`${this.baseURL}/${tableName}`);
  }
  deleteRecord(tableName:string,id:any){
    return this.http.delete(`${this.baseURL}/${tableName}/${id}`);
  }
  // post request

  addRecord(tableName:string,data:any){
    return this.http.post(`${this.baseURL}/${tableName}`,data);
  }
  // make get request for single record
  getSingleRecord(tableName:any,id:any){
    return this.http.get(`${this.baseURL}${tableName}/${id}`);

  }
    // put request

    updateRecord(tableName:string,id:any,data:any){
      return this.http.put(`${this.baseURL}/${tableName}`,data);
    }



}
