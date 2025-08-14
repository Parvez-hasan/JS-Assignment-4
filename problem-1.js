
/** Solution to problem-1 **/

function totalFine( fare ) {
        if(typeof fare !== "number" || fare <= 0){

            return "Invalid"
        }

    total = fare + (fare * 0.2) + 30;

    return total
};

console.log(totalFine(200));
console.log(totalFine(-50));
console.log(totalFine(0));
console.log(totalFine("Gorib tai ticket katinai"));






