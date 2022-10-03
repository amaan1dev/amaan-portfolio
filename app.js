const textToAnimate = ["websites","memes", "pancakes","......"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === textToAnimate.length){
        count = 0;
    }
    currentText = textToAnimate[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".heading-inverted").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 350);
}());