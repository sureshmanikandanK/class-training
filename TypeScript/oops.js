"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, contact, address, single) {
        //Data-member
        this.pname = "Suresh";
        this.pcontact = 8008080808;
        this.paddress = "chennai";
        this.psingle = true;
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    //member-function
    Person.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " Contact:").concat(this.pcontact, " Address:").concat(this.paddress, " Single:").concat(this.psingle));
    };
    return Person;
}());
exports.Person = Person;
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
