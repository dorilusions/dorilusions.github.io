function loader() {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionObjectButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = function() {
        const simpleObjectName = simpleObject.sayName + ', ' + simpleObject.dynamicName;
        const getSimpleObjectDisplay = document.getElementById('simple-object-display');
        getSimpleObjectDisplay.textContent = simpleObjectName;
    }

   
    functionObjectButton.onclick = function() {
        const functionObject = new FunctionObject();
        const functionObjectName = functionObject.sayName();
        const getFunctionObjectDisplay = document.getElementById('function-object-display');
        getFunctionObjectDisplay.textContent = functionObjectName;
    }

    customClassButton.onclick = function() {
        const customClassName = customClass.sayName();
        const getCustomClassDisplay = document.getElementById('custom-class-display');
        getCustomClassDisplay.textContent = customClassName;
    }
}

window.onload = loader;

const simpleObject = {
    sayName: 'Simple Object'
}

simpleObject.dynamicName = 'Dynamic Method';

function FunctionObject() {
    var privateFunction  = function() {
        return 'Private Function';
    };

    FunctionObject.prototype.sayName = function() {
        return privateFunction();
    };      
}

class CustomClass {
    sayName() {
        return 'Custom Class';
    }
}


var functionObject = new FunctionObject();
console.log(functionObject.constructor.toString());
const customClass = new CustomClass();
customClass.sayName();