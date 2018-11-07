
window.onload = () => {
    
    const functionCalls = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input');

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        const functionReturnParagraph = document.getElementById("function-return");
        functionReturnParagraph.textContent = functionReturn();
        //const returnValue = functionReturn();
        //console.log(returnValue);
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById('show-user-input');
        const userInput = document.getElementById('user-input');
        userInputParagraph.textContent = userInput.value;
    }
}

function simpleFunction () {
    const displayText = "A function consists of statements that will perform a single task."
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}

function functionParameters (v) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(v);
    functionParametersParagraph.textContent = v;
}

function functionReturn() {
    return "Many functions return values.";
}


