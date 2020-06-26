/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello, From Kelly Assignment for Web App Development");

function likeIt(){
  alert('Thank you, we are allways thinking in make the best for you!');
}

function showHide() {
  var readMoreDiv = document.getElementById("readmore");
  readMoreDiv.style.color = "green";
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none";
  } else {
    readMoreDiv.style.display = "block";
  }
}

function welcomeUser() {
  var video = document.getElementById("iframe") ;
  var username = prompt("What's your name?");
  var welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ', I am here to help you! , you can create a new list clicking on market Lists, once  it is done ' + username + ', you can add products to it clicking in add new product! Watch the video bellow for a tutorial and Have Fun!</p>';
 
  welcomeUserDiv.style.cursor = "pointer";
}

function hideWelcome() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if (welcomeUserDiv.style.display === "block") {
    welcomeUserDiv.style.display = "none";
  }
}

function playVideo(){
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if (welcomeUserDiv.style.diplay ==="block"){
    
    //play video id = video
  }
  
  
  
  ///
  

 
  
}

function getRating() {
  let userRating = parseInt(prompt("Is this Market List a great way of saving money? rate it typing from 1 to 5 stars"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("Try again with a number between 1 and 5!");
  }
  else{
    $("#rating").html("You gave a rating of: ");
    for (let i=0; i < userRating; i++){
        $("#rating").append("<i class='yellow star icon'></i>");
    }
  }
}

function getRatingProduct() {
  let userRating = parseInt(prompt("Like this product? rate it typing from 1 to 5 stars"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("Try again with a number between 1 and 5!");
  }
  else{
    $("#ratingProduct").html("You gave a rating of: ");
    for (let i=0; i < userRating; i++){
        $("#ratingProduct").append("<i class='yellow star icon'></i>");
    }
  }
}




$('#total').on('focus', function() {
  let totalp= $('#quantity').val() * $('#price').val();
  $(this).val(formatCurrency(totalp));
})

function formatCurrency(total) {
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
	}