/* eslint-disable no-inner-declarations */
'use strict';


let path = window.location.pathname;
let page = path.split('/').pop();
console.log( page );

// Movies Constructor

let moviesArray = [];
let favorite = [];


//EDIT >> ADD PRICE
function Movie(id, img, movieName, genre, rating,price){
  this.img = img;
  this.movieName = movieName;
  this.rating= rating;
  this.genre = genre;
  this.fav;
  this.description;
  this.id = id;
  this.price=price;

  moviesArray.push(this);

}

// Create Movies

function generateMovies(){
  new Movie(0, 'img/Action/Bloodshot.jpg','Bloodshot', 'Action', '5.7','5.7 $');
  new Movie(1, 'img/Action/Fury.jpg', 'Fury', 'Action', '7.6','5.7 $');
  new Movie(2, 'img/Action/Gemini Man.jpg', 'Gemini Man', 'Action', '5.7','5.7 $');
  new Movie(3, 'img/Action/Godzilla vs Kong.jpg', 'Godzilla vs Kong' ,'Action', '6.4','5.7 $');
  new Movie(4, 'img/Action/John Wick.jpg', 'John Wick','Action', '7.4','5.7 $');
  new Movie(5, 'img/Action/Maze Runner.jpg', 'Maze Runner','Action', '6.8','5.7 $');
  new Movie(6, 'img/Action/Spenser Confidential.jpg', 'Spenser Confidential','Action', '6.2','5.7 $');
  new Movie(7, 'img/Action/The Dark Tower.jpg', 'The Dark Tower','Action', '5.6','5.7 $');
  new Movie(8, 'img/Action/The Tomorrow War.jpg', 'The Tomorrow War','Action', '6.7','5.7 $');
  new Movie(9, 'img/Action/Without Remorse.jpg', 'Without Remorse' ,'Action', '5.8','5.7 $');
  new Movie(10, 'img/Comedy/Cats and Dogs.jpg', 'Cats and Dogs', 'Comedy', '5.1','10 $');
  new Movie(11, 'img/Comedy/Game Night.jpg', 'Game Night', 'Comedy', '6.9','10 $');
  new Movie(12, 'img/Comedy/Get Hard.jpg', 'Get Hard', 'Comedy', '6','10 $');
  new Movie(13, 'img/Comedy/Hangover.jpg', 'Hangover', 'Comedy', '7.7','10 $');
  new Movie(14, 'img/Comedy/Instant Family.jpg', 'Instant Family', 'Comedy', '7.3','10 $');
  new Movie(15, 'img/Comedy/Jumanji.jpg', 'Jumanji', 'Comedy', '7','10 $');
  new Movie(16, 'img/Comedy/Swiss Army Man.jpg', 'Swiss Army Man', 'Comedy', '7','10 $');
  new Movie(17, 'img/Comedy/The DDD.jpg', 'The Dead Don\'t Die', 'Comedy', '5.5','10 $');
  new Movie(18, 'img/Comedy/The Mitchells.jpg', 'The Mitchells', 'Comedy', '7.7','10 $');
  new Movie(19, 'img/Comedy/Zombieland.jpg', 'Zombieland', 'Comedy', '7.6','10 $');
  new Movie(20, 'img/Drama/Cast Away.jpg', 'Cast Away', 'Drama', '7.8','20 $');
  new Movie(21, 'img/Drama/Dunkirk.jpg', 'Dunkirk', 'Drama', '7.8','20 $');
  new Movie(22, 'img/Drama/Forrest Gump.jpg', 'Forrest Gump', 'Drama', '8.8','20 $');
  new Movie(23, 'img/Drama/Frozen.jpg', 'Frozen', 'Drama', '7.4','20 $');
  new Movie(24, 'img/Drama/Joker.jpg', 'Joker', 'Drama', '8.4','20 $');
  new Movie(25, 'img/Drama/Shutter Island.jpg', 'Shutter Island', 'Drama', '8.2','20 $');
  new Movie(26, 'img/Drama/Tenet.jpg', 'Tenet', 'Drama', '7.4','20 $');
  new Movie(27, 'img/Drama/The Hunter.jpg', 'The Hunter', 'Drama', '6.7','20 $');
  new Movie(28, 'img/Drama/The Revenant.jpg', 'The Revenant', 'Drama', '8','20 $');
  new Movie(29, 'img/Drama/The Terminal.jpg', 'The Terminal', 'Drama', '7.4','20 $');

}
generateMovies();


//Movies Description
// NEEDS REWORK >> BETTER LAYOUT

let movieDescription = [
  'Ray Garrison, a slain soldier, is re-animated with superpowers.',

  'A grizzled tank commander makes tough decisions as he and his crew fight.',

  'A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that he\'s being hunted by a younger clone of himself, Henry needs to find out why he\'s being targeted and who the creator is.',

  'Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans\' very origins and mankind\'s survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever',

  'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',

  'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.',

  'When two Boston police officers are murdered, ex-cop Spenser teams up with his no-nonsense roommate, Hawk, to take down criminals.',

  'A boy haunted by visions of a dark tower from a parallel reality teams up with the tower\'s disillusioned guardian to stop an evil warlock known as the Man in Black who plans to use the boy to destroy the tower and open the gates of Hell.',

  'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.',

  'An elite Navy SEAL, goes on a path to avenge his wife\'s murder only to find himself inside of a larger conspiracy.',

  'A look at the top-secret, high-tech espionage war going on between cats and dogs, of which their human owners are blissfully unaware.',

  'A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.',

  'When millionaire James King is jailed for fraud and bound for San Quentin, he turns to Darnell Lewis to prep him to go behind bars.',

  'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',

  'A couple find themselves in over their heads when they foster three children.',

  'When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.',

  'Hank, stranded on a deserted island and about to kill himself, notices a corpse washed up on the beach. He befriends it, naming it Manny, only to discover that his new friend can talk and has a myriad of supernatural abilities...which may help him get home.',

  'The peaceful town of Centerville finds itself battling a zombie horde as the dead start rising from their graves.',

  'A quirky, dysfunctional family\'s road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity\'s unlikeliest last hope.',

  'A shy student trying to reach his family in Ohio, a gun-toting bruiser in search or the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.',

  'A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.',

  'Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.',

  'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',

  'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',

  'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',

  'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',

  'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',

  'Martin, a mercenary, is sent from Europe by a mysterious biotech company to the Tasmanian wilderness on a hunt for the last Tasmanian tiger.',

  'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',

  'An Eastern European tourist unexpectedly finds himself stranded in JFK airport, and must take up temporary residence there.'
];




// Add Description
// NEEDS REWORK >> MORE ACCURATE
function description(){
  for (let i = 0; i<moviesArray.length; i++){
    moviesArray[i].description = movieDescription[i];
  }

}

description();



// Gen Random Number

function genRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Append to Slider Image

if(page == 'index.html'){
  function sliderFn(){

    let sliderWrapper = document.getElementsByClassName('swiper-wrapper')[0];
    let randomArray = [];
    for (let i = 0; i<15; i++){
      let randomNumber = genRandom(0, moviesArray.length);
      let swiperSlide = document.createElement('div');
      swiperSlide.setAttribute('class', 'swiper-slide');
      sliderWrapper.appendChild(swiperSlide);

      let sliderImg = document.createElement('div');
      sliderImg.setAttribute('class', 'slider-image');
      swiperSlide.appendChild(sliderImg);



      let randomImg = document.createElement('img');
      while (randomArray.includes(randomNumber)){
        randomNumber = genRandom(0, moviesArray.length);
      }
      randomArray.push(randomNumber);

      // randomImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');


      let movieData = document.createElement('div');
      movieData.className ='movieData';
      swiperSlide.appendChild(movieData);
      let movieDesc = document.createElement('div');
      movieDesc.className = 'movieDesc';
      movieData.appendChild(movieDesc);

      let movieAddToCart = document.createElement('button');
      movieAddToCart.className = 'addtocartbtn';
      movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
      movieData.appendChild(movieAddToCart);
      // movieAddToCart.className += ` purchasable ${moviesArray[randomNumber].id}`;

      //Add to Fav
      let movieAddToFav = document.createElement('button');
      movieAddToFav.className = 'addtofavbtn-slider';
if(localStorage.favorite.includes(moviesArray[randomNumber].id)){
        movieAddToFav.innerHTML = '<i class="fa fa-heart icon fav' + moviesArray[randomNumber].id + '"></i>';
      } else {
        movieAddToFav.innerHTML = '<i class="fa fa-heart-o icon fav' + moviesArray[randomNumber].id + '"></i>';

      }      movieData.appendChild(movieAddToFav);

      movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

      movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');




      movieDesc.textContent = moviesArray[randomNumber].description;

      randomImg.setAttribute('src', moviesArray[randomNumber].img);


      sliderImg.appendChild(randomImg);
    }
  }

  sliderFn();



  // Append to Top Rated

  function topRated(){

    let sliderWrapper = document.getElementsByClassName('swiper-wrapper')[1];
    let randomArray = [];
    for (let i = 0; i<6; i++){
      let randomNumber = genRandom(0, moviesArray.length);
      let swiperSlide = document.createElement('div');
      swiperSlide.setAttribute('class', 'swiper-slide');
      sliderWrapper.appendChild(swiperSlide);

      let sliderImg = document.createElement('div');
      sliderImg.setAttribute('class', 'slider-image imgswiper2');
      swiperSlide.appendChild(sliderImg);

      let randomImg = document.createElement('img');
      while (randomArray.includes(randomNumber) || parseFloat(moviesArray[randomNumber].rating) >= 6){
        randomNumber = genRandom(0, moviesArray.length);
      }
      randomArray.push(randomNumber);

      // randomImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');


      let movieData = document.createElement('div');
      movieData.className ='movieData';
      swiperSlide.appendChild(movieData);
      let movieDesc = document.createElement('div');
      movieDesc.className = 'movieDesc-rated';
      movieData.appendChild(movieDesc);

      let movieAddToCart = document.createElement('button');
      movieAddToCart.className = 'addtocartbtn';
      movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
      movieData.appendChild(movieAddToCart);
      // movieAddToCart.className += ` purchasable ${moviesArray[randomNumber].id}`;

      //Add to Fav
      let movieAddToFav = document.createElement('button');
      movieAddToFav.className = 'addtofavbtn-rated';
      movieAddToFav.innerHTML = '<i class="fas fa-heart icon"></i>';
      movieData.appendChild(movieAddToFav);

      movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

      movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');




      movieDesc.textContent = moviesArray[randomNumber].description;


      randomImg.setAttribute('src', moviesArray[randomNumber].img);
      sliderImg.appendChild(randomImg);
    }
  }

  topRated();




  // Append to Categories

  function actionImgs(){

    let randomArray = [];
    let actionCategory = document.getElementById('actionCategory');
    let actionDiv = document.createElement('div');
    actionCategory.appendChild(actionDiv);

    for (let i = 0; i < 5 ; i++){
      let randomNumber = genRandom(0, moviesArray.length);

      let actionImg = document.createElement('img');
      while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Action'){
        randomNumber = genRandom(0, moviesArray.length);

      }

      let movieCol = document.createElement('div');
      actionCategory.appendChild(movieCol);
      movieCol.className = 'col-20';
      randomArray.push(randomNumber);
      actionImg.setAttribute('src', moviesArray[randomNumber].img);
      // actionImg.className += `purchasable ${moviesArray[randomNumber].id}`;

      actionImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');


      let movieData = document.createElement('div');
      movieData.className ='cardData';

      let movieAddToCart = document.createElement('button');
      movieAddToCart.className = 'addtocartbtn';
      movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
      // movieAddToCart.className += ` purchasable ${moviesArray[randomNumber].id}`;

      //Add to Fav
      let movieAddToFav = document.createElement('button');
      movieAddToFav.className = 'addtofavbtn';

      if(localStorage.favorite.includes(moviesArray[randomNumber].id)){
        movieAddToFav.innerHTML = '<i class="fa fa-heart icon fav' + moviesArray[randomNumber].id + '"></i>';
      } else {
        movieAddToFav.innerHTML = '<i class="fa fa-heart-o icon fav' + moviesArray[randomNumber].id + '"></i>';

      }
      movieCol.appendChild(movieAddToFav);


      let h3 = document.createElement('h3');
      h3.className = 'movietitle';
      h3.setAttribute("onclick","prepareSwitch(" + moviesArray[randomNumber].id + ")");
      h3.style.cursor="pointer";
      h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);

      let genre = document.createElement('h4');
      genre.className = 'movieType';
      genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

      let rating = document.createElement('h4');
      rating.className = 'movieRating';
      rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');
     
      let priceTag=document.createElement('h4');
      priceTag.className='moviePrice';
      priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;

      movieCol.appendChild(priceTag);

      movieData.appendChild(h3);
      movieData.appendChild(genre);
      movieData.appendChild(rating);

      movieData.appendChild(movieAddToCart);


      movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

      movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');


      actionImg.setAttribute('width', 230);
      actionImg.setAttribute('height', 300);

      movieCol.appendChild(actionImg);

      movieCol.appendChild(movieData);



    }

  }

  function comedyImgs(){

    let randomArray = [];
    let comedyCategory = document.getElementById('comedyCategory');
    let comedyDiv = document.createElement('div');
    comedyCategory.appendChild(comedyDiv);

    for (let i = 0; i < 5 ; i++){
      let randomNumber = genRandom(0, moviesArray.length);

      let comedyImg = document.createElement('img');
      while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Comedy'){
        randomNumber = genRandom(0, moviesArray.length);
      }

      let movieCol = document.createElement('div');
      comedyCategory.appendChild(movieCol);
      movieCol.className = 'col-20';


      randomArray.push(randomNumber);
      comedyImg.setAttribute('src', moviesArray[randomNumber].img);
      // comedyImg.className += `purchasable ${moviesArray[randomNumber].id}`;


      comedyImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');

      let movieData = document.createElement('div');
      movieData.className ='cardData';

      let movieAddToCart = document.createElement('button');
      movieAddToCart.className = 'addtocartbtn';
      movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
      movieData.appendChild(movieAddToCart);
      // movieAddToCart.className += ` purchasable ${moviesArray[randomNumber].id}`;

      //Add to Fav
      let movieAddToFav = document.createElement('button');
      movieAddToFav.className = 'addtofavbtn';
      if(localStorage.favorite.includes(moviesArray[randomNumber].id)){
        movieAddToFav.innerHTML = '<i class="fa fa-heart icon fav' + moviesArray[randomNumber].id + '"></i>';
      } else {
        movieAddToFav.innerHTML = '<i class="fa fa-heart-o icon fav' + moviesArray[randomNumber].id + '"></i>';

      }      movieData.appendChild(movieAddToFav);



      movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

      movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');







      let h3 = document.createElement('h3');
      h3.className = 'movietitle';
      h3.setAttribute("onclick","prepareSwitch(" + moviesArray[randomNumber].id + ")");
      h3.style.cursor="pointer";
      h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);

      let genre = document.createElement('h4');
      genre.className = 'movieType';
      genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

      let rating = document.createElement('h4');
      rating.className = 'movieRating';
      rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');


      let priceTag=document.createElement('h4');
      priceTag.className='moviePrice';
      priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;

      



      movieData.appendChild(h3);
      movieData.appendChild(genre);
      movieData.appendChild(rating);
      movieData.appendChild(priceTag);

      movieData.appendChild(movieAddToCart);

      movieCol.appendChild(comedyImg);
      movieCol.append(movieData);

    }

  }

  function dramaImgs(){

    let randomArray = [];
    let dramaCategory = document.getElementById('dramaCategory');
    let dramaDiv = document.createElement('div');
    dramaCategory.appendChild(dramaDiv);

    for (let i = 0; i < 5 ; i++){
      let randomNumber = genRandom(0, moviesArray.length);

      let dramaImg = document.createElement('img');
      while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Drama'){
        randomNumber = genRandom(0, moviesArray.length);
      }

      let movieCol = document.createElement('div');
      dramaCategory.appendChild(movieCol);
      movieCol.className = 'col-20';


      randomArray.push(randomNumber);
      dramaImg.setAttribute('src', moviesArray[randomNumber].img);
      // dramaImg.className += `purchasable ${moviesArray[randomNumber].id}`;

      dramaImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');


      dramaImg.setAttribute('width', 230);
      dramaImg.setAttribute('height', 300);

      let movieData = document.createElement('div');
      movieData.className ='cardData';

      let movieAddToCart = document.createElement('button');
      movieAddToCart.className = 'addtocartbtn';
      movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
      movieData.appendChild(movieAddToCart);
      // movieAddToCart.className += ` purchasable ${moviesArray[randomNumber].id}`;

      //Add to Fav
      let movieAddToFav = document.createElement('button');
      movieAddToFav.className = 'addtofavbtn';
      if(localStorage.favorite.includes(moviesArray[randomNumber].id)){
        movieAddToFav.innerHTML = '<i class="fa fa-heart icon fav' + moviesArray[randomNumber].id + '"></i>';
      } else {
        movieAddToFav.innerHTML = '<i class="fa fa-heart-o icon fav' + moviesArray[randomNumber].id + '"></i>';

      }
      movieData.appendChild(movieAddToFav);

      movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

      movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');





      let h3 = document.createElement('h3');
      h3.className = 'movietitle';
      h3.setAttribute("onclick","prepareSwitch(" + moviesArray[randomNumber].id + ")");
      h3.style.cursor="pointer";
      h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);
      

      let genre = document.createElement('h4');
      genre.className = 'movieType';
      genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

      let rating = document.createElement('h4');
      rating.className = 'movieRating';
      rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');


      let priceTag=document.createElement('h4');
      priceTag.className='moviePrice';
      priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;



      movieData.appendChild(h3);
      movieData.appendChild(genre);
      movieData.appendChild(rating);
      movieData.appendChild(priceTag);

      movieData.appendChild(movieAddToCart);

      movieCol.appendChild(dramaImg);
      movieCol.append(movieData);

    }

  }


  actionImgs();
  comedyImgs();
  dramaImgs();

}



// Cart Constructor

function Cart(allMovies){
  //Contains all picked movies
  this.allMovies = allMovies;
}



// Save Cart in Local Storage

Cart.prototype.saveCart = function(){
  let currentCart = JSON.stringify(this.allMovies);
  localStorage.setItem('cart', currentCart);
};


let cart = new Cart([]);


// Add Movies to Cart

/* let purchasableEl = document.getElementsByClassName('purchasable');

for (let i = 0 ; i < purchasableEl.length ; i++){

  purchasableEl[i].addEventListener('click', addToCart);

} */

// ADD POP UP IF DUPLICATE
console.log(localStorage.cart);

if(typeof localStorage.cart !== 'undefined'){

  let strCart = localStorage.getItem('cart') || [];
  let objCart = JSON.parse(strCart);

  let sum = 0;
  let cartSum = document.getElementById('cartSum');
  if(objCart.length > 0){
    sum = objCart.length;

    cartSum.innerHTML = sum;
  }

  for(let i=0; i<objCart.length; i++){
    cart.allMovies.push(objCart[i]);
  }
}

if(typeof localStorage.favorite !== 'undefined'){

  let strFavt = localStorage.getItem('favorite') || [];
  let objFavt = JSON.parse(strFavt);

  let sum2 = 0;
  let favtSum = document.getElementById('favtSum');
  if(objFavt.length > 0){
    sum2 = objFavt.length;

    favtSum.innerHTML = sum2;
  }

  
}




console.log('All : ' + cart.allMovies);
function addToCart(id){
  //let selectedMovie =event.target;
  //console.log(typeof(selectedMovie));

  //let specificSelect = selectedMovie.className.split(' ')[2];
  let specificSelect =id;

  if(cart.allMovies.includes(specificSelect)){
    console.log('already exists');
    setTimeout(myFunction2(),1000);

  } else {

    console.log('new');
    console.log(specificSelect);
    cart.allMovies.push(specificSelect);
    cart.saveCart();
    console.log(cart);
    setTimeout(myFunction(),1000);
    document.getElementById('cartSum').textContent = cart.allMovies.length;


  }
}


function addToFav(id){

  let specificSelect =id;

  if(favorite.includes(specificSelect)){
    console.log('already exists');
    setTimeout(myFunction4(),1000);

    

  } else {

    let strFav = localStorage.getItem('favorite') || [];
    let objFav = JSON.parse(strFav);
    favorite = objFav;

    console.log('fav :: ' + localStorage.favorite);
    
    favorite.push(specificSelect);

    let currentFavorite = JSON.stringify(favorite);
    localStorage.setItem('favorite', currentFavorite);

    let favBtn = document.querySelectorAll('.fav' + specificSelect);
    
    for (let i=0; i<favBtn.length; i++){
      favBtn[i].className = "fa fa-heart icon fav" + specificSelect;
    }
    
    favBtn.className="fa fa-heart icon fav" + specificSelect;
    document.getElementById('favtSum').textContent = objFav.length;

    

    setTimeout(myFunction3(),1000);

  }



}

function myFunction() {
  document.getElementById('myDialog').showModal();
  setTimeout(wait,2000);
}

function myFunction2() {
  document.getElementById('myDialog2').showModal();
  setTimeout(wait2,2000);
}
function myFunction3() {
  document.getElementById('myDialog3').showModal();
  setTimeout(wait3,2000);
}

function myFunction4() {
  document.getElementById('myDialog4').showModal();
  setTimeout(wait4,2000);
}

function wait()
{
  document.getElementById('myDialog').close();
}


function wait2()
{
  document.getElementById('myDialog2').close();
}
console.log(cart);


function wait3()
{
  document.getElementById('myDialog3').close();
}


function wait4()
{
  document.getElementById('myDialog4').close();
}

if(page == 'index.html'){

  /* swiper start */
  let swiper = new Swiper( '.swiper-container.two', {
    autoplay: 2500,
    effect: 'coverflow',
    loop: false,
    disableOnInteraction: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide : 8,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows : false,



    }
  } );

  let swiper2 = new Swiper( '.ratedslider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: '7',
    effect: 'coverflow',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1.5,
      slideShadows : false,
    }

  } );

}
/* swiper end */

// Redirect to Movie Page On-Click
function prepareSwitch(id){

  storeClick(id);
  switchPage(id);

}


function switchPage(id){
  window.location.href = 'moviefilm.html';
}

function storeClick(id){

  let idCell = id;
  let currentID = JSON.stringify(idCell);
  localStorage.setItem('id', currentID);
}




// Populate Fav Pop up

let favButtonEl = document.getElementById('favButton');
favButtonEl.setAttribute('onclick','listFav()');


function listFav(){

  let favDialog = document.getElementById('myDialog5');
  favDialog.style.display = '';
  favDialog.textContent = '';

  let strFav = localStorage.getItem('favorite') || [];
  let objFav = JSON.parse(strFav);
  favorite = objFav;

  favDialog.innerHTML = '<h2>My Favorites <i class="fas fa-heart "></i></h2>';

  let ulEl = document.createElement('ul');
  ulEl.style.textAlign = "left";
  favDialog.appendChild(ulEl);

  let closeButton = document.createElement('button');
  closeButton.className = "closeFav";
  closeButton.innerHTML = 'Close <i class="fa fa-close"></i>';
  closeButton.setAttribute('onclick', 'closeModal()');
  favDialog.appendChild(closeButton);


  for (let i = 0; i < objFav.length; i++){
    let liEl = document.createElement('li');
    liEl.className="favLi";
    let counter = objFav[i];
    liEl.innerHTML = `<a class="filmPage" style="vertical-align: middle!important;" onclick="prepareSwitch(${moviesArray[counter].id})">
                          <img style="width:100px;height:100px;" src="${moviesArray[counter].img}"> 
                          ${moviesArray[counter].movieName} </a>`;




    let removeBtn = document.createElement('button');
    removeBtn.innerHTML= 'Remove <i class="fa fa-close">';
    removeBtn.className='removefav';
    removeBtn.setAttribute('id', [i]);
    removeBtn.addEventListener('click', removeFav);
    liEl.appendChild(removeBtn);

    ulEl.appendChild(liEl);
  }

  // NEEDS EDIT : ONLY IF MODAL IS CLOSED

  if(favDialog.open) {
    null;
  } else {
    document.getElementById('myDialog5').showModal();

  }



}


function closeModal(){
  let favDialog = document.getElementById('myDialog5');
  favDialog.style.display = 'none';
}

// Remove Items From Fav

function removeFav(event){

  let strFav = localStorage.getItem('favorite') || [];
  let objFav = JSON.parse(strFav);

  let buttonID = parseInt(event.target.id);


  let updateFav = favorite.splice(buttonID,1);


  let updatedFav = JSON.stringify(favorite);
  localStorage.setItem('favorite', updatedFav);

  retrieveFav();
  closeModal();
  listFav();
}

function retrieveFav(){
  let strFav = localStorage.getItem('favorite') || [];
  let objFav = JSON.parse(strFav);
}

