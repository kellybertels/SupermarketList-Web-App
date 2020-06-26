'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');
const accounts = require ('./accounts.js');
const listApp = require('../models/list-store.js');
// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'SuperMarket List Dashboard',
      mlists: listApp.getUserPlaylists(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
    };
    logger.info('about to render' + viewData.lists);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  
  deleteMlist(request, response) {
    const mlistId = request.params.id;
    logger.debug(`Deleting Market list ${mlistId}`);
    listApp.removeMlist(mlistId);
    response.redirect('/dashboard');
  },
  
  addMlist(request, response) {
    const date = new Date();
    const loggedInUser = accounts.getCurrentUser(request);
    const newMList = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      name:request.body.name,
      location:request.body.location,
      date: date,
      
      products: [],
    };
    listApp.addMlist(newMList);
    response.redirect('/dashboard');
  },
  


  
  
  
};

// export the dashboard module
module.exports = dashboard;