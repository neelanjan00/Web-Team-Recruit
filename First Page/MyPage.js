function submit()
{
    var pass = document.getElementById("password").value();
    var rpass = document.getElementById("rpassword").value();

    if(pass != rpass)
    {
        alert("Type the password correctly!");
        return false;
    }

    return true;
}