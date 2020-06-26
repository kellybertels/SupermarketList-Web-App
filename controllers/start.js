'use strict';

// import all required modules
const logger = require('../utils/logger');
const listApp = require('../models/list-store.js');
const accounts = require ('./accounts.js');
const User = require('../models/user-store.js');


//const listCollections = require('../models/list-store.json')

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if(loggedInUser){ 
      // app statistics calculations    
    const lists = listApp.getUserList(loggedInUser.id);
    const users = User.getAllUsers();
 
   const sup = listApp.getUserSupermarket();
      
    //const online= accounts.calculateonlineUser(request);
   
      
    //let p = listCollections.products.price    
    let numMlists = lists.length;    
    let numProducts = 0;
    let numMember = users.length; 
      
   
     
   
    //let numOnline = online.length;
    
    
      //calculation for users 
    // const AAA = User.getAllUsers();
   // let totalUsers = 0;
    //for (let i = 0; i < AAA.length; i++) {
   //   totalUsers = totalUsers + AAA[i].users.length;
   // }
      
      
      
    //let tprice= listCollections.products.price.value;
      
       //calculation to add the price of products
   /*   
     let tprice =0;
    for (let i in lists) {
      numProducts = numProducts + lists[i].products.length;
      for(let p in lists[i].products){
        logger.info(lists[i].products[p]);
        tprice = tprice + parseInt(lists[i].products[p].price);
      }
    }
      
      */
      
      
       //calculation to add the price 
       let tprice =0;
      //let quantity =0;
    for (let i in lists) {
      numProducts = numProducts + lists[i].products.length;
      for(let p in lists[i].products){
        logger.info(lists[i].products[p]);
        tprice = tprice + parseInt(lists[i].products[p].price);
      }    
    }
      
     
      
      //calculation to get the List with most products
    
    const mL = listApp.getUserList(loggedInUser.id);      
      
      console.log("user mL "+mL[0]);
    let numUserLists = mL.length;
       console.log("num user mL "+ numUserLists);
    let numItems = 0;
    for(let i in mL){
      numItems = numItems + mL[i].products.length;
    }
      
       let listMostProducts = mL[0];
    for(let i in mL){
      if(mL[i].products.length > listMostProducts.products.length){
        listMostProducts = mL[i];
        
        
        console.log("List with most items = " + listMostProducts);
       //  console.log("List with most items = " + listMostProducts.title);
      }
    
    }
      
      
     
    
      
      
      
      
      
   
      //calculation to show supermarket name buy most:
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Kelly Supermarket List - App',
      totallists: numMlists,
      totalProducts: numProducts,
      totalprice:tprice,
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
      totalUsers: numMember,
      
      listMostProducts:listMostProducts,
       //listMostProducts:listMostProducts.title,
      
    
      
      //totalOnline: numOnline,
     // totalUsers:AAA,
     
  
       };

      response.render('start', viewData);
    }
    else response.redirect('/');
  },
   
};

// export the start module
module.exports = start;





