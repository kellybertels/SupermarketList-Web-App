'use strict';

// import all required modules
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const developerStore = require('../models/developer-store.js');
const Com = require('../models/comment-store');





// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request); 
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        developers: developerStore.getAllDevelopers(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
        comments: Com.getAllComments()
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },
  
  
  //add a coment method
   addComment(request, response, date) {
    const loggedInUser = accounts.getCurrentUser(request); 
    const comment = request.body.comment;
    logger.info('we received your comment' + comment);
    const newC = {
      commenttext: comment,
      date: new Date(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
      
      
    };
    Com.addComment(newC);
    response.redirect ('/about');
}
  
  
  
  
  
  
  
  
};


// export the about module
module.exports = about;