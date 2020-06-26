# Project

- Web app List of supermarket products
- allows you to add a supermarket list
- allows you to add products to the list, delete and update it, as to add an Image for each product

Usefull Information:
I decided to locate the add image functionality in the add product page,
once it makes more sense for my app, because the users will upload photos of their items / products.

#Knowing bugs

- the total price is not considering the quantity of products, it is just adding the price for one product
- I would like to add the code if quantity field > 0, multiply tprice (data) for quantity(data).
  I didnt get it working .
  
-I got the List With most items to output the title (name of the market list), but once there was no lists, it gave me the error "cannot recognize title"
So I commented out those lines (start.js) //listMostProducts:listMostProducts.title,  //listMostProducts:listMostProducts.title, 

- I tried to to the same to output the supermarket name, and it gave me the same error "name is unrecognized", when there was no lists there. 
( to solve this problem I tried to add an if statement ( no sucessfull), and a Try and catch error, even a helper), 
so I deleted the codes and I gave up 
hopefully I will get some half marks to have tried this functionality

Regards,
Kelly