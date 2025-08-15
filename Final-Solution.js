
function totalFine( fare ) {
        if(typeof fare !== "number" || fare <= 0){

            return "Invalid"
        }

    total = fare + (fare * 0.2) + 30;

    return total
};


function  onlyCharacter( str ) {
          if(typeof str !== "string"){

            return "Invalid";
          }
    let result = str.split(" ").join("").toUpperCase();

    return result;
};



function  bestTeam( player1, player2 ) {
          if(typeof player1 !== "object" || typeof player2 !== "object"){

            return "Invalid";
          }

      let = firstTeamMistake = player1.foul + player1.cardY + player1.cardR;
      let = secondTeamMistake = player2.foul + player2.cardY + player2.cardR;

          if(firstTeamMistake < secondTeamMistake){

            return player1.name
          }
          else if (secondTeamMistake < firstTeamMistake){

            return player2.name
          }
          else{
            return "Tie"
          }
};



function  isSame(arr1 , arr2 ) {
          if(Array.isArray(arr1) !== true || Array.isArray(arr2) !== true){

            return "Invalid";
          };

           if(arr1.length !== arr2.length){

            return false
          };

        for(let i = 0; i < arr1.length; i++){

            if(arr1[i] !== arr2[i]){

                return false
            }
        }
        return true
};


function  resultReport( marks ) {
    if(Array.isArray(marks) !== true){

        return "Invalid";
     };

       let total = 0;
       let passSubject = 0;
       let failSubject = 0;

    for(let i = 0; i < marks.length; i++){

      let mark = marks[i];

        total += mark;
   
    if( mark >= 40 ){

      passSubject ++;
      }
      else{

      failSubject ++;
     };

    };

     let avg = 0;

     avg = marks.length > 0 ? Math.round(total / marks.length) : 0;

     return {

      finalScore : avg ,
      pass: passSubject ,
      fail: failSubject ,
    };
         
};

