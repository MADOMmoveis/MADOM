'use strict';

let moviesDivEl = document.getElementById('moviesDiv');

// Append to HTML




// Action Category

function actionImgs(){

  let randomArray = [];
  let actionCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(actionCategoryEl);

  for (let i = 0; i < 10; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let movieCol  = document.createElement('div');
    moviesDivEl.appendChild(movieCol);
    movieCol.className='col-20';

    let actionImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Action'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    actionImg.setAttribute('src', moviesArray[randomNumber].img);

    actionImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');

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
    movieAddToFav.innerHTML = '<i class="fas fa-heart icon"></i>';
    movieData.appendChild(movieAddToFav);

    movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

    movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');





    let h3 = document.createElement('h3');
    h3.className = 'movietitle';
    h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);

    let genre = document.createElement('h4');
    genre.className = 'movieType';
    genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

    let rating = document.createElement('h4');
    rating.className = 'movieRating';
    rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');
    let priceTag=document.createElement('h4')
    priceTag.className='moviePrice';
    priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;


    movieData.appendChild(h3);
    movieData.appendChild(genre);
    movieData.appendChild(rating);
    movieData.appendChild(priceTag);

    movieData.appendChild(movieAddToCart);


    movieCol.appendChild(actionImg);
    movieCol.appendChild(movieData);

  }

}



// Comedy Category


function comedyImgs(){

  let randomArray = [];
  let comedyCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(comedyCategoryEl);

  for (let i = 0; i < 10 ; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let comedyCol = document.createElement('div');
    moviesDivEl.appendChild(comedyCol);
    comedyCol.className = 'col-20';

    let comedyImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Comedy'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    comedyImg.setAttribute('src', moviesArray[randomNumber].img);

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
    movieAddToFav.innerHTML = '<i class="fas fa-heart icon"></i>';
    movieData.appendChild(movieAddToFav);

    movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

    movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');




    let h3 = document.createElement('h3');
    h3.className = 'movietitle';
    h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);

    let genre = document.createElement('h4');
    genre.className = 'movieType';
    genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

    let rating = document.createElement('h4');
    rating.className = 'movieRating';
    rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');
    
    
    let priceTag=document.createElement('h4')
    priceTag.className='moviePrice';
    priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;


    movieData.appendChild(h3);
    movieData.appendChild(genre);
    movieData.appendChild(rating);
    movieData.appendChild(priceTag);

    movieData.appendChild(movieAddToCart);

    comedyCol.appendChild(comedyImg);
    comedyCol.appendChild(movieData);

  }

}




// Drama Category


function dramaImgs(){

  let randomArray = [];
  let dramaCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(dramaCategoryEl);

  for (let i = 0; i < 10 ; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let dramaCol = document.createElement('div');
    moviesDivEl.appendChild(dramaCol);
    dramaCol.className = 'col-20';

    let dramaImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Drama'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    dramaImg.setAttribute('src', moviesArray[randomNumber].img);

    dramaImg.setAttribute('onclick','prepareSwitch(' + moviesArray[randomNumber].id + ')');


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
    movieAddToFav.innerHTML = '<i class="fas fa-heart icon"></i>';
    movieData.appendChild(movieAddToFav);

    movieAddToCart.setAttribute('onclick','addToCart(' + moviesArray[randomNumber].id + ')');

    movieAddToFav.setAttribute('onclick','addToFav(' + moviesArray[randomNumber].id + ')');



    let h3 = document.createElement('h3');
    h3.className = 'movietitle';
    h3.textContent = ('Title : ' + moviesArray[randomNumber].movieName);

    let genre = document.createElement('h4');
    genre.className = 'movieType';
    genre.innerHTML = ('Type : ' + moviesArray[randomNumber].genre + ' <i style="color: var(--main);" class="fa fa-bookmark-o"></i>');

    let rating = document.createElement('h4');
    rating.className = 'movieRating';
    rating.innerHTML = ('Rating : ' + moviesArray[randomNumber].rating + ' <i style="color: #FFBF00;" class="fa fa-star"></i>');


    let priceTag=document.createElement('h4')
    priceTag.className='moviePrice';
    priceTag.textContent=`Price: ${moviesArray[randomNumber].price}`;



    movieData.appendChild(h3);
    movieData.appendChild(genre);
    movieData.appendChild(rating);
    movieData.appendChild(priceTag);
        movieData.appendChild(priceTag);

    movieData.appendChild(movieAddToCart);

    dramaCol.appendChild(dramaImg);
    dramaCol.appendChild(movieData);

  }

}






actionImgs();
comedyImgs();
dramaImgs();

