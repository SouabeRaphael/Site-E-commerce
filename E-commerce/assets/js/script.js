// ------------------------------------------------------------
// Carousel de premier page
// --------------------------------------------------------------

// ---------------------------------------------------------------
// element image
let images = document.querySelectorAll(".carousel-img");
let count = 0;
images[0].classList.add("show");

for (let i = 1; i < images.length; i++) {
  images[i].classList.add("hidden");
}
// --------------------------------------------------------------

// --------------------------------------------------------------
// element point
let point = document.querySelectorAll(".circle-item");
let index = 0;
point[0].classList.add("actif");

// --------------------------------------------------------------

// chercher le boutton
let btnNext = document.getElementById("next");
btnNext.addEventListener("click", imagesNext);

// fonction qui page les image de gauche a droite

function imagesNext() {
  // image carousel
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

  // point actif carousel
  if (index < point.length - 1) {
    let currentPoint = document.querySelector(".actif");
    currentPoint.classList.add("no-actif");
    currentPoint.classList.remove("actif");
    index++;
    let nextPoint = point[index];
    nextPoint.classList.remove("no-actif");
    nextPoint.classList.add("actif");
  } else {
    index = -1;
  }
}
imagesNext();

// chercher le bouton
let btnBack = document.getElementById("prev");
btnBack.addEventListener("click", imagesBack);

// fonction qui page les image de droite à gauche

function imagesBack() {
  // images carousel
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

  // point actif carousel
  if (index > 0) {
    let currentPoint = document.querySelector(".actif");
    currentPoint.classList.add("no-actif");
    currentPoint.classList.remove("actif");
    index--;
    let backPoint = point[index];
    backPoint.classList.remove("no-actif");
    backPoint.classList.add("actif");
  } else {
    index = point.length;
  }
}
imagesBack();

// setInterval(imagesNext, 5000);

// @@@
// defiller carousel avec les fleche clavier
// @@@
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

let burger = document.querySelector(".burger-custom");

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

let basket = document.querySelector(".window-cart");

let btnClose = document.querySelector(".close-cart");

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
// -----------------------------------

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
      let altImg = product.altImg;
      let id = product.id;

      let content1 = document.querySelector(".grid-product");
      content1.innerHTML += `
            <div class="watch-item ${id}">
                <div class="button-product">
                    <button class="btn-label ${colorLabel} ${btnNone}">${btnLabel}</button>
                </div>
                <figure class="img-watch">
                    <img class="img-product" src="${imgWatch}" alt="${altImg}">
                </figure>
                <div class="separator-product">
                    <div class="line"></div>
                </div>
                <div class="info-product">
                    <h1 class="title-product">${titleProduct}</h1>
                    <p class="price">${price}€</p>
                    <p class="reduc-price ${reductNone}">${reducPrice}€</p>
                    <button id="cart" class="cart">${btnBasket}<img class="arrow-btn"
                            src="./assets/img/Icon ionic-ios-arrow-round-forward.png"></button>
                </div>
            </div>`;
    });
    addCart();
  });

  // ------------------------------------------------------------------------------------------------------------
// fonction fetch pour rempli d'autre produit dnas le html après avoir cliquer sur le button "Voit plus"
// -------------------------------------------------------------------------------------------------------------

fetch("assets/data/product.json")
  .then((reponse) => reponse.json())
  .then((jsonProduct2) => {
    jsonProduct2.results2.map((product) => {
      let btnLabel = product.btn_label;
      let imgWatch = product.img_watch;
      let titleProduct = product.title_product;
      let price = product.price;
      let reducPrice = product.reduc_price;
      let btnBasket = product.btn_basket;
      let colorLabel = product.color_label;
      let btnNone = product.btn_none;
      let reductNone = product.reduct_None;
      let altImg = product.altImg;
      let id = product.id;

      let content2 = document.querySelector(".grid-product-2");
      content2.innerHTML += `
            <div class="watch-item ${id}">
                <div class="button-product">
                    <button class="btn-label ${colorLabel} ${btnNone}">${btnLabel}</button>
                </div>
                <figure class="img-watch">
                    <img id="image" class="img-product" src="${imgWatch}" alt="${altImg}">
                </figure>
                <div class="separator-product">
                    <div class="line"></div>
                </div>
                <div class="info-product">
                    <h1 id="titre" class="title-product">${titleProduct}</h1>
                    <p id="prix" class="price">${price}€</p>
                    <p class="reduc-price ${reductNone}">${reducPrice}€</p>
                    <button class="cart">${btnBasket}<img class="arrow-btn"
                            src="./assets/img/Icon ionic-ios-arrow-round-forward.png"></button>
                </div>
            </div>`;
    });
    addCart();
  });

// fin fetch
// --------------------------------------------------------------

// --------------------------------------------------------
// Fonction qui va gérer tout le système du panier
// --------------------------------------------------------

// for (let btn of btnCart) {
//   btn.addEventListener("click", function () {
//     let product = btn.closest(".watch-item");
//     console.log(product);
//   });
// }

// ---------------------------------------------------------------------------------
// Grande fonction qui identifier le bon produits a sont click de mise au panier
// Elle regroude aussi toute les fonction qui gere le panier
// ---------------------------------------------------------------------------------

function addCart() {
  let btnCart = document.querySelectorAll(".cart");
  console.log(btnCart);
  // @@@
  // fonction onclick qui cible le bon button du mise au panier
  // @@@
  for (let btn of btnCart) {
    btn.onclick = function () {
      let product = btn.closest(".watch-item");
      let title = product.querySelector(".title-product");
      let price = product.querySelector(".price");
      let img = product.querySelector(".img-product");

      let titleArticle = title.innerHTML;
      let priceArticle = price.innerHTML;
      let imgArticle = img.src;

      let infoCart = document.querySelector(".title-area-article");
      infoCart.innerHTML += `
      <div class="article">
      <img class="watch-cart" src="${imgArticle}">
      <div class="area-article">
          <h2 class="title-article">${titleArticle}</h2>
          <div class="price-article">
              <div class="quantity">
                  <h2 class="qte">QTE</h2>
                  <div class="icon-quantity">
                      <i class="fas fa-minus"></i>
                      <p class="quantity-custom">1</p>
                      <i class="fas fa-plus"></i>
                  </div>
              </div>
              <div class="price-watch">
                  <h2 class="prix">PRIX</h2>
                  <div class="content-price">
                      <p class="price-custom">${priceArticle}</p>
                  </div>
              </div>

          </div>
      </div>
      </div>`;

      // @@@
      // Fonction qui ajoute 1 au panier à chaque mise au panier d'un article
      // @@@
      function addNbrCart(){
        let cart = document.querySelector('.panier');
        let valueCart = parseFloat(cart.innerHTML);
        cart.innerHTML = valueCart + 1;
      }
      addNbrCart();

      // @@@
      // Fonction qui retire 1 au panier à chaque article supprimer du panier
      // @@@
      function removeNbrCart(){
        let cart = document.querySelector('.panier');
        let valueCart = parseFloat(cart.innerHTML);
        cart.innerHTML = valueCart - 1;
      }
      
      // @@@
      // Fonction qui ajoute 1 au panier récapitulatif à chaque mise au panier d'un article
      // @@@
      function nbrQuantityProductPlus(){
        let nbrArticle = document.querySelector('.numberArticle');
        let valueNbr = parseFloat(nbrArticle.innerHTML);
        nbrArticle.innerHTML = valueNbr + 1;
      }
      nbrQuantityProductPlus();

      // @@@
      // Fonction qui retire 1 au panier récapitulatif à chaque article supprimer du panier
      // @@@
      function nbrQuantityProductMinus(){
        let nbrArticle = document.querySelector('.numberArticle');
        let valueNbr = parseFloat(nbrArticle.innerHTML);
        nbrArticle.innerHTML = valueNbr - 1;
      }

      // @@@
      // Fonction qui ajoute le montant de toute les montre mise au panier dans le récapitulatif du panier
      // @@@
      function priceAllArticle() {
        let PrixArticle = product.querySelector(".price");
        let prixRecap = document.querySelector(".price-recap");
        let ConverPrix = parseFloat(PrixArticle.innerHTML);
        let ConverPrixRecap = parseFloat(prixRecap.innerHTML);

        prixRecap.innerHTML = ConverPrixRecap + ConverPrix + "€";
      }
      priceAllArticle();


      // @@@
      // Fonction qui gere le système de frois de port et de cout total
      // @@@
      function priceTotal() {

        let priceAll = document.querySelector(".price-recap");
        let converPriceAll = parseFloat(priceAll.innerHTML);

        let numberDelivery = 6.99;
        let priceTotalRecap = document.querySelector(".price-total-recap");
        let delivery = document.querySelector(".price-livraison");
        let priceDelivery = parseFloat(numberDelivery);

        if (converPriceAll > 500) {
          delivery.innerHTML = `6,99€`;
          priceTotalRecap.innerHTML = converPriceAll + priceDelivery + "€";
        } else if (converPriceAll < 500) {
          priceTotalRecap.innerHTML = converPriceAll + "€";
          delivery.innerHTML = `Gratuite`
        }
      }
      priceTotal();


      // @@@
      // fonction qui ajoute le produits dont on a click sur la flèche plus pour ajouter le meme produits
      // @@@

      let btnIconPlus = document.querySelectorAll('.fa-plus');

      for(let element of btnIconPlus){
        element.addEventListener('click', addWatch);

        function addWatch(){
          let itemCart = element.closest('.article');
          let priceCustom = itemCart.querySelector('.price-custom');
          let addPriceArticle = document.querySelector('.price-recap');
          let quantityCustom = itemCart.querySelector('.quantity-custom');
          let valueQuantityCustom = parseFloat(quantityCustom.innerHTML);

          quantityCustom.innerHTML = valueQuantityCustom + 1;
          let valueAddPriceArticle = parseFloat(addPriceArticle.innerHTML);
          let valuePriceCustom = parseFloat(priceCustom.innerHTML);
          addPriceArticle.innerHTML = valueAddPriceArticle + valuePriceCustom + "€";
          priceTotal()
          nbrQuantityProductPlus();
          addNbrCart();
        }
      }


      // @@@
      // fonction qui supprime le produits dont on a click sur la flèche moins pour supprimer le meme produit
      // @@@
      let iconMinus = document.querySelector('.fa-minus');
      iconMinus.addEventListener('click', removeWatch);

      let btnIconMinus = document.querySelectorAll('.fa-minus');

      for(let minus of btnIconMinus){
        minus.addEventListener('click', removeWatch);
        
        function removeWatch(){
          let itemCart = minus.closest('.article');
          let priceCustom = itemCart.querySelector('.price-custom');
          let addPriceArticle = document.querySelector('.price-recap');
          let quantityCustom = itemCart.querySelector('.quantity-custom');
          let valueQuantityCustom = parseFloat(quantityCustom.innerHTML);

          quantityCustom.innerHTML = valueQuantityCustom - 1;
          let valueAddPriceArticle = parseFloat(addPriceArticle.innerHTML);
          let valuePriceCustom = parseFloat(priceCustom.innerHTML);
          addPriceArticle.innerHTML = valueAddPriceArticle - valuePriceCustom + "€";

          if (valueQuantityCustom < 2){
            itemCart.remove();
          }

          removeNbrCart();
          priceTotal()
          nbrQuantityProductMinus();
        }
      }

      // @@@
      // Fonction qui gere l'aparition et la disparition de du pop up de mise au panier
      // @@@
      function putCart() {
        let popUp = document.querySelector(".notif");

        popUp.classList.add("pop-up");
        setTimeout(removePopUp, 5000);

        function removePopUp() {
          popUp.classList.remove("pop-up");
        }
      }
      putCart();
    };
  }
}
// --------------------------------------------------------
// Fin de la Fonction qui gere tout le système du panier
// --------------------------------------------------------

// --------------------------------------------
// Function qui gere le boutton voir autre produit
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


// ----------------------------------------------------------------------
// Function qui remonte en haut de la page avec le btn scrolltop
// --------------------------------------------------------------------

let btnScrollTop = document.querySelector('.btn-scroll-top');
btnScrollTop.addEventListener('click', goUp);

function goUp(){
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  })
}

// -------------------------------------------------------------------------
// Function qui fait apparaitre le button à une certaines hauteur d'écran
// -------------------------------------------------------------------------

window.addEventListener('scroll', appearsOnScroll);

function appearsOnScroll(){
  if(window.scrollY > 1000){
    btnScrollTop.classList.remove('d-none');
  }
  else if (window.scrollY < 1000){
    btnScrollTop.classList.add('d-none');
  }
}