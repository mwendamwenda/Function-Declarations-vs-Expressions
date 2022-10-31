// console.log('never been like this');

// function declaration;

function calcAge(birthYear){
     const age = 2037 - birthYear;
     return age;
     // which can also be written as 
     return 2037 - birthYear;
}
calcAge(1991);
// then we store the results in a variable
const age1 = calcAge(1991);
//we can now log it in the console to see if it works


//functions expression

const calcAge2 =  function(birthYear){
   return 2037-birthYear;
}
const age2 = calcAge2(1991);
console.log(age1,age2);
//In function declartion we can call the function before they are defined (hoisting);
//in function expression we cannot call the function before its declared

//function declaration

function profits(capital){
    return (550000 - capital);
}
const octoProfit = profits(150000);


//with function expression
const profit2 = function(capital){
    return 550000 - capital;
}
const octoProfit2 = profit2(150000)
console.log(octoProfit,octoProfit2);

//function declaration
// function ageDiffrenceSonFather(Milan){
//     const diffence = 30 - Milan;
//     return diffence;
// }
// const diff = ageDiffrenceSonFather(2);


// function expression
// const ageDiffrenceSonFather2 = function(Milan){
//     return 30 - Milan;
// }
// const diff2 =ageDiffrenceSonFather2(2);
// console.log(diff,diff2);

// demosntrate hoisting

console.log(diff);
function ageDiffrenceSonFather(Milan){
    const diffence = 30 - Milan;
    return diffence;
}
const diff = ageDiffrenceSonFather(2);



