const express = require('express');
const Compte = express.Router();
const config = require('../ConfigureBd/db');
const sql = require('mssql');
const brypt = require('bcrypt');
var jwt = require("jsonwebtoken");
const jwt_secret = "hdhzfghzhgszghsbgshh5262626626JDHSG";

Compte.route('/all').get(async(req, res, next) => {
    const reponse =await sql.connect(config);
        const user =await sql.query('Select * From Client');
        const users = [];
        for (var i = 0; i <user.rowsAffected; i++) {
            users[i] = user.recordset[i];
            console.log(users[i])
        }
        res.json({
            users
        })

});
module.exports = Compte;