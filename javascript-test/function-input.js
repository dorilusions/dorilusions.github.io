window.onload = () => {
    const feetToInchesAction = document.getElementById('feet-to-inches-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }
}

const feetToInches = (feet) => {
    return feet * 12;
}

