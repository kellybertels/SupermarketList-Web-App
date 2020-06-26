# The Project

This is a college project from my 4th semester, 
I adapted the teachers exercises to create my own Web App. 

The languages used here are:

-Javascript
-Json
-Handlebars
-Semantic UI
-HTML
-CSS

The editor I used here was Glitch.com, recomended from the teachers to be used because it allows them easily help us remotely as weell for us to keep tracking of our progress and save previous versions of our project, in case something goes wrong.  


# Features
- this Web app is an organization app where the user can create a list of supermarket products
- helps the user to save money
- allows you to add a supermarket list
- allows you to add products to the list, delete and update it, as to add an Image for each product


Usefull Information:
You need to Sign In before you Log in, as authentication is used, you will not be allowed to proceed without an profile image. 
I decided to locate the add image functionality in the add product page,
once it makes more sense for my app, because the users will upload photos of their items / products, this helps the user to identify your favorite coffe brand without expending time adding brand name and another details. 

#Knowing bugs

- the total price is not considering the quantity of products, it is just adding the price for one product
- I would like to add the code if quantity field > 0, multiply tprice (data) for quantity(data).
  I didnt get it working .
  
-I got the List With most items to output the title (name of the market list), but once there was no lists, it gave me the error "cannot recognize title"
So I commented out those lines (start.js) //listMostProducts:listMostProducts.title,  //listMostProducts:listMostProducts.title, 

- I tried to to the same to output the supermarket name, and it gave me the same error "name is unrecognized", when there was no lists there. 
( to solve this problem I tried to add an if statement ( no sucessfull), and a Try and catch error, even a helper), 
so I deleted the codes and I gave up, you might find some "commented out" code about this try. 

#Points to future improve
-The sharing functionality, so this will allow the person to share with the household the supermarket list, as well social care workers, to share with their patients allowing them to increase their independancy. 
-make it easier to use and more intuitive, testings showed that some people do not click on the icon links but in the images or section, hoping this will open the another page for them. 



Regards,
Kelly

my glitch profile is https://glitch.com/@kellybertels  - feel free to explore. 


