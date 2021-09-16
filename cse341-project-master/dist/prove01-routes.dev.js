"use strict";

var userNames = [];

var requestHandler = function requestHandler(req, res) {
  var url = req.url;
  var method = req.method;

  if (userNames.length == 0) {
    userNames.push("mreynolds", "zwashburne", "hwashburne", "jcobb", "kfrye");
  }

  if (url === "/") {
    res.write('<html>');
    res.write('<head><title>Greetings!</title></head>');
    res.write('<body style="font-family: sans-serif; line-height: 1.5em;"><h1 style="line-height: 1.75em;">Greetings! Please enter your username.</h1><form action="/create-user" method="POST"><input name="username" type="text" placeholder="Alpha-numeric only." style="border-radius: 5px; margin: 1em; padding: .5em;"><button type="submit" style="font-family: sans-serif; padding: .5em; border-radius: 5px;">Submit</button></form><ul>');
    userNames.forEach(function (user) {
      res.write("<li style=\"list-style-type: none;\">".concat(user, "</li>"));
    });
    res.write('</ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    var body = [];
    req.on('data', function (chunk) {
      body.push(chunk);
    });
    return req.on('end', function () {
      var parsedBody = Buffer.concat(body).toString();
      var user = parsedBody.split('=')[1];
      userNames.push(user);
      listUsers(res, "Users");
      res.end();
    });
  }

  if (url === "/users") {
    listUsers(res, "Users");
    return res.end();
  }

  listUsers(res, "That wasn't a valid route, but you can see the users here.");
  res.end();
};

function listUsers(res, h1) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Prove01 - Nanci Newell</title></head>');
  res.write("<body style='font-family: sans-serif; line-height: 1.5em;'><h1 style='line-height: 1.75em;'>".concat(h1, "</h1><ul>"));
  userNames.forEach(function (user) {
    res.write("<li style=\"list-style-type: none;\">".concat(user, "</li>"));
  });
  res.write('</ul></body>');
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