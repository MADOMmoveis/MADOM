'use strict';

let strId = localStorage.getItem('id');
let objId = JSON.parse(strId);


function renderMovie(objId){


  let specificSelect = objId;


  let titleEl = document.getElementsByTagName('title')[0];
  titleEl.textContent = moviesArray[specificSelect].movieName;



  let filmDivEl = document.getElementById('filmDiv');
  filmDivEl.textContent= '';

  let titleDiv = document.createElement('div');
  titleDiv.setAttribute('id', 'filmTitleDiv');
  filmDivEl.appendChild(titleDiv);



  let movieTitle = document.createElement('h3');
  movieTitle.textContent = 'Title: ' + moviesArray[specificSelect].movieName;
  titleEl.setAttribute('id', 'filmTitle');
  titleDiv.appendChild(movieTitle);

  let movieGnere = document.createElement('h4');
  movieGnere.textContent = 'Type: ' + moviesArray[specificSelect].genre;
  movieGnere.setAttribute('id', 'filmGenre');
  titleDiv.appendChild(movieGnere);

  let movieRating = document.createElement('h4');
  movieRating.textContent = 'Rating: ' + moviesArray[specificSelect].rating;
  movieRating.setAttribute('id', 'filmRating');
  titleDiv.appendChild(movieRating);

  let imgDiv = document.createElement('div');
  imgDiv.setAttribute('id', 'filmImgDiv');
  filmDivEl.appendChild(imgDiv);

  let movieImg = document.createElement('img');
  movieImg.setAttribute('src', moviesArray[specificSelect].img);
  movieImg.setAttribute('id', 'filmImg');
  imgDiv.appendChild(movieImg);

  let descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('id', 'filmDescriptionDiv');
  filmDivEl.appendChild(descriptionDiv);

  let movieDescription = document.createElement('p');
  movieDescription.textContent = 'Description: ' + moviesArray[specificSelect].description;
  movieDescription.setAttribute('id', 'filmDescription');
  descriptionDiv.appendChild(movieDescription);

  // ADD TRAILERS AND PRICE
  let trailerDiv = document.createElement('div');
  trailerDiv.setAttribute('id', 'filmTrailerDiv');
  filmDivEl.appendChild(trailerDiv);

  // let movieTrailer = document.createElement('video');
  // movieTrailer.setAttribute('id', 'movieTrailer');;
  // movieTrailer.setAttribute('controls');

  // let movieSource = document.createElement('source');
  // movieSource.setAttribute('id', 'movieSource');;
  // movieSource.setAttribute('source', '')
  // movieSource.setAttribute('type', '')
  // trailerDiv.appendChild(movieTrailer);

  let cartDiv = document.createElement('div');
  cartDiv.setAttribute('id', 'filmCartDiv');
  filmDivEl.appendChild(cartDiv);

  let moviePrice = document.createElement('p');
  moviePrice.setAttribute('id', 'moviePrice');
  moviePrice.textContent = 'Price: ' + moviesArray[specificSelect].price;
  cartDiv.appendChild(moviePrice);


  let movieAddToCart = document.createElement('button');
  movieAddToCart.className = 'addtocartbtn';
  movieAddToCart.setAttribute('id', 'divAddToCartBtn');
  movieAddToCart.innerHTML = '<i class="fa fa-plus"></i> Add To Cart ';
  cartDiv.appendChild(movieAddToCart);

  movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[specificSelect].id + ')');


  let movieFav = document.createElement('button');
  movieFav.className = 'addtofavbtn';
  movieFav.setAttribute('id', 'divAddToFavBtn');
  movieFav.innerHTML = '<i class="fas fa-heart icon"></i>';
  cartDiv.appendChild(movieFav);

  movieFav.setAttribute('onclick','addToFav(' + moviesArray[specificSelect].id + ')');





  // localStorage.removeItem('id');
}

renderMovie(objId);

