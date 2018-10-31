window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
            for(i = 1; i < 10; i++){
                elfCode.appendToList(myList, i);
            }
    }
}                    