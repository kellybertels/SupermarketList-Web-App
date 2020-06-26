'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const cloudinary = require('cloudinary');
const logger = require('../utils/logger');

try {
  const env = require('../.data/.env.json');
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}

const listApp = {

  store: new JsonStore('./models/list-store.json', { listCollection: [] }),
  collection: 'listCollection',

  getAllMlists() {
    return this.store.findAll(this.collection);
  },
  
  getAllProductPrice(id, price){
   
    this.store.sum(this.collection, price);
  },
  
  
  
  

  getMlist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
  

  addMlist(mlist) {
    this.store.add(this.collection, mlist);
  },

  removeMlist(id) {
    const mlist = this.getMlist(id);
    this.store.remove(this.collection, mlist);
  },

  removeAllMlists() {
    this.store.removeAll(this.collection);
  },

  addProduct(id, product) {
    const mlist = this.getMlist(id);
    mlist.products.push(product);
  },
  
   addProduct(id, product, response) {
    product.picture.mv('tempimage', err => {
        if (!err) {
          cloudinary.uploader.upload('tempimage', result => {
            console.log(result);
            product.picture = result.url;
            response();
          });
        }
      });
     const mlist = this.getMlist(id);
    mlist.products.push(product);
    
  },
  
  

  removeProduct(id, productId) {
    const mlist = this.getMlist(id);
    const products = mlist.products;
    _.remove(products, { id: productId});
  },
  
  editProduct(id, productId, updatedProduct) {
    const mlist = this.getMlist(id);
    const products =mlist.products;
    const index = products.findIndex(product => product.id === productId);
    products[index].title = updatedProduct.title;    
    products[index].quantity=updatedProduct.quantity;   
    products[index].price = updatedProduct.price;
    products[index].total = updatedProduct.total;
  },
    getUserPlaylists(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  getUserSupermarket(userid) {
    return this.store.findBy(this.location, { userid: userid });
  },
  
  
   getUserList(userid){
    return this.store.findBy(this.collection,{userid: userid});
  },
  
  
   
  
  
};

module.exports = listApp;