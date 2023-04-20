const app = require("./api_config/express");
app.listen(8800,()=>{
    console.log("Server started on port 8800");
});

module.exports = app;