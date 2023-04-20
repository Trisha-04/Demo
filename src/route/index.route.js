const express = require ("express");
const router = express.router();
let routes = (app)=> {
    app.use("/",router);
}
module.exports = routes;