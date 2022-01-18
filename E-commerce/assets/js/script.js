// ------------------------------------------------------------
// Carousel de premier page
// -------------------------------------------------------------

let images = document.querySelectorAll(".carousel-img");

let count = 0;

images[0].classList.add("show");

for (let i = 1; i < images.length; i++) {
  images[i].classList.add("hidden");
}

let btnNext = document.getElementById("next");
btnNext.addEventListener("click", imagesNext);

function imagesNext() {
  if (count < images.length - 1) {
    let currentImage = document.querySelector(".show");
    currentImage.classList.add("hidden");
    currentImage.classList.remove("show");
    count++;
    let nextImage = images[count];
    nextImage.classList.remove("hidden");
    nextImage.classList.add("show");
  } else {
    count = -1;
  }
}
imagesNext();

let btnBack = document.getElementById("prev");
btnBack.addEventListener("click", imagesBack);

function imagesBack() {
  if (count > 0) {
    let currentImage = document.querySelector(".show");
    currentImage.classList.add("hidden");
    currentImage.classList.remove("show");
    count--;
    let backImage = images[count];
    backImage.classList.remove("hidden");
    backImage.classList.add("show");
  } else {
    count = images.length;
  }
}
imagesBack();

// setInterval(imagesNext, 5000);

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    imagesNext();
  }
  if (e.key === "ArrowLeft") {
    imagesBack();
  }
});

// fin function de carousel
// ---------------------------------------------------------------

// -------------------------------------
// menu burger
// -------------------------------------

let menu = document.querySelector(".burger");
console.log(menu);

let burger = document.querySelector(".burger-custom");
console.log(burger);
burger.addEventListener("click", toggleMenu);

let cross = document.querySelector(".close");
cross.addEventListener("click", closeWindow);

function toggleMenu() {
  menu.classList.toggle("show");
}

function closeWindow() {
  menu.classList.remove("show");
}

// fin menu burger

// ----------------------------------------------------------
// window panier
// -------------------------------------------------------------

let basket = document.querySelector(".window-basket");

let btnClose = document.querySelector(".close-basket");

btnClose.addEventListener("click", closeBasket);

let btnBasket = document.querySelector(".panier");
btnBasket.addEventListener("click", toggleBasket);

function toggleBasket() {
  basket.classList.toggle("show");
}

function closeBasket() {
  basket.classList.remove("show");
}

// fin panier

// ---------------------------------------------------------------------------
// fonction fetch pour rempli tout les produits dans la html
// ----------------------------------------------------------------------------

fetch("assets/data/product.json")
  .then((reponse) => reponse.json())
  .then((jsonProduct) => {
    jsonProduct.results.map((product) => {
      let btnLabel = product.btn_label;
      let imgWatch = product.img_watch;
      let titleProduct = product.title_product;
      let price = product.price;
      let reducPrice = product.reduc_price;
      let btnBasket = product.btn_basket;
      let colorLabel = product.color_label;
      let btnNone = product.btn_none;
      let reductNone = product.reduct_None;

      let content1 = document.querySelector(".grid-product");
      content1.innerHTML += `
            <div class="watch-item">
                <div class="button-product">
                    <button class="btn-label ${colorLabel} ${btnNone}">${btnLabel}</button>
                </div>
                <figure class="img-watch">
                    <img class="img-product" src="${imgWatch}">
                </figure>
                <div class="separator-product">
                    <div class="line"></div>
                </div>
                <div class="info-product">
                    <h1 class="title-product">${titleProduct}</h1>
                    <p class="price">${price}</p>
                    <p class="reduc-price ${reductNone}">${reducPrice}</p>
                    <button class="basket">${btnBasket}<img class="arrow-btn"
                            src="./assets/img/Icon ionic-ios-arrow-round-forward.png"></button>
                </div>
            </div>`;
    });
  });

  fetch("assets/data/product_2.json")
  .then((reponse) => reponse.json())
  .then((jsonProduct2) => {
    jsonProduct2.results.map((product) => {
      let btnLabel = product.btn_label;
      let imgWatch = product.img_watch;
      let titleProduct = product.title_product;
      let price = product.price;
      let reducPrice = product.reduc_price;
      let btnBasket = product.btn_basket;
      let colorLabel = product.color_label;
      let btnNone = product.btn_none;
      let reductNone = product.reduct_None;

      let content2 = document.querySelector(".grid-product-2");
      content2.innerHTML += `
            <div class="watch-item">
                <div class="button-product">
                    <button class="btn-label ${colorLabel} ${btnNone}">${btnLabel}</button>
                </div>
                <figure class="img-watch">
                    <img class="img-product" src="${imgWatch}">
                </figure>
                <div class="separator-product">
                    <div class="line"></div>
                </div>
                <div class="info-product">
                    <h1 class="title-product">${titleProduct}</h1>
                    <p class="price">${price}</p>
                    <p class="reduc-price ${reductNone}">${reducPrice}</p>
                    <button class="basket">${btnBasket}<img class="arrow-btn"
                            src="./assets/img/Icon ionic-ios-arrow-round-forward.png"></button>
                </div>
            </div>`;
    });
  });


// fetch('assets/data/test.json')
//     .then(reponse => reponse.json())
//     .then((jsonProduct) => {
//         jsonProduct.results.map((product) => {
//             let btnLabel = product.btn_label;
//             let imgWatch = product.img_watch;
//             let titleProduct = product.title_product;
//             let price = product.price;
//             let btnBasket = product.btn_basket;

//             let btn = document.querySelectorAll('.btn-label');

//             for(let element of btn){
//                 element.innerHTML = `${btnLabel}`
//             }

//         })
//     })

// fin fetch

// --------------------------------------------
// boutton voir autre produit
// --------------------------------------------

let gridContent2 = document.querySelector(".grid-product-2");
let btnOther1 = document.querySelector(".btn-autre-1");
let btnOther2 = document.querySelector(".btn-autre-2");
let numberArticle = document.querySelector(".number-article");

btnOther1.addEventListener("click", showContent);

function showContent() {
  gridContent2.classList.add("show-product");
  btnOther2.classList.add("show-product");
  btnOther1.classList.add("hiddenContent");
  numberArticle.innerHTML = "16";
}

btnOther2.addEventListener("click", hiddenContent);

function hiddenContent() {
  gridContent2.classList.remove("show-product");
  btnOther2.classList.remove("show-product");
  btnOther1.classList.remove("hiddenContent");
  numberArticle.innerHTML = "11";
}

// ------------------------------------------------
// notification ajout panier
// ------------------------------------------------

let popUp = document.querySelector(".notif");
let btnPopUp = document.querySelectorAll(".basket");
for (let btns of btnPopUp) {
  btns.addEventListener("click", notif);

  function notif() {
    popUp.classList.add("pop-up");
    setTimeout(removePopUp, 5000);
  }

  function removePopUp() {
    popUp.classList.remove("pop-up");
  }
}

// -------------------------------------------------------------
// panier
// -------------------------------------------------------------

// let prix = document.querySelectorAll(".price");
// console.log(prix);
// let btn = document.querySelectorAll(".basket");
// let prixPanier = document.querySelector(".price-custom");

// for (let element of btn) {
//   element.addEventListener("click", test);
//   function test() {
//     let content = prix.innerHTML;
//     prixPanier.innerHTML = content;
//     console.log(content);
//   }
// }

let BtnPanier = document.querySelector(".basket");
BtnPanier.addEventListener("click", getPanier);
let countPanier = 0;
let countqte = 0;

function getPanier() {
  let articlePanier = document.querySelector(".article");
  let recapPanier = document.querySelector(".recap-article");
  articlePanier.classList.remove("d-none");
  recapPanier.classList.remove("d-none");

  // chercher les endroit dans les article
  let price = document.querySelector(".price");
  let title = document.querySelector(".title-product");
  let img = document.querySelector(".img-product");

  // chercher les endroit dans le panier
  let titleArticle = document.querySelector(".title-article");
  let priceArticle = document.querySelector(".price-custom");
  let imgArticle = document.querySelector(".watch-basket");

  // prendre ca valeur
  let titlePanier = title.innerHTML;
  let pricePanier = price.innerHTML;
  let imgPanier = img.getAttribute("src");

  // chercher les elment du Recap pannier
  let priceRecap = document.querySelector(".price-recap");
  let priceLivraison = document.querySelector(".price-livraison");
  let priceTotalRecap = document.querySelector(".price-total-recap");

  let priceLivr = priceLivraison.innerHTML;

  // remplisage du panier
  titleArticle.innerHTML = titlePanier;
  priceArticle.innerHTML = pricePanier;
  imgArticle.src = imgPanier;

  // ajouter les valeur au recap panier
  priceRecap.innerHTML = pricePanier;
  priceTotalRecap.innerHTML = pricePanier + priceLivr;

  // conteur pour pour la quantity des article
  countPanier++;
  countqte++;

  // quantity des articles

  let qtePanier = document.querySelector(".panier");
  let quantity = document.querySelector(".quantity-custom");
  qtePanier.innerHTML = countPanier;
  quantity.innerHTML = countqte;

  let plus = document.querySelector(".fa-plus");
  plus.addEventListener("click", plusQuantity);

  function plusQuantity() {
    countPanier + 1;
  }
}
