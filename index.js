function sendMail(event)
{   
    event.preventDefault();
    var name=document.getElementById("name").value;
    // var number=document.getElementById("number").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    
    console.log("Form values ==> ", name, email, message);

    if(name.length>3 && isEmailValid(email)) {
        window.open("mailto:designsrapha@gmail.com?subject=feedback"+"&body="+message, "_blank");
        clearForm();
    }
    else {

    }

}

function isEmailValid(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g; 
    console.log(email.match(pattern) ?? false);
    return email.match(pattern) ?? false;
}

function clearForm()
{
    var name=document.getElementById("name").value=null;
    var email=document.getElementById("email").value=null;
    var message=document.getElementById("message").value=null;
}

