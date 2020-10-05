
/*Variables*/

const btnPrev = document.getElementById("arrow-prev");
const btnNext = document.getElementById("arrow-next");

const cardItems = document.querySelectorAll(".card-item");
let activeCard = document.querySelector(".active-card");
let selector = 0;

const dots = document.querySelectorAll(".dot");


const slideNextCard = () => {
    
    if (selector >= cardItems.length - 1) {

        //remove arrow or make unclickable

        return;

    } else {

    activeCard.classList.remove("active-card");
    selector++;
    cardItems[selector].classList.add("active-card");
    
    }
        
};

const slidePrevCard = () => {

    if (selector <= 0) {

        //remove arrow or make unclickable

        return;

    } else {

    activeCard.classList.remove("active-card");

    selector--;

    cardItems[selector].classList.add("active-card");

    }

};


btnNext.addEventListener("click", () => {
    slideNextCard();
});


btnPrev.addEventListener("click", () => {
    slidePrevCard();
});






/*
document.body.classList.remove("darkmode");


darkModeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "on") {
        darkModeOn();
    } else {
        darkModeOff();
    }
});

const nextCard = () => {

}

event listener 


onclick btnNext

loop through array= forEach? 

remove class active-card
add class active-card




1. 1st of array = active-card
2. when click on btn next remove active-card class and add it to the next item in the array (array + 1)
3. animation in css for transition
4. when clicked btn prev remove active-card class and add it to the previous item (array -1)
5. According to which item in the array is active, change dot to active?



*/