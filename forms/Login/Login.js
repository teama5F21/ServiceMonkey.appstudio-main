let query = ""
let req = {}
let results = []
let netID = "jef58611"
let groupID = "375groupa5"
let pw = 'MuUqe86@>^A"8!h4'

btnLogin.onclick=function(){
  let username = inptUsername.value
  let password = inptPassword.value
  
  query = "SELECT * FROM user WHERE username = '" + username + "' AND password = '" + password +"'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      lblError.value = "Incorrect Username or Password, please try again!"
    else{
        // CHANGE THE NEWACCOUNT FORM BELOW TO THE HOMEPAGE FORM
        ChangeForm(Home)
}
}

}

btnRegister.onclick=function(){
  ChangeForm(Register)
}