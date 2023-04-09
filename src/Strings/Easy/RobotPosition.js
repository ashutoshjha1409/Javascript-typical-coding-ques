/*
    Position of robot after given movements.
    Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). Given a string consisting of instructions to move. Output the coordinates of a robot after executing the instructions. Initial position of robot is at origin(0, 0).
    
    E.g.
    Input : move = “UDDLRL” 
    Output : (-1, -1)

    Input : move = “UDDLLRUUUDUURUDDUULLDRRRR”
    Output : (2, 3)
*/

const robotPosition = (moves) => {
    let countUp = 0, countLeft = 0, countRight = 0, countDown = 0;
    let xCoordinate = 0, yCoordinate = 0;
    for (let i = 0; i < moves.length; i++) {       
        if (moves[i] === 'U') {
            countUp++;
        } else if (moves[i] === 'D') {
            countDown++;
        } else if (moves[i] === 'L') {
            countLeft++;
        } else {
            countRight++;
        }
    }
    xCoordinate = countRight - countLeft;
    yCoordinate = countUp - countDown;
    return [xCoordinate, yCoordinate];
    
}

console.log(robotPosition('UDDLLRUUUDUURUDDUULLDRRRR'))