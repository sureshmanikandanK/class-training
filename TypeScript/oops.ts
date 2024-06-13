
export class Person{
    //Data-member

    pname:string="Suresh";
    pcontact:number=8008080808;
    paddress:string="chennai";
    psingle:boolean=true;

    constructor(name:string,contact:number,address:string,single:boolean){
            this.pname = name;
            this.pcontact = contact;
            this.paddress = address;
            this.psingle = single;
    }

    //member-function
    personDetails(){
        console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle}`);
    }



}
///How to create object of class
// let personObj = new Person("Sathya",7777,"pune",true);
//     console.log(personObj.pname);
//     personObj.personDetails();
// let personObj1 = new Person("Sharun",7777,"Delhi",true);
//     console.log(personObj1.pname);
//     personObj1.personDetails();
// let personObj2 = new Person("Arusha",7777,"Delhi",true);
//     console.log(personObj2.pname);
//     personObj2.personDetails();

