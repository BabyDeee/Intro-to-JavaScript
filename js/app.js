document.querySelector('.first').style.color = '#845EC2'
alert("Welcome to Spaghettiii`s Team Task")
// NUMBER 2
const team_members = ["Jaybee", "Spaghettiii", "Danny", "Johnson Francis", "Smartlify", "I_Am_DanielIkpe", "Chidinma"];  
const me = "Me:";
console.log (me, team_members[1]);
// NUMBER 3
const aboutMe = {firstName: "Chiamaka", lastName: "Maduka", bestMovie: "Sound of Music", bestFood:"Spaghetti", complexion:"Dark", birthMonth:"February", state:"Anambra", groupName:"Demeter"}
console.log(aboutMe["bestMovie"])
// NUMBER 4
let noun = "Love",  verb = "is", adjective = "beautiful";
console.log(`${noun} ${verb} ${adjective}`)
console.log(`The girl ${verb} ${adjective}`)
console.log(`She ${verb} in ${noun}`)
console.log(`Princess doesn't think she ${verb} ${adjective}, but people think she is.`)
console.log(`${noun} ${verb} is a beautiful name to give a newborn.`)
// NUMBER 5
function remainder(a,b){
    return a % b;
}
console.log(remainder(15, 9))
// NUMBER 6
function almightyFormula(a, b, c){
    console.log((-b + (b**2 + (4 *a * c))**(-2)) / 2 * a);
    console.log((-b - (b**2 + (4 *a * c))**(-2)) / 2 * a);
}
(almightyFormula(2, -10, 6));
// NUMBER 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = `The ${myAdjective} ${myNoun} chased me and I ${myVerb} very ${myAdverb}`;
console.log(wordBlanks);
// NUMBER 8
const pi = 3.142;
let r = 9;
let A = r * r * pi;
console.log(A);
// NUMBER 9
const P = 8200, R = 0.175, T = 2.5;
let SI = P * R * T
console.log(SI);
// NUMBER 10
const a = 10, b = 4, c = a % b;
console.log(c);
// NUMBER 11
// DATA ONE
let Merit1 = {
    mass: 78,
    height: 1.69
}
let Nutjob1 ={
    mass: 92,
    height: 1.95
}
let BMI1Merit = Merit1.mass / Merit1.height ** 2 ;
let BMI1Nutjob = Nutjob1.mass / Nutjob1.height ** 2;
console.log(BMI1Merit, BMI1Nutjob);
let meritHigherBMI = true;
console.log(meritHigherBMI);
// DATA TWO
let Merit2 = {
    mass: 85,
    height: 1.76
}
let Nutjob2 ={
    mass: 95,
    height: 1.88
}


let BMI2Merit = Merit2.mass / Merit2.height ** 2 ;
let BMI2Nutjob = Nutjob2.mass / Nutjob2.height ** 2;
console.log(BMI2Merit, BMI2Nutjob);
// let meritHigherBMI = true;
console.log(meritHigherBMI);

