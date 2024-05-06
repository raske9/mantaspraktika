const Mantai = 'Mantas';

function vardas(name){
    return console.log(`Labas ${name}`)

}

vardas("Mantai");



function howMany(text) {

    return console.log(text.length)
}

howMany('Labas');

/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */


console.clear();


    

function bmi(markMass, markHeight, johnMass, johnHeight){
    
    const markBmi = markMass / markHeight ** 2;
    const johnBmi = johnMass / johnHeight ** 2;

    const markHigherBMI = (markBmi > johnBmi);
    return "Marko BMI yra didesnis " + markBmi;
    
}
console.log(bmi(78, 1.69, 92, 1.95));
console.log(bmi(95, 1.88, 85, 1.76));
console.log('-------------------');


/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉*/


function bmi(markMass, markHeight, johnMass, johnHeight){
    
    const markBmi = markMass / markHeight ** 2;
    const johnBmi = johnMass / johnHeight ** 2;

    if(markBmi>johnBmi){
        return `Marko BMI yra didesnis ${markBmi.toFixed(1)} , uz John BMI ${johnBmi.toFixed(1)}`;
    }
    else{
        return `John BMI yra didesnis ${johnBmi.toFixed(1)}, uz Marko BMI ${markBmi.toFixed(1)}`;
    }
 
}

console.log(bmi(78, 1.69, 92, 1.95));
console.log(bmi(95, 1.88, 85, 1.76));











