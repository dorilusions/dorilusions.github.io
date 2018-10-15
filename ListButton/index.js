window.onload = () => {
    // Part I
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');
    const listButton = document.getElementById('add-to-list');

    // Part II
    setTextButton.onclick = () => {
        userInput.value = 'this is the first item for my list';
    }

    // Part III
    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
}