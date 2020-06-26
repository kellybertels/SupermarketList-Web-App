'use strict';

// import all required modules
const logger = require('../utils/logger');
const accounts = require ('./accounts.js');
const User = require('../models/user-store.js');

const reviews = require('../models/comment-store.js');

'use strict';

const index = {
  index(request, response) {
    logger.info('index rendering');

   
    const users = User.getAllUsers();
    const comments =reviews.getAllComments();
               
   
    
    let numMember = users.length; 
    let totalReviews= comments.length;
   
    const viewData = {
      totalUsers: numMember,
      totalReviews:totalReviews,  
      
    };    
    response.render('index', viewData);
  },
 
};

 module.exports = index; 