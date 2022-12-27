const express = require('express');
const childrenRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

// GET(read)
childrenRouter.get('/', (req, res) => {
    console.log('GET childrenRouter');

    let sqlQuery = `
    SELECT * FROM "children"
        ORDER BY "id";
    `
    // send query
    pool.query(sqlQuery)
        // wait for response from database
        .then((dbRes) => {
            // send back array of children objects if successful
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.log('Error childrenRouter GET!', dbErr);
            res.sendStatus(500);
        })
})

// POST(create)
childrenRouter.post('/', (req, res) => {
    let newChild = req.body;
    console.log('POST childrenRouter', newChild);

    let sqlQuery = `
    INSERT INTO "children" ("name", "gift", "naughty_or_nice", "notes")
        VALUES ($1, $2, $3, $4);
    `
    // objects are shipped around in arrays
    let sqlValues = [newChild.name, newChild.gift, newChild.naughty_or_nice, newChild.notes];
    // use pg to send query and array of objects(data) to database
    pool.query(sqlQuery, sqlValues)
        // send "Created" status if successful
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log('Error childrenRouter POST!', dbErr);
        })
})

// DELETE(delete)

// PUT(update)

module.exports = childrenRouter;