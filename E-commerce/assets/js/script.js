let images = document.querySelectorAll('.carousel-img');

let count = 0;

images[0].classList.add('show');

for(let i = 1; i < images.length; i++){
    images[i].classList.add('hidden');
}

let btnNext = document.getElementById('next');
btnNext.addEventListener('click', imagesNext);

function imagesNext(){
    if (count < images.length - 1){
        let currentImage = document.querySelector('.show');
        currentImage.classList.add('hidden');
        currentImage.classList.remove('show');
        count++;
        let nextImage = images[count];
        nextImage.classList.remove('hidden');
        nextImage.classList.add('show');
    }
    else{
        count = -1;
    }
    
}
imagesNext();

let btnBack = document.getElementById('prev');
btnBack.addEventListener('click', imagesBack);

function imagesBack(){
    if (count > 0){
        let currentImage = document.querySelector('.show');
        currentImage.classList.add('hidden');
        currentImage.classList.remove('show');
        count--;
        let backImage = images[count];
        backImage.classList.remove('hidden');
        backImage.classList.add('show');
    }
    else{
        count = images.length;
    }
}
imagesBack();

// setInterval(imagesNext, 5000);

window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        imagesNext();
    }
    if (e.key === 'ArrowLeft') {
        imagesBack();
    }
})


// menu burger

let menu = document.querySelector('.burger');
console.log(menu);

let burger = document.querySelector('.burger-custom');
console.log(burger);
burger.addEventListener('click', toggle);

let cross = document.querySelector('.close');
cross.addEventListener("click", closeWindow);

function toggle(){
    menu.classList.toggle('show');
}

function closeWindow(){
    menu.classList.remove('show')
}

// fin menu burger