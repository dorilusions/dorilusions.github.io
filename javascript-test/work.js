var person = {
    firstName: 'Dorothy',
    lastName: 'Lu',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }              
}

var calculator = {
    operand01: -1,
    operand02: -1,
    add: function(){
        return this.operand01 + this.operand01;
    },
    subtract: function(){
        return this.operand01 - this.operand02;
    },
}

calculator.multiply = function() {
    return calculator.operand01 * calculator.operand02;
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

function divider(title) {
    console.log("------------------------------------");
    console.log(title);
    console.log("------------------------------------");
}

divider('Person');
console.log('First Name: ', person.firstName);
console.log('Last Name: ', person.lastName);
console.log('Full Name: ', person.fullName());

divider('Calculator');
console.log('Operand 1: ', calculator.operand01);
console.log('Operand 2: ', calculator.operand02);
console.log('Add: ', calculator.add());
console.log('Subtract: ', calculator.subtract());
console.log('Multiply: ', calculator.multiply());