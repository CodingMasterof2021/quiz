var lscheck = "Checking done! User has a registered account";
var username = "";
var password = "";
var newusername = "";
var newpassword = "";
var currentpg = "Login"; //to check and stuff

function login()
{
        username = document.getElementById('username1').value;
        password = document.getElementById('password1').value;
        //Check Password Function (unhackable lol)
            if (localStorage.getItem("Username") === username && localStorage.getItem("Password") === password) {
                console.log(lscheck); //Certify the check
                document.getElementById("error").style.visibility="hidden"; //Hide it incase they got it wrong first time
                window.location = "users.html"; //Go to the user name page
                currentpg = "quizpg";
            }else{
                document.getElementById("error").style.visibility="visible"; //Show the error msg
            }
       
}
