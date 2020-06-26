// use javascript in strict mode
'use strict';

// import all required modules
const express = require("express");
const logger = require('./utils/logger');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
// initialise project
const app = express();


// static files output to public folder
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(fileUpload());

// use handlebars as view engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    tprice: function(qty, price) {
      let total = qty*price;
    total = total.toString().replace(/\u20ac|\,/g,'');
    if(isNaN(total))
    {total = "0";}
    let sign = (total == (total = Math.abs(total)));
    total = total.toFixed(2);
    let elements= total.split(".");
    total = elements[0];
    let cents = elements[1];
    for (var i = 0; i < Math.floor((total.length-(1+i))/3); i++)
     {total = total.substring(0,total.length-(4*i+3))+','+
      total.substring(total.length-(4*0+3));
     }
    return (((sign)?'':'-') + '\u20ac' + total + '.' + cents)
  
},
    
   
    uppercase: function(word) {
        return word.toUpperCase();
    },
    
    capitalise: function(word) {
        let capitaliseWord = word[0].toUpperCase()+ word.slice(1);
      return capitaliseWord;
    },
     formatDate: function(date) {
        let d = new Date(date);
        let dateNum = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        let day = d.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed","Thu","Fri","Sat"];
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
       let dayname= days[day];
        let monthname = months[month];
        return dayname + " " + monthname + " " + dateNum + ", " + year;
      }
 
    
	}
  
}));
app.set('view engine', '.hbs');

// import routes file and use this for routing
const routes = require('./routes');
app.use('/', routes);

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});