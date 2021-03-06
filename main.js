
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

//Deactivating arrows at start and end
const arrowUnclick = (button) => {
    if (button.classList.contains("unclick")) {
        return;
    } else {
        button.classList.add("unclick");
    } 
};

const arrowClick = (button) => {
    if (button.classList.contains("unclick")) {
        button.classList.remove("unclick");
    }
};

const arrowStatus = () => {
       //at the start of the array of cards, deactivate the left arrow
    if (selector === 0) {
        arrowUnclick(btnPrev);
    } else {
        arrowClick(btnPrev);
    } 

    //at the end of the array of cards, deactivate the right arrow
    if (selector >= cardItems.length - 1) {
        arrowUnclick(btnNext);
    } else {
        arrowClick(btnNext);
    }
};


/*Event listeners*/

btnNext.addEventListener("click", () => {
    slideNextCard();
    arrowStatus();
});


btnPrev.addEventListener("click", () => {
    slidePrevCard();
    arrowStatus();
});



