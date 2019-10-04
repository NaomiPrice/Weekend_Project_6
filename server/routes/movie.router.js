const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText).then((result)=>{
        //sends back the movie results in an object
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting movies', error);
        res.sendStatus(500);
    })
})//end GET route

module.exports = router;