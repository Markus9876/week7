const displayResult = document.querySelector("#Result");
const btnGetAPrediction = document.querySelector("#btnGetAPrediction");

const options = [
    'You will fall in love this afternoon.', 
    'You will win a lottery.',
    'You will lose your phone. Check your left pocket.',
    'You will fall asleep on a couch.',
    'You will be taking a ring to Mordor.',
    'You will get your letter from Hogwarts.',
    'Elon Musk will buy TikTok.',
    'Your crash will be mad at you, or give you a kiss. I am just a programm, I have no idea of what will happen in the future.'
];

btnGetAPrediction.addEventListener('click', () => {

    /*your code here*/

    const randomNum = Math.floor(Math.random() * 8) + 1; //Number: 1 - 8

    let prediction = "";

    switch(randomNum)
    {
            case 1: 
        prediction = 'You will fall in love this afternoon.';
            break;
            
            case 2:
        prediction =  'You will win a lottery.';
             break;

            case 3: 
        prediction = 'You will lose your phone. Check your left pocket.';
            break;

            case 4: 
        prediction = 'You will fall asleep on a couch.';
            break;

            case 5: 
        prediction = 'You will be taking a ring to Mordor.';
            break;

            case 6: 
        prediction = 'You will get your letter from Hogwarts.';
            break;

            case 7: 
        prediction = 'Elon Musk will buy TikTok.';
            break;

            case 8: 
        prediction = 'Your crash will be mad at you, or give you a kiss. I am just a programm, I have no idea of what will happen in the future.';
            break;
    }
    console.log(`prediction:  ${prediction}`);
    displayResult.innerHTML = prediction;
});