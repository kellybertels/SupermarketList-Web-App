'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const listApp = require('../models/list-store');
const accounts = require ('./accounts.js');

const mlist = {
  index(request, response) {
    
          const loggedInUser = accounts.getCurrentUser(request);     
          const mlistId = request.params.id;
          logger.debug('Marketlist id = ' + mlistId);
       if (loggedInUser) {         
      const viewData = {
      title: 'My Products',
      mlist: listApp.getMlist(mlistId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
        
    };
    response.render('mlist', viewData);
    }
    else response.redirect('/');
},
    
    
    
    
    deleteProduct(request, response) {
    const mlistId = request.params.id;
    const productId = request.params.productid;
    logger.debug(`Deleting Product ${productId} from Mlist ${mlistId}`);
    listApp.removeProduct(mlistId, productId);
    response.redirect('/mlist/' + mlistId);
  },
    addProduct(request, response) {
    const mlistId = request.params.id;
    const mlist = listApp.getMlist(mlistId);
    const newProduct = {
      id: uuid(),
      title: request.body.title,
      quantity: request.body.quantity,      
      price: request.body.price,      
     total: parseInt(request.body.quantity)*parseInt(request.body.price),
      picture:request.files.picture
    };
    listApp.addProduct(mlistId, newProduct, function(){
        response.redirect('/mlist/' + mlistId);      
    });  
  },  
  updateProduct(request, response) {
    const mlistId = request.params.id;
    const productId = request.params.productid;
    logger.debug("updating Product " + productId);
    const updatedProduct = {
      title: request.body.title,
      quantity: request.body.quantity,      
      price: request.body.price,
      total: request.body.total,
    };
    listApp.editProduct(mlistId, productId, updatedProduct);
    response.redirect('/mlist/' + mlistId);
  }
  
  
  
  
  
};

module.exports = mlist;