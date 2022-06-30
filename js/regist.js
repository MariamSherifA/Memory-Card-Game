var reg1 = /^[a-z]{4,}[0-9]{1,}@(yahoo|gmail|outlook)(.com)$/i
var reg2 = /^[a-zA-Z]{4,}[0-9]{4,}$/
var reg3 = /^[a-zA-Z]{3,}$/
var inputs = document.querySelectorAll("input")
var spans = document.querySelectorAll("span")

function checkname() {
    var name = inputs[0].value
    if (name == "") {
        spans[0].innerHTML = "<font color='red'>*Name is required</font>"
    }
    else {
        if (reg3.test(name)) {
            spans[0].innerHTML = ""
            return 1
        }
        else {
            spans[0].innerHTML = "<font color='red'>*Name must be more than 3 characters not numbers</font>"
        }
    }
}
function checkemail() {
    var email = inputs[1].value
    if (email == "") {
        spans[1].innerHTML = "<font color='red'>*Email is required</font>"
    }
    else {
        if (reg1.test(email)) {
            spans[1].innerHTML = ""
            return 1
        }
        else {
            spans[1].innerHTML = "<font color='red'>*Email format:ashraf1@yahoo.com</font>"
        }
    }
}
function checkpassword() {
    var password = inputs[2].value
    if (password == "") {
        spans[2].innerHTML = "<font color='red'>*Password is required</font>"
    }
    else {
        if (reg2.test(password)) {
            spans[2].innerHTML = ""
            return 1
        }
        else {
            spans[2].innerHTML = "<font color='red'>*Password format:ashr1525</font>"
        }
    }
}
function checkconfirmpassword() {
    var confirmPassword = inputs[3].value
    if (confirmPassword == "") {
        spans[3].innerHTML = "<font color='red'>*Confirm Your password</font>"
    }
    else {
        if (confirmPassword == inputs[2].value) {
            spans[3].innerHTML = ""
            return 1
        }
        else {
            spans[3].innerHTML = "<font color='red'>*Passwords must be the same</font>"
        }
    }
}
function checkdate() {
    var newdate = new Date(inputs[4].value)
    var d = new Date("01/01/2017")
    var d1 = new Date("01/01/1970")
    if (newdate.getTime() <= d.getTime() && newdate.getTime() >= d1.getTime()) {
        spans[4].innerHTML = ""
        return 1
    }
    else {
        spans[4].innerHTML = "<font color='red'>*You must choose date between 5 years and 55 years</font>"
    }

}
var selectedGender
function checkGender() {
    if (inputs[5].checked) {
        selectedGender = inputs[5].value
        return 1
    }
    else if (inputs[6].checked) {
        selectedGender = inputs[6].value
        return 1
    }
    else {
        spans[5].innerHTML = "<font color='red'>*Choose between male or female</font>"
    }
}
function checkterm() {
    if (inputs[7].checked) {
        spans[6].innerHTML = ""
        return 1
    }
    else {
        spans[6].innerHTML = "<font color='red'>*You must agree of terms</font>"
    }
}
document.getElementById("btn").addEventListener("click", function () {
    if (checkname() == 1 && checkemail() == 1 && checkpassword() == 1 && checkconfirmpassword() == 1 && checkdate() == 1 && checkGender() == 1 && checkterm() == 1) {
        localStorage.setItem("Name", inputs[0].value)
        localStorage.setItem("Email", inputs[1].value)
        localStorage.setItem("Password", inputs[2].value)
        localStorage.setItem("DOB", inputs[4].value)
        localStorage.setItem("Gender", selectedGender)
        location.assign("./home.html");
    }
    
})

function openTerms(){
   var form1=document.getElementById("myForm").style.display = "block"
}

function closeTerm() {
    document.getElementById("myForm").style.display = "none"
  }
