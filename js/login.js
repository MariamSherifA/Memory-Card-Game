var inputs = document.querySelectorAll("input")
var spans = document.querySelectorAll("span")

function checkemaillog()
{
     if(inputs[0].value!="")
     {
        if(inputs[0].value!= localStorage.getItem("Email"))
          {
          spans[0].innerHTML="<font color='red'>*Email not found,please sing up first</font>"
          }
    else
     {
        spans[0].innerHTML = ""
         return 1
     }
    }
    else
    {
          spans[0].innerHTML="<font color='red'>*Email and password are required</font>"    
    }
}
function checkpasswordlog()
{
    if(inputs[1].value!=""){
    if(inputs[1].value!= localStorage.getItem("Password"))
     {
          spans[0].innerHTML="<font color='red'>*Email or password is wrong</font>"
     }
    else
     {
        spans[0].innerHTML = ""
         return 1
     }
    }
    else
    {
         spans[0].innerHTML="<font color='red'>*Email and password are required</font>"    
    }
}

//

function Remember_check_cookie()
{
    var x = document.getElementById("box").checked;
    if(checkemaillog()==1&&checkpasswordlog()==1)
    {
      if(x==true)
      {
          var user_name=document.getElementById('U_name').value;
          var user_pswd=document.getElementById('password').value; 
          document.cookie="Email="+user_name+";expires=wed,23 feb 2022 00:00 UTC";
          document.cookie="Password="+user_pswd+";expires=wed,23 feb 2022 00:00 UTC";
          location.assign("./home.html");
      }
       else{
        location.assign("./home.html");
       }
  }
}


s
