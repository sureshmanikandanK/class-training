var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.chem = c;
        this.maths = m;
    }
    Students.prototype.totalmarks = function () {
        return this.total = this.phy + this.chem + this.maths;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.studentsResult = function () {
        console.log("Physics:".concat(this.phy, " Chemistry:").concat(this.chem, " Maths:").concat(this.maths, " TotalMarks:").concat(this.totalmarks(), " Percentage: ").concat(this.percentage()));
    };
    return Students;
}());
var stduObj = new Students(98, 89, 70);
stduObj.studentsResult();
