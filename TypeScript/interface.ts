interface IResult{

        totalmarks();
        percentage();
}

class Students implements IResult{
    phy:number;
    chem:number;
    maths:number;
    total:number;
    constructor(p:number,c:number,m:number){
        this.phy=p;
        this.chem=c;
        this.maths=m;
    }

    totalmarks() {
       return this.total = this.phy+this.chem+this.maths
    }
    percentage() {
        return (this.total/300)*100;
    }
    studentsResult(){
        console.log(`Physics:${this.phy} Chemistry:${this.chem} Maths:${this.maths} TotalMarks:${this.totalmarks()} Percentage: ${this.percentage()}`);
    }

}
let stduObj = new Students(98,89,70)
stduObj.studentsResult();