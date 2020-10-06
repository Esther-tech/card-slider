
/*Variables*/

const btnPrev = document.getElementById("arrow-prev");
const btnNext = document.getElementById("arrow-next");

const cardItems = document.querySelectorAll(".card-item");
const dots = document.querySelectorAll(".dot");

let selector = 0;


/*Functions*/

const slideNextCard = () => {

    //See if end of cards array is reached    
    if (selector >= cardItems.length - 1) {

        //remove arrow or make unclickable

        return;

    } else {
    
    //Remove selection
    cardItems[selector].classList.remove("active-card");
    dots[selector].classList.remove("active-dot");

    //Increase selector
    selector++;

    //Add next selection
    cardItems[selector].classList.add("active-card");
    dots[selector].classList.add("active-dot");
    
    }
        
};

const slidePrevCard = () => {

    //See if start of cards array is reached
    if (selector === 0) {

        //remove arrow or make unclickable

        return;

    } else {
    
    //Remove current selection
    cardItems[selector].classList.remove("active-card");
    dots[selector].classList.remove("active-dot");

    //Decrease selector
    selector--;

    //Add previous selection
    cardItems[selector].classList.add("active-card");
    dots[selector].classList.add("active-dot");

    }
};


/*Event listeners*/

btnNext.addEventListener("click", () => {
    slideNextCard();
});


btnPrev.addEventListener("click", () => {
    slidePrevCard();
});



