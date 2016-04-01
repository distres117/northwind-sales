var mongoose = require('mongoose'),
    conn;
    
module.exports = function(){
    if (!conn)
        conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/northwind-sales', function(err){
            if (err)
                console.log("Db error:", err); 
        });
    return conn;
};
