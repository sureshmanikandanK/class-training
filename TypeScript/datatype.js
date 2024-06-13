console.log("Good Afternoon All");
// number datatype 
var num1 = 100, num2 = 0.5, num3 = 134455;
console.log(num1, num2, num3);
// string datatype 
var fname = "suresh", lname = "manikandan";
console.log(fname, lname);
// Boolean datatype
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
;
// Array datatype
var students = ["Suresh", "Sathya", "Sharun"];
var emp = ["Aruna", "Nisha", "Arusha"];
console.log(students);
// Tuple Datatype
var product = [101, "Laptop"];
//Enum datatype
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thur"] = 4] = "thur";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
var data1 = days.sun;
var data2 = days.mon;
// union data
var items = 11223;
//Any type of data
var futureData = true;
