'use strict';


// Movies Constructor

let moviesArray = [];
// let moviesAction = [];
// let moviesComedy = [];
// let moviesDrama = [];

//EDIT >> ADD PRICE
function Movie(id, img, movieName, genre, rating){
  this.img = img;
  this.movieName = movieName;
  this.rating= rating;
  this.genre = genre;
  this.fav;
  this.description;
  this.id = id;

  moviesArray.push(this);

}

// Create Movies

function generateMovies(){
  new Movie(0, 'img/Action/Bloodshot.jpg','Bloodshot', 'Action', '5.7');
  new Movie(1, 'img/Action/Fury.jpg', 'Fury', 'Action', '7.6');
  new Movie(2, 'img/Action/Gemini Man.jpg', 'Gemini Man', 'Action', '5.7');
  new Movie(3, 'img/Action/Godzilla vs Kong.jpg', 'Godzilla vs Kong' ,'Action', '6.4');
  new Movie(4, 'img/Action/John Wick.jpg', 'John Wick','Action', '7.4');
  new Movie(5, 'img/Action/Maze Runner.jpg', 'Maze Runner','Action', '6.8');
  new Movie(6, 'img/Action/Spenser Confidential.jpg', 'Spenser Confidential','Action', '6.2');
  new Movie(7, 'img/Action/The Dark Tower.jpg', 'The Dark Tower','Action', '5.6');
  new Movie(8, 'img/Action/The Tomorrow War.jpg', 'The Tomorrow War','Action', '6.7');
  new Movie(9, 'img/Action/Without Remorse.jpg', 'Without Remorse' ,'Action', '5.8');
  new Movie(10, 'img/Comedy/Cats and Dogs.jpg', 'Cats and Dogs', 'Comedy', '5.1');
  new Movie(11, 'img/Comedy/Game Night.jpg', 'Game Night', 'Comedy', '6.9');
  new Movie(12, 'img/Comedy/Get Hard.jpg', 'Get Hard', 'Comedy', '6');
  new Movie(13, 'img/Comedy/Hangover.jpg', 'Hangover', 'Comedy', '7.7');
  new Movie(14, 'img/Comedy/Instant Family.jpg', 'Instant Family', 'Comedy', '7.3');
  new Movie(15, 'img/Comedy/Jumanji.jpg', 'Jumanji', 'Comedy', '7');
  new Movie(16, 'img/Comedy/Swiss Army Man.jpg', 'Swiss Army Man', 'Comedy', '7');
  new Movie(17, 'img/Comedy/The DDD.jpg', 'The Dead Don\'t Die', 'Comedy', '5.5');
  new Movie(18, 'img/Comedy/The Mitchells.jpg', 'The Mitchells', 'Comedy', '7.7');
  new Movie(19, 'img/Comedy/Zombieland.jpg', 'Zombieland', 'Comedy', '7.6');
  new Movie(20, 'img/Drama/Cast Away.jpg', 'Cast Away', 'Drama', '7.8');
  new Movie(21, 'img/Drama/Dunkirk.jpg', 'Dunkirk', 'Drama', '7.8');
  new Movie(22, 'img/Drama/Forrest Gump.jpg', 'Forrest Gump', 'Drama', '8.8');
  new Movie(23, 'img/Drama/Frozen.jpg', 'Frozen', 'Drama', '7.4');
  new Movie(24, 'img/Drama/Joker.jpg', 'Joker', 'Drama', '8.4');
  new Movie(25, 'img/Drama/Shutter Island.jpg', 'Shutter Island', 'Drama', '8.2');
  new Movie(26, 'img/Drama/Tenet.jpg', 'Tenet', 'Drama', '7.4');
  new Movie(27, 'img/Drama/The Hunter.jpg', 'The Hunter', 'Drama', '6.7');
  new Movie(28, 'img/Drama/The Revenant.jpg', 'The Revenant', 'Drama', '8');
  new Movie(29, 'img/Drama/The Terminal.jpg', 'The Terminal', 'Drama', '7.4');

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

    randomImg.setAttribute('src', moviesArray[randomNumber].img);
    randomImg.className += `purchasable ${moviesArray[randomNumber].id}`;

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
    sliderImg.setAttribute('class', 'slider-image');
    swiperSlide.appendChild(sliderImg);

    let randomImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || parseFloat(moviesArray[randomNumber].rating) >= 6){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);

    randomImg.setAttribute('src', moviesArray[randomNumber].img);
    randomImg.className += `purchasable ${moviesArray[randomNumber].id}`;
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
    actionImg.className += `purchasable ${moviesArray[randomNumber].id}`;

    actionImg.setAttribute('width', 230);
    actionImg.setAttribute('height', 300);

    movieCol.appendChild(actionImg);

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
    comedyImg.className += `purchasable ${moviesArray[randomNumber].id}`;

    comedyImg.setAttribute('width', 230);
    comedyImg.setAttribute('height', 300);

    movieCol.appendChild(comedyImg);

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
    dramaImg.className += `purchasable ${moviesArray[randomNumber].id}`;
    dramaImg.setAttribute('width', 230);
    dramaImg.setAttribute('height', 300);

    movieCol.appendChild(dramaImg);

  }

}


actionImgs();
comedyImgs();
dramaImgs();





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

let purchasableEl = document.getElementsByClassName('purchasable');

for (let i = 0 ; i < purchasableEl.length ; i++){

  purchasableEl[i].addEventListener('click', addToCart);

}
// ADD POP UP IF DUPLICATE
function addToCart(event){
  let selectedMovie =event.target;
  console.log(typeof(selectedMovie));

  let specificSelect = selectedMovie.className.split(' ')[1];
  console.log(specificSelect);
  cart.allMovies.push(specificSelect);
  cart.saveCart();
  console.log(cart);

}

console.log(cart);





/* swiper start */
var swiper = new Swiper( '.swiper-container.two', {
  autoplay: 2500,
  effect: 'coverflow',
  loop: false,
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

var swiper2 = new Swiper( '.ratedslider', {
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


/* swiper end */
