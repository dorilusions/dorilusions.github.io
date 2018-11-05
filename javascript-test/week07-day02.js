var message = (message) => {
    console.log("-------------"+ m +"--------------");
}

message('order of ops');

let result = 1 + 2 * 3;
result = (1 + 2) - 3;
console.log(result);

message('for loops');

for (let i = 0; i <= 17; i = i + 2){
    console.log(i);
}

message('while loops');

let looper = 10;
while(looper < 13) {
    console.log(looper++);
}

do {
    console.log(looper++);
} while (looper < 20);