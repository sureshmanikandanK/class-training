


function checkData(){
    let uid = document.getElementById("userid").value;
    // window.alert("Please enter name")
    if(uid.trim()==""){
        document.getElementById("uiderror").innerHTML="User name is required";
        document.getElementById("uiderror").style.color="red";
    }
    else if(!uid.trim().match('^[a-zA-Z]{3,20}$')){
        document.getElementById("uiderror").innerHTML="User name must be in proper format";
        document.getElementById("uiderror").style.color="red";
    }
    else{
        document.getElementById("uiderror").innerHTML="";
        
    }

}
function checkpass(){
    let uid = document.getElementById("password").value;
    // window.alert("Please enter name")
    if(uid.trim()==""){
        document.getElementById("upsserror").innerHTML="password is required";
        document.getElementById("upsserror").style.color="red";
    }
    else if(!uid.trim().match('^[a-zA-Z @gmail.com]{3,20}$')){
        document.getElementById("upsserror").innerHTML="User password be in proper format";
        document.getElementById("upsserror").style.color="red";
    }
    else{
        document.getElementById("upsserror").innerHTML="";
        
    }

}
function checkgender(){
    let uid = document.getElementById("GenderId").value;
    // // window.alert("Please enter name")
    // if(uid.trim()==""){
    //     document.getElementById("ugender").innerHTML="Gender is required";
    //     document.getElementById("ugender").style.color="red";
    // }
    // else if(!uid.trim().match('^[a-zA-Z @gmail.com]{3,20}$')){
    //     document.getElementById("upsserror").innerHTML="User password be in proper format";
    //     document.getElementById("upsserror").style.color="red";
    // }
    // else{
    //     document.getElementById("upsserror").innerHTML="";
        
    // }
    if(ugender[0].checked==false && ugender[1].checked==false && ugender[2].checked==false){
        window.alert("Please enter your gender");
        return false;
    }

}



