exports.handler = function(event, context, callback) {
    console.log("Yeas");
    
    callback(null, {"message": "Successfully executed"});
}