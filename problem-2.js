
/** Solution to problem-2 **/

function  onlyCharacter( str ) {
          if(typeof str !== "string"){

            return "Invalid";
          }
    let result = str.split(" ").join("").toUpperCase();

    return result;
};

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter(["hack", "me"]));




