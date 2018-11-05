window.onload = () => {

    // listButton is a variable
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = function () { // anonymous function
        const myList = document.getElementById('my-list');
        
        for (let i = 0; i < 7; i++) {
           elfCode.appendToList(myList, i);
        }       
    }
}