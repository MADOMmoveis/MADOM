'use strict';

let strId = localStorage.getItem('id');
let objId = JSON.parse(strId); 


function renderMovie(objId){


  let specificSelect = objId;


  let titleEl = document.getElementsByTagName('title')[0];
  titleEl.textContent =  moviesArray[specificSelect].movieName;



  let filmDivEl = document.getElementById('filmDiv');
  filmDivEl.textContent= '';

  let titleDiv = document.createElement('div');
  filmDivEl.appendChild(titleDiv);

  let movieTitle = document.createElement('h3');
  movieTitle.textContent = moviesArray[specificSelect].movieName;
  titleDiv.appendChild(movieTitle);

  let movieGnere = document.createElement('h4');
  movieGnere.textContent = moviesArray[specificSelect].genre;
  titleDiv.appendChild(movieGnere);

  let movieRating = document.createElement('h4');
  movieRating.textContent = moviesArray[specificSelect].rating;
  titleDiv.appendChild(movieRating);

  let imgDiv = document.createElement('div');
  filmDivEl.appendChild(imgDiv);

  let movieImg = document.createElement('img');
  movieImg.setAttribute('src', moviesArray[specificSelect].img);
  imgDiv.appendChild(movieImg);

  let descriptionDiv = document.createElement('div');
  filmDivEl.appendChild(descriptionDiv);

  let movieDescription = document.createElement('p');
  movieDescription.textContent = moviesArray[specificSelect].description;
  descriptionDiv.appendChild(movieDescription);

  // ADD TRAILERS AND PRICE
  let trailerDiv = document.createElement('div');
  filmDivEl.appendChild(trailerDiv);

  // let movieTrailer = document.createElement('video');
  // movieTrailer.setAttribute('controls');
  // let movieSource = document.createElement('source');
  // movieSource.setAttribute('source', '')
  // movieSource.setAttribute('type', '')
  // trailerDiv.appendChild(movieTrailer);

  let cartDiv = document.createElement('div');
  filmDivEl.appendChild(cartDiv);

  // let moviePrice = document.createElement('p');
  // moviePrice.textContent = moviesArray[specificSelect].price;
  // cartDiv.appendChild(moviePrice);


  let movieFav = document.createElement('button');
  movieFav.className = 'addtofavbtn';
  movieFav.innerHTML = '<i class="fas fa-heart icon"></i>';
  cartDiv.appendChild(movieFav);

  movieFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');



  let movieAddToCart = document.createElement('button');
  movieAddToCart.className = 'addtocartbtn';
  movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
  cartDiv.appendChild(movieAddToCart);









  localStorage.removeItem('id');
}

renderMovie(objId);

// window.onbeforeunload =
