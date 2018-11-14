function loader() {
    const functionButton = document.getElementById('function-object-action');
    functionButton.onclick = functionObject;
}

window.onload = loader();

const myObject = {
    firstName: 'Severus',
    lastName: 'Snape',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

myObject.middleName = 'Lily';

var simpleObject = {}

const functionObject = () => {
    console.log('my object')

    
}

console.log(myObject.getName());