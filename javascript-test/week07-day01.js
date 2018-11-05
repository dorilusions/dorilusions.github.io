let num = 3;
const numberString = '3';
const monika = true;

console.log(num, numberString, monika); //prints 3 '3' true 
console.log(typeof num, typeof numberString, typeof monika); //prints 3 '3' true number string boolean
console.log(num + numberString); //prints 33

if (monika === true) {
    console.log('just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika just Monika');
} else {
    console.log("HELPaoqwnd43pijow@(#(*)@ jdwkms&^%%*ll))008what*haveyoudone*&tome ithurtsssssSS*&^ISJALmkjdsn");

}

console.log('Modulus test for even: ', num % 2);
console.log('Modulus test for even: ', (num % 2) === 0);
num = 4;
console.log('Modulus test for even: ', (num % 2) === 0);

function evenOrOdd(n){
    if (n % 2  === 0) {
        console.log('The number ' + n + ' is even.');
    } else {
        console.log('The number ' + n + ' is odd.');
    }
}

evenOrOdd(675);

var app = {
    isEven: function(input) {
        if (input % 2  === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
}

app.isEven(2);
app.isEven(3);
app.isEven(785);