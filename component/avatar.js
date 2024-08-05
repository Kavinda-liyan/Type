
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let AvatarIcon=document.getElementById("avatarAlp");
let AvatarName=document.getElementById("avatarName");
let dialogBox=document.getElementById("dialogbox");

document.getElementById("AvatarBtn").onclick=function(){
    let FirstName=firstName.value.trim();
    let LastName=lastName.value.trim();
   if (FirstName == "" || LastName == ""){
    console.log("help");
    dialogBox.textContent=`Both First Name and Last Name Fields are need to fill`;
   }
   else{

    FirstName=FirstName.toUpperCase();
    LastName=LastName.toUpperCase();
   
    AvatarIcon.textContent= FirstName.charAt(0) + LastName.charAt(0);
    dialogBox.textContent=``;
    AvatarName.textContent= `${FirstName} ${LastName}`;
   }
   
}
