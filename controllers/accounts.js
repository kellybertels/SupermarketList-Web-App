'use strict';

const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');
const reviews = require('../models/comment-store.js');
const listApp = require('../models/list-store.js');

const accounts = {

  index(request, response) {
    logger.info('index rendering');

   
      const users = userstore.getAllUsers();
    let numMember = users.length; 
    const comments =reviews.getAllComments();
    let totalReviews= comments.length;
    
    
    const lists = listApp.getAllMlists();
    let numMlists = lists.length; 
    
    
      let numProducts = 0;
    for (let i in lists) {
      numProducts = numProducts + lists[i].products.length;}

    const viewData = {
      totalUsers: numMember,
      totalReviews:totalReviews,
      totallists: numMlists,
      totalProducts: numProducts,

    };
    
    
    response.render('index', viewData);
  },
  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('mlist', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const user = request.body;
    user.id = uuid();
    user.picture = request.files.picture;
    userstore.addUser(user, function(){
    logger.info('registering' + user.email);
    response.redirect('/');
    });
  },

  authenticate(request, response) {
    const user = userstore.getUserByEmail(request.body.email);
    if (user && request.body.password === user.password) {
      response.cookie('mlist', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    } else {
      response.redirect('/login');
    }
  },

  getCurrentUser (request) {
    const userEmail = request.cookies.mlist;
    return userstore.getUserByEmail(userEmail);
  },
  

  
}

module.exports = accounts;