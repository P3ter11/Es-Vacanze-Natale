let btnCollassa = document.getElementsByClassName("btn-collassa");
let container = document.getElementsByClassName("div-collassa");
let cards = document.getElementsByClassName("card");



for(let i=0; i< btnCollassa.length; i++){
    btnCollassa[i].addEventListener("click", () =>{
        if(container[i].classList.contains("hide"))
            container[i].classList.remove("hide");
        else
            container[i].classList.add("hide");
    });
}


function rimuoviCard(){
    for(i=0; i<cards.length; i++){
        cards[i].style.display = "none";
    }
}

/* rimuoviCard(); */