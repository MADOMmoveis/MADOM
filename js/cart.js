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
let cartTable = document.getElementById('cartBody');


function populateCart(){

  let strCart = localStorage.getItem('cart') || [];
  let objCart = JSON.parse(strCart);
  console.log(objCart);

  cartTable.textContent = '';
  let sum=0;

  for (let i = 0; i <objCart.length; i++){


    let rowEl = document.createElement('tr');
    cartTable.appendChild(rowEl);

    let matched = idMatch(objCart[i]);
    console.log(typeof objCart[i]);
    sum+=Number((moviesArray[matched].price).split(' ')[0]);
    console.log(sum);



    let tdId = document.createElement('td');
    tdId.textContent = moviesArray[matched].id;
    rowEl.appendChild(tdId);

    let tdImg = document.createElement('td');
    let movieImg = document.createElement('img');
    movieImg.className = 'cartimg';
    movieImg.setAttribute('src', moviesArray[matched].img);
    tdImg.appendChild(movieImg);
    rowEl.appendChild(tdImg);


    let tdName = document.createElement('td');
    tdName.textContent = moviesArray[matched].movieName;
    rowEl.appendChild(tdName);
    let priceTag=document.createElement('td');
    priceTag.textContent=`${ moviesArray[matched].price}`
    rowEl.appendChild(priceTag);

    let tdBtn = document.createElement('td');
    rowEl.appendChild(tdBtn);
    


    let removeBtn = document.createElement('button');
    removeBtn.innerHTML= '<i class="fa fa-close">';
    removeBtn.className='removecart';
    removeBtn.setAttribute('id', [i]);
    removeBtn.addEventListener('click', removeMovie);
    tdBtn.appendChild(removeBtn);



    

    

    // let tdPrice = document.createElement('td');
    // tdPrice.textContent = moviesArray[matched].price;
    // rowEl.appendChild(tdPrice);
  }
  let totalRw=document.createElement('tfoot');
  let totalTd=document.createElement('td');
  totalTd.textContent='Total Price';
  totalRw.appendChild(totalTd);
  cartTable.appendChild(totalRw);
  let priceEl=document.createElement('td');
  priceEl.textContent=sum;
  totalRw.appendChild(priceEl);



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
