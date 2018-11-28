window.onload = () => {
    
    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    //const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }    
    };
    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');
        for (let language of arrays.languageNames) {
            const lis = document.createElement("li");
            lis.appendChild(document.createTextNode(language));
            languageNamesDisplay.appendChild(lis);
        }  
    };

    techLanguagePopularityAction.onclick = () => {

    };
}

const arrays = {
    numbers : [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
    languageNames: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"],
    languagePopularity: [
        {language: "HTML", rank: 1},
        
    ]
}

for(i = 10; i >= 0; i--){
        console.log(arrays.numbers[i]);
    }