//const fs = require('fs');

let userNames = ["mreynolds", "zwashburne", "hwashburne", "jcobb", "kfrye"];

//fs.writeFile('users.txt', startingUsers);

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(userNames.length == 0){
        body.push("mreynolds", "zwashburne", "hwashburne", "jcobb", "kfrye");
    }

    if(url==="/"){
        res.write('<html>');
        res.write('<head><title>Greetings!</title></head>');
        res.write('<body style="font-family: sans-serif; line-height: 1.5em;"><h1>Greetings! Please enter your username.</h1><form action="/create-user" method="POST"><input name="username" type="text" placeholder="Alpha-numeric only." style="border-radius: 5px; margin: 1em; padding: .5em;"><button type="submit" style="font-family: sans-serif; padding: .5em; border-radius: 5px;">Submit</button></form><ul>');
        userNames.forEach(user => {res.write(`<li style="list-style-type: none;">${user}</li>`);});  
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url=== "/create-user" && method=== "POST"){
        const body = [];
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
            
            //return res.end();
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            userNames.push(user);
            console.log(userNames);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Prove01 - Nanci Newell</title></head>');
            res.write('<body style="font-family: sans-serif; line-height: 1.5em;"><h1>Users - Just parsed!</h1><ul>');
            userNames.forEach(user => {res.write(`<li style="list-style-type: none;">${user}</li>`);});
            res.write('</ul></body>');
            res.write('</html>');
            res.end();
            /*fs.writeFile('users.txt', users, err => {
                res.statusCode = 302; 
                res.setHeader("Location", "/");
                return res.end();
            });
        }); */       
    });
}
    if(url=== "/users"){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body style="font-family: sans-serif; line-height: 1.5em;"><h1>Users</h1><ul>');
        userNames.forEach(user => {
            res.write(`<li style="list-style-type: none;">${user}</li>`);
        });  
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();        
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Prove01 - Nanci Newell</title></head>');
    res.write('<body style="font-family: sans-serif; line-height: 1.5em;"><h1>Users</h1><ul>');
    userNames.forEach(user => {res.write(`<li style="list-style-type: none;">${user}</li>`);});
    res.write('</ul></body>');
    res.write('</html>');
    res.end();
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