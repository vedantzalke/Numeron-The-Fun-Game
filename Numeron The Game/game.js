// Generate 2 random numbers, select the dom for numberbox 1 and 2 
var number1 = Math.round(Math.random()*100)
let number1box = document.getElementById("number1")
var number2 = Math.round(Math.random()*100)
let number2box = document.getElementById("number2")
var operator;
var score = 0;

//Select the dom for numberbox 3
let number3box = document.getElementById("number3")
if(number1 < number2){
    var extra = number1
    number1 = number2 
    number2 = extra
}

function randomise() {
    // generate 2 random numbers again
    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)
    // if number 1 is less that number 2 then swap (since we want the result to be positive)
    if(number1 < number2){
        var extra = number1
        number1 = number2 
        number2 = extra
    }
    operator = Math.round(Math.random() * 5)
    switch (operator) {
        case 1:
            number3 = number1+number2 
            break 
        case 2:
            number3 = number1-number2 
            break 
        case 3:
            number3 = number1*number2
            break
        case 4:
            number3 = Math.floor(number1/number2)
            break 
        case 5:
            number3 = number1 % number2
            break 
        case 0:
            randomise()

    }

    // Place the numbers in their boxes by making use of innerhtml
    number1box.innerHTML = number1
    number2box.innerHTML = number2
    number3box.innerHTML = number3
    console.log(number1 + " " + number2 + " " + number3 + " " + operator);
}

randomise();

//select the plus, minus,mul,divide,modulus buttons
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")



// When these buttons are clicked, check if the selection is correct,
plus.onclick=()=>{
    if((number1+number2)==number3){
        alert("Correct Answer !")
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href=("gameover.html?score=" +score)
    }
}
minus.onclick=()=>{
    if((number1-number2)==number3){
        alert("Correct Answer !")
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href=("gameover.html?score=" +score)
    }
}
mul.onclick=()=>{
    if((number1*number2)==number3){
        alert("Correct Answer !")
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href=("gameover.html?score=" +score)
    }
}
divide.onclick=()=>{
    if(Math.floor(number1/number2)==number3){
        alert("Correct Answer !")
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href=("gameover.html?score=" +score)
    }
}
modulus.onclick=()=>{
    if((number1%number2)==number3){
        alert("Correct Answer !")
        score++
        randomise()
        resetTime(timerId)
    }
    else{
        location.href=("gameover.html?score=" +score)
    }
}
// timer functions
var time = 15;
var timerId;

function startTimer() {
    time = 15;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();