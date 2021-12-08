btnSubmit.onclick = function() {
    username = inputRegUsername.value
    password = inputRegPassword.value
    first_name = inptRegFirstName.value
    last_name = inptRegLastName.value
    email = inptRegEmail.value
    query = "INSERT INTO user (`username`,`password`,`first_name`,`last_name`,`email`) VALUES ('" + username + "', '" + password + "', '" + first_name + "', '" + last_name + "', '" + email + "')"
    

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" +groupID+"&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblAdd.value = "You have added the user! Now go back and log in."
        else
            lblAdd.value = "There was a problem with adding the user to the database."
    } else
        lblAdd.value = "Error: " + req.status
}
btnLoginReg.onclick = function() {
  ChangeForm(Login)
  }
/*
displayCustomers.onclick = function() {
    query = "SELECT * FROM user"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)
    console.log(req.status)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`the results are \n ${results}`)
        if (results.length == 0)
            lblAdd.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            lblAdd.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblAdd.value = "Error code: " + req.status
}
*/
