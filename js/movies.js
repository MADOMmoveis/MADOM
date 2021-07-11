'use strict';

let moviesDivEl = document.getElementById('moviesDiv');

// Append to HTML




// Action Category

function actionImgs(){

  let randomArray = [];
  let actionCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(actionCategoryEl);

  for (let i = 0; i < 5 ; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let actionImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Action'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    actionImg.setAttribute('src', moviesArray[randomNumber].img);

    actionImg.setAttribute('width', 230);
    actionImg.setAttribute('height', 300);

    actionCategoryEl.appendChild(actionImg);

  }

}



// Comedy Category


function comedyImgs(){

  let randomArray = [];
  let comedyCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(comedyCategoryEl);

  for (let i = 0; i < 5 ; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let comedyImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Comedy'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    comedyImg.setAttribute('src', moviesArray[randomNumber].img);

    comedyImg.setAttribute('width', 230);
    comedyImg.setAttribute('height', 300);

    comedyCategoryEl.appendChild(comedyImg);

  }

}




// Drama Category


function dramaImgs(){

  let randomArray = [];
  let dramaCategoryEl = document.createElement('div');
  moviesDivEl.appendChild(dramaCategoryEl);

  for (let i = 0; i < 5 ; i++){
    let randomNumber = genRandom(0, moviesArray.length);

    let dramaImg = document.createElement('img');
    while (randomArray.includes(randomNumber) || moviesArray[randomNumber].genre !== 'Drama'){
      randomNumber = genRandom(0, moviesArray.length);
    }
    randomArray.push(randomNumber);
    dramaImg.setAttribute('src', moviesArray[randomNumber].img);

    dramaImg.setAttribute('width', 230);
    dramaImg.setAttribute('height', 300);

    dramaCategoryEl.appendChild(dramaImg);

  }

}






actionImgs();
comedyImgs();
dramaImgs();

