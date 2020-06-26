'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();
const accounts = require ('./controllers/accounts.js');

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const mlist = require('./controllers/mlist.js');


// connect routes to controllers

router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/mlist/:id', mlist.index);

router.get('/mlist/:id/deleteProduct/:productid', mlist.deleteProduct);
router.post('/mlist/:id/addproduct', mlist.addProduct);

router.get('/dashboard/deletemlist/:id', dashboard.deleteMlist);
router.post('/dashboard/addmlist', dashboard.addMlist);



router.post('/mlist/:id/updateproduct/:productid', mlist.updateProduct);
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.post('/addcomment', about.addComment);


// export router module
module.exports = router;

