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
            console.log('Error getting "children"!', dbErr);
            res.sendStatus(500);
        })
})

// POST(create)

// DELETE(delete)

// PUT(update)

module.exports = childrenRouter;