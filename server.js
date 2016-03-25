var app = require("./app"),
    db = require('./db');
db().then(function(){
    console.log("db is connected...");
    app.listen(process.env.PORT || 3000, function(){
        console.log('Server is connected...');    
    });
})
