let userName = document.getElementById("userName");
let passWord =document.getElementById("passWord");
let flag =1;


function validateForm(){
    if(userName.value === ""){
        document.getElementById("userError").innerHTML = "user name in empty";
        flag = 0;
    }else if(userName.value.length<=3){
        document.getElementById("userError").innerHTML = "user name require min- 3 char";
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if(passWord.value == ""){
        document.getElementById("passError").innerHTML = "passWord empty";
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
        }

        if (flag){
            return true;
        }else{
            return false;
        }

}