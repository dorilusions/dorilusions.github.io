function loader() {
    const functionButton = document.getElementById('function-object-action');
    functionButton.onclick = functionObject;
}

window.onload = loader;

const simpleObject = {
    sayName: 'Simple Object'
}

dynamicName.simpleObject = 'Dynamic Method';

function FunctionObject() {
    var privateFunction  = function() {
        console.log('Private Function')
    };

    FunctionObject.prototype.sayName = function() {
        return privateFunction;
    };      
}

class CustomClass {
    sayName() {
        console.log('BarFoo');
    }
}


var functionObject = new FunctionObject();
console.log(functionObject.constructor.toString());
const customClass = new CustomClass();
customClass.sayName();