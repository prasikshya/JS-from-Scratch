// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment,getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`the current count is ${counter.getCount()}`);

//........EX:2..........

function createGame(){
    let score = 0;

    function increaseScore(points){
    
        score+=points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
    
        score-=points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}

const game=createGame();
game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
game.decreaseScore(3);
console.log(`the final sore is ${game.getScore()}pts`);



