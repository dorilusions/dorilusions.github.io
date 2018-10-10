window.onload = () => {
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');
    const listButton = document.getElementById('add-to-list');

    setTextButton.onclick = () => {
        userInput.value = 'this is the first item for my list';
    }
}