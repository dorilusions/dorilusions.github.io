window.onload = () => {
    const feetToInchesAction = document.getElementById('feet-to-inches-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

    const milesToFeetAction = document.getElementById('miles-to-feet-action');

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('miles-to-feet-input');
        const milesToFeetDisplay = document.getElementById('miles-to-feet-display');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    }

    const areaOfTriangleAction = document.getElementById('area-of-triangle-action');

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInputBase = document.getElementById('area-of-triangle-base-input');
        const areaOfTriangleInputHeight = document.getElementById('area-of-triangle-height-input');
        const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInputBase.value, areaOfTriangleInputHeight.value);
    }

    const areaOfCircleAction = document.getElementById('area-of-circle-action');

    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('area-of-circle-input');
        const areaOfCircleDisplay = document.getElementById('area-of-circle-display');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    }
}

const feetToInches = (ft) => {
    return ft * 12;
}

const milesToFeet = (miles) => {
    return miles * 5280;
}

const areaOfTriangle = (base, height) => {
    return base * height / 2;
}

const areaOfCircle = (radius) => {
    return Math.PI * radius ^ 2;
}

