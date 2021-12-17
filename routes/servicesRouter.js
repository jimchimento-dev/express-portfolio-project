const express = require('express');
const servicesRouter = express.Router();

servicesRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('Will send service types to you');
    })

    .post((req, res) => {
        res.end(`Will add the service: ${req.body.name} with description: ${req.body.description} to your cart.`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /service');
    })

    .delete((req, res) => {
        res.end('Removing service from your cart.');
    });

module.exports = servicesRouter;