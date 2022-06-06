const setofWords = ["Nothing is impossible. The word itself says ‘I’m possible!",
    "There is nothing impossible to they who will try",
    "The bad news is time flies. The good news is you’re the pilot.",
    "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You define your own life. Don’t let other people write your script."];


const msg = document.getElementById("msgs");
const msgs = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

//On click of button the function will happend;
btn.addEventListener("click", function () {
    if (this.innerText == "Start") {
        typeWords.disabled = false;
        playgame();

    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endGame();

    }
})
//if button shows"Start" then playgame function work;
const playgame = () => {
    typeWords.placeholder = 'Enter the Message';
    let randomNumber = Math.floor(Math.random() * setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
//if button shows"Done" then Endgame function work;
const endGame = () => {
    //time count 
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    //word count 
    let totalStr = typeWords.value;
    let wordcount = wordCounter(totalStr);
    //count speed of typing 
    let WordSpeed = Math.floor((wordcount / totalTime) * 60);
    //display msg of speed.
    let finalMSg = "Your Typing Speed is (" + WordSpeed + " Words/min)";

    //call function "compareWords" and add into final text.
    finalMSg += compareWords(msg.innerText, totalStr);
    msgs.innerText = finalMSg;
}
//call function for word count.
const wordCounter = (str) => {
    let responce = str.split(" ").length;
    console.log(responce);
    return responce;
}
const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    });
    let errorWords = (words1.length - cnt);
    return (". " + cnt + " Words correct out of " + words1.length + " words and the total number of the error are " + errorWords + ".")
}



