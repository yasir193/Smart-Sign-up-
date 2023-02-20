// var allSignUps = [];

// var itemadded = "";
// function addItem(){
//     var x = {
//         name: document.getElementById("name").value ,
//         email: document.getElementById("email").value ,
//         password: document.getElementById("password").value ,
//     }
//     allSignUps.push(x);
//     localStorage.setItem( "allSignUps" , JSON.stringify(allSignUps));
//     itemadded = JSON.parse(localStorage.getItem("allSignUps"))


//     var all = "";
//     for(var i = 0 ; i < itemadded.length ; i++){
//         all += itemadded[i].email
//     }
//     console.log(all)    
// }

var fname = document.getElementById("name");

var email = document.getElementById("email");
var password = document.getElementById("password");

var btnSignup = document.getElementById("btn-sign");

function signUp() {

    if(validatepassword()==true){
        var first_name = fname.value;
    var e_mail = email.value;
    var pass_word = password.value;


    if (!first_name || !e_mail || !pass_word) {
    return;
    }


    var user_data = {
    firstName: first_name,
    email: e_mail,
    password: pass_word
    }


    var user_data_str = JSON.stringify(user_data)


    var clientsArr = JSON.parse(localStorage.getItem('users')) || [];




    var userExists = clientsArr.find(user => JSON.stringify(user) === user_data_str);

    if (userExists) {
    return alert('User already exists')
    }
    

    clientsArr.push(user_data);   


    localStorage.setItem('users', JSON.stringify(clientsArr));
    }
    else{
        alert("enter number between 0 - 9 and upperCase")
    }

}
function validatepassword(){
    var regexx = /[0-9][A-Z]/;
    return regexx.test(password.value)
}

