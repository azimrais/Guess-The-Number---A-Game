function getRandomInt(max){
    return Math.floor(Math.random()*max)
}
let random = getRandomInt(100)
let input;
let score = 100
while(random != input){
    score = score -1;
    input = prompt("Guess the Number")
    if(random==input){
        console.log("Your guess is right")
        console.log(`you guess the actual number in ${100 - score} chances`)
    }
    else if(random>=input){
        console.log("Your guess is wrong random no. is greater than what you have guess")
    }
    else{
        console.log("Your guess is wrong random no. is lower than what you have guess")
    }
}