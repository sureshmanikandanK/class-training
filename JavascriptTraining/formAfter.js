
function checkAll(){
    // window.alert("Hi")
    // let ufname= document.getElementById("fname").value;
    let ufname=document.myform.fname.value;
    let regfname = "^[a-zA-Z]{3,15}$"
    let uedu=document.myform.edu;
    if(ufname.trim()===""){
        window.alert("This field is required");
        return false;
    }
    if(!ufname.trim().match(regfname)){
        window.alert("Must enter only Character min-3 max-15");
        return false;
    }

    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false){
        window.alert("Please enter your qualification");
        return false;
    }
}


