'use strict';

// Read From Local Storage

function retrieveCart(){
  let strCart = localStorage.getItem('cart') || [];
  let objCart = JSON.parse(strCart);
}








// Match Stored ID with Movie
function idMatch(storedID){
  for(let i = 0; i < moviesArray.length; i++){
    if (parseInt(storedID) === moviesArray[i].id){
      return storedID;
    }
  }
}






// Append Cart Items
let cartTable = document.getElementById('cartPreview');


function populateCart(){

  let strCart = localStorage.getItem('cart') || [];
  let objCart = JSON.parse(strCart);

  cartTable.textContent = '';
  for (let i = 0; i <objCart.length; i++){
    let rowEl = document.createElement('tr');
    cartTable.appendChild(rowEl);

    let tdBtn = document.createElement('td');
    rowEl.appendChild(tdBtn);

    let removeBtn = document.createElement('button');
    removeBtn.textContent= 'X';
    removeBtn.setAttribute('id', [i]);
    removeBtn.addEventListener('click', removeMovie)
    tdBtn.appendChild(removeBtn);



    let tdImg = document.createElement('td');
    let movieImg = document.createElement('img');
    let matched = idMatch(objCart[i]);
    movieImg.setAttribute('src', moviesArray[matched].img);
    tdImg.appendChild(movieImg);
    rowEl.appendChild(tdImg);

    let tdName = document.createElement('td');
    tdName.textContent = moviesArray[matched].movieName;
    rowEl.appendChild(tdName);

    // let tdPrice = document.createElement('td');
    // tdPrice.textContent = moviesArray[matched].price;
    // rowEl.appendChild(tdPrice);
  }
}
populateCart();


// Remove Items From Cart

function removeMovie(event){

  let strCart = localStorage.getItem('cart') || [];
  let objCart = JSON.parse(strCart);

  let buttonID = parseInt(event.target.id);

  let updateCart = objCart.splice(buttonID,1);


  let updatedCart = JSON.stringify(objCart);
  localStorage.setItem('cart', updatedCart);

  retrieveCart();
  populateCart();
}

populateCart();
