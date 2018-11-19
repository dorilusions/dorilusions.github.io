function loader() {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionObjectButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = function() {
        const name = simpleObject.sayName + ', ' + simpleObject.dynamicName;
        const getSimpleObjectDisplay = document.getElementById('simple-object-display');
        getSimpleObjectDisplay.textContent = name;
    }

    functionObjectButton.onclick = function() {
        const name = FunctionObject.sayName
        const getFunctionObjectDisplay = document.getElementById('function-o')
    }
    
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