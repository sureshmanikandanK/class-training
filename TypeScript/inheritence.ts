import { Person } from "./oops";

class Company extends Person{
    cname:string;
    gstnumber:number;
    state:string;

    constructor(name:string,contact:number,address:string,single:boolean,compname:string,compgst:number,compstate:string){
        super(name,contact,address,single);
        this.cname = compname;
        this.gstnumber = compgst;
        this.state = compstate;
        
}

    personDetails(){
        console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle} ComapnayName: ${this.cname} GST Number:${this.gstnumber} State:${this.state}`);
    }


}
let compObj = new Company("Sathya",7777,"pune",true,"changepond",66767676,"Tamilnadu")

console.log(compObj);

