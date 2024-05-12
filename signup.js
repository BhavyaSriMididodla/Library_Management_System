function generate() {
    var captcha = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      captcha += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    document.getElementById("image").innerHTML = captcha;
  }
  
  function printmsg(event) {
    event.preventDefault();
    var captcha = document.getElementById("image").innerHTML;
    var input = document.getElementById("submit").value;
    if (input == captcha) {
      console.log("Sign up successful!!!");
      document.getElementById("key").innerHTML = "Sign up successful!!!";
    } else {
      console.log("Captcha Incorrect!");
      document.getElementById("key").innerHTML = "Captcha Incorrect!";
    }
    document.getElementById("submit").value = "";
    generate();
  }
  