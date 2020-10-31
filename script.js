const number = 1;
const string = "HEllo";
const bool = 0;
const array = [1, 2, 3, 4];
const object = {
    name: "Object",
    age: 13,
    height: 170
};
array.push(5);
array.pop();

function greetUser(user) {
    console.log("Hello ", user.name)
    if(user.age > 16){
        console.log("You are older than 16!");
    }else if(user.age > 13){
        console.log("You are older than 13!");
    }else{
        console.log("You are younger than 13!")
    }
}

const user1 = {
    name: "John",
    age: 18
}
const user2 = {
    name: "Ann",
    age: 14
}
const user3 = {
    name: "Mark",
    age: 12
}

greetUser(user1);
greetUser(user2);
greetUser(user3);

const mainHeading = document.querySelector(".main-heading");
const games = document.querySelectorAll(".game")

mainHeading.style.fontSize = "50px";


for(index in games){
    console.log(index);
    console.log(games[index]);  
}

for(let i = 0; i < 10; i = i+2){
    console.log(i);
}

const footerImage = document.querySelector(".footer-image");
footerImage.setAttribute("src" , "https://cdn.shopify.com/s/files/1/0762/1493/products/Screen_Armor_for_Switch_Lite_2_1024x1024.png?v=1566855841");
console.log(footerImage.getAttribute("src"));

const toogle = document.querySelector(".plain-button");
const secondaryText = document.querySelector(".secondary-text");

toogle.addEventListener("click" , function(){
  if(secondaryText.style.display == "none"){
      toogle.innerHTML = "Show less";
      secondaryText.style.display  = "block";
  }else{
      toogle.innerHTML = "Show more";
      secondaryText.style.display  = "none";
  }


})

const form = document.querySelector(".request");

form.addEventListener("submit", function(){
    form.reset();
})

const wishlistButtons = document.querySelectorAll(".wishlist-button");

for(wishlistButton of wishlistButtons){
    console.log(wishlistButton);
  wishlistButton.addEventListener("click", function(){
      if(this.getAttribute("src") == "img/empty-star.png"){
          console.log("Button changed");
          this.setAttribute("src", "img/star.png");
        }else{
            console.log("Button changed again");
            this.setAttribute("src", "img/empty-star.png");

      }
  })

  const cart = document.querySelector(".cart");
  const order = document.querySelector(".carret");
  const body = document.querySelector("body");
  const container = document.querySelector(".container");
  
  cart.addEventListener("click", function(){
         console.log("Visible");
         order.style.display =  "flex";
         body.style.overflow = "hidden";
         container.style.background = "rgba(0, 0, 0, 0.3)";
         container.style.opacity = "0.7";
  })

  order.addEventListener("click", function(){
    console.log("Invisible");
    order.style.display =  "none";
    body.style.overflow = "visible";
    container.style.background = "none";
         container.style.opacity = "1";
})
}