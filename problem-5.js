
/** Solution to problem-5 **/

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

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));





