const express = require('express');
const AuthRoute = express.Router();
const config = require('../ConfigureBd/db');
const sql=require('mssql');
const brypt=require('bcrypt');
const session=require('express-session');
const flash=require('express-flash');
let envoi;
AuthRoute.route('').get((req,res,next)=>{
    sql.connect(config).then(()=>{
        return sql.query('Select * From UserDepot');
    }).then(result => {
        res.json(result)
    })

  
});
AuthRoute.route('/getUser').get((req,res,next)=>{
    sql.connect(config).then(()=>{
        return sql.query('Select * From Client');
    }).then(result => {
        res.json({
            result:result.recordset
        })
        //console.log(result.recordset[6].password)
        
        
    })

  
});
AuthRoute.route('/getUsr').get(async(req,res)=>{
    try{
        const hash= await brypt.hash('ozozo',10)
        console.log(hash)

    }catch{
        console.log('PLus')

    }

});

AuthRoute.route('/inscriptionCommercial').post(async(req,res)=>{
    try{
        sql.connect(config).then(()=>{
            let salt=brypt.genSaltSync(10)
            let hash=brypt.hashSync(req.body.password,salt)
            return sql.query("INSERT INTO Commercial VALUES('"+req.body.nom+"','"+req.body.prenom+"','"+req.body.codecommercial+"','"+hash+"')");
        }).then(result => {
            res.json({
                user:result
            })
        })
    }catch(error)
    {
        console.log('PLus')

    }
});


AuthRoute.route('/deconnection').post((req,res,next)=>{
    sql.connect(config).then(()=>{
        let salt=brypt.genSaltSync(10)
        let hash=brypt.hashSync(req.body.password,salt)
        return sql.query("INSERT INTO Commercial VALUES('"+req.body.nom+"','"+req.body.prenom+"','"+req.body.codecommercial+"','"+hash+"')");
    }).then(result => {
        res.json({
            user:result
        })
    })

});

AuthRoute.route('/inscriptionClient').post(async(req,res)=>{
    try{
        sql.connect(config).then(()=>{
            let salt=brypt.genSaltSync(10)
            let hash=brypt.hashSync(req.body.password,salt)
            return sql.query("INSERT INTO Client VALUES('"+req.body.nom+"','"+req.body.prenom+"','"+req.body.codecommercial+"','"+req.body.codeclient+"','"+req.body.categorie+"','"+hash+"')");
        }).then(result => {
            res.json(result)
        })

    }catch{
        console.log('Erreur')

    }
    
});
AuthRoute.route('/login').post(async(req,res)=>{
    try{
        sql.connect(config).then(()=>{
            sql.query("SELECT password From Client where nom='"+req.body.Username+"'").then(pwd=>{
            var data=pwd.recordset[0].password
            console.log(data)
            var reponse=brypt.compareSync(req.body.password,data);   
            return reponse;
            }).then(resultat => {
                res.json(resultat)
                if(resultat==true)
                {
                   envoi=true;
                   console.log(envoi)
                }
                else{
                    envoi=false;
                    console.log(envoi)

                }
                console.log(resultat)
        });
           });
}catch(error)
    {
        console.log('Erreur')

    }
})

AuthRoute.route('/login').get(async(req,res)=>{
    try{
        res.json(envoi)
        console.log('envoie',envoi)

}catch(error)
    {
        console.log('Erreur')

    }
})

module.exports=AuthRoute;


