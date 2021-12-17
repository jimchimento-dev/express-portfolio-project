const express = require('express');
const shopRouter = express.Router();

shopRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('Will send all the shop items to you');
    })

    .post((req, res) => {
        res.end(`Will add shop item: ${req.body.name} with description: ${req.body.description} to your cart`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /shop');
    })

    .delete((req, res) => {
        res.end('Removing shop item from your cart');
    });

module.exports = shopRouter;