"use strict";

var userNames = ["mreynolds", "zwashburne", "hwashburne", "jcobb", "kfrye"];
var firstNames = ["Malcom", "Zoe", "Hoburn", "Jayne", "Kaylee"];
var lastNames = ["Reynolds", "Washburne", "Washburne", "Cobb", "Frye"];

var requestHandler = function requestHandler(req, res) {
  var url = req.url;
  var method = req.method;
  /*if(userNames.length == 0){
      userNames.push("mreynolds", "zwashburne", "hwashburne", "jcobb", "kfrye");
  }*/

  if (url === "/") {
    res.write('<html>');
    res.write('<head><title>Greetings!</title></head>');
    res.write('<body style="font-family: sans-serif; line-height: 1.5em; margin-left: 1.5em;">' + '<h1 style="line-height: 1.75em;">Thanks for joining us!</h1>' + '<h2>Please enter your information below.</h2>' + '<form action="/create-user" method="POST" style="max-width: 350px;">' + '<fieldset style="max-width: 350px; border-radius: 5px; display: grid; grid-template-columns: 1fr 2fr; ">' + '<legend>Sign Up</legend>' + '<label for="firstname">First Name</label>' + '<input name="firstname" type="text" placeholder="Malcom" required title="Letters only please." style="border-radius: 5px; margin-bottom: 1em; padding: .5em;">' + '<label for="lastname">Last Name</label>' + '<input name="lastname" type="text" placeholder="Reynolds" required pattern="[A-Za-z]" title="Letters only please." style="border-radius: 5px; margin-bottom: 1em; padding: .5em;">' + '<label for="username">User Name</label>' + '<input name="username" type="text" placeholder="jdoe" required pattern="[A-Za-z0-9]+" title="Letters and numbers only please." style="border-radius: 5px; margin-bottom: 1em; padding: .5em;" pattern="[A-Za-z0-9]">' + '<br>' + '<button type="submit" style="font-family: sans-serif; padding: .5em; width: 100%; border-radius: 5px; ">Submit</button>' + '</fieldset></form>');
    /*+'<br><h2>Existing Users</h2>');
      res.write('<table><tr><th style="padding-right: .75em;">First Name</th><th style="padding-right: .75em;">Last Name</th><th style="padding-right: .75em;">Username</th></tr>');
    for(i=0; i<userNames.length; i++){
        res.write(`<tr><td>${firstNames[i]}</td>`);
        res.write(`<td>${lastNames[i]}</td>`);
        res.write(`<td>${userNames[i]}</td></tr>`);
    }
          res.write('</table></body>');*/

    res.write('</body></html>');
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    var body = [];
    req.on('data', function (chunk) {
      body.push(chunk);
    });
    return req.on('end', function () {
      var parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      var userInfo = parsedBody.split("&");
      var fName = userInfo[0].split("=")[1];
      var lName = userInfo[1].split("=")[1];
      var uName = userInfo[2].split("=")[1];
      console.log(fName, lName, uName);
      firstNames.push(fName);
      lastNames.push(lName);
      userNames.push(uName);
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Prove01 - Nanci Newell</title></head>');
      res.write("<body style='font-family: sans-serif; line-height: 1.5em;'><h1 style='line-height: 1.75em; margin-left: 1.5em;'>Welcome, ".concat(fName, "!</h1>"));
      res.write('<table style="margin-left: 1.5em;"><tr><th style="padding-right: .75em;">First Name</th><th style="padding-right: .75em;">Last Name</th><th style="padding-right: .75em;">Username</th></tr>');
      res.write("<tr><td>".concat(fName, "</td><td>").concat(lName, "</td><td>").concat(uName, "</td></tr>"));
      res.write('</table></body>');
      res.write('</html>');
      res.end();
    });
  }

  if (url === "/users") {
    listUsers(res, "Users");
    return res.end();
  }

  listUsers(res, "That wasn't a valid route.");
  res.end();
};

function listUsers(res, h1) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Prove01 - Nanci Newell</title></head>');
  res.write("<body style='font-family: sans-serif; line-height: 1.5em;'><h1 style='line-height: 1.75em; margin-left: 1.5em;'>".concat(h1, "</h1>"));
  res.write('<table style="margin-left: 1.5em;"><tr><th style="padding-right: .75em;">First Name</th><th style="padding-right: .75em;">Last Name</th><th style="padding-right: .75em;">Username</th></tr>');

  for (i = 0; i < userNames.length; i++) {
    res.write("<tr><td>".concat(firstNames[i], "</td>"));
    res.write("<td>".concat(lastNames[i], "</td>"));
    res.write("<td>".concat(userNames[i], "</td></tr>"));
  }

  res.write('</table></body>');
  res.write('</html>');
}

module.exports = requestHandler; //Now can require requestHandler on server.js

/*Could create an object
module.exports = {
    handler: requestHandler,
    someText: "Now I'm exporting multiple things at once."

    Be sure to access the appropriate property when calling on the imported file. IE: routes.handler or routes.someText

    You could also create: 
    module.exports.handler = requestHandler;
    module.exports.someText = "I'm still exporting multiple things at once."

    And if you want to save some keystrokes, you can omit module.
    exports.handler = requestHandler;
    exports.someText = "And I'm still exporting multiple things at once."
}*/