//get the advice number element 
const getAdviceNumber = document.querySelector(".advice_number");
console.log(getAdviceNumber);

//get the quotes element
const quote_element = document.querySelector("#advice");
console.log(quote_element);

//get the button element
const button = document.querySelector(".dice-button");
console.log(button)

let intervalId;

const adviceApi= () =>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const userMotivation = getMotivation(data.slip.advice);
        quote_element.textContent = userMotivation;
        const userMotivationid = getMotivation(data.slip.id);
        getAdviceNumber.textContent = userMotivationid;
    });
}

intervalId = setInterval(adviceApi, 30000); 

function getMotivation(message){
    return message;
}

function getId(num){
    return num;
}

function clickDice(){
    button.addEventListener("click", event =>{
        const stopInterval = clearInterval(intervalId)
        const isSet = setTimeout(adviceApi, 0)
        console.log(`Yes ${isSet}`)
    })
}

clickDice()
adviceApi()





