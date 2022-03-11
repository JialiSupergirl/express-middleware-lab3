const express = require('express');


let = (req, res, next) => {

    //console.log(req);
    req.username = req.query.uname.trim().toLowerCase();
    // req.bob = "bob";
    next();

};


module.exports = userName;