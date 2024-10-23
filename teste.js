const kohlerName = ['colera', 'cooler', 'pedrao', 'pedrao das ideias', 'pedro', 'grande'];
const nick = Math.floor(Math.random()*kohlerName.length);
console.log(`Fala ${kohlerName[nick]}`);


function validPassword(password, username) {
    const size = password.length >= 8; // se a senha for maior que 9 caracteres, true
    const space = password.indexOf(' ') === -1; // se não tiver espaço na senha, true
    const name = password.indexOf(username) === -1; // se não tiver o username na senha, true
    return size && space && name; // se alguma variável não for true, retorna false
}

// function validPassword (password, username) {
//     const size = password.length < 8;
//     const space = password.indexOf(' ') !== -1;
//     const name = password.indexOf(username) !== -1;
//     return !size && !space && !name;
//     }

// function avg(arr){
//     let total = 0;
//     for (let num of arr) {
//         total = total + num;
//         console.log("🚀 ~ avg ~ total:", total)
//     }
//    return total/arr.length;
// }

// const arr = [200, 310, 400, 500]
// let total = 0;
// let i = 0;
// // for(let i = 0; i < arr.length && total < 500 ; i = i+1){
// for(; i < arr.length && total < 500; i++){
//     total += arr[i]
    
// }
// console.log("🚀 ~ i:", i)
// console.log("🚀 ~ total:", total)


// const arr = [1, 2, 3, 4]
// let total = 0;
// function avg(arr){
// for (let i = 0; i < arr.length && total += i; i++){

//     console.log(i);
// }
// }

// const arr = [1, 2, 3, 4]
// let total = 0;
// function avg(arr){
//     for(let num of arr)
//         total = total + num;
//     console.log(total/arr.length);
//     }


function average(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

const sentenceTrue = 'Nenhum gay acertou a hora exata no blog ruim que o webmaster Pedro fez em Javascript pra rankear melodias';
const sentence = 'ninguem acertou o horario exato no blog ruim que pedro fez em javascript';
function pangram(sentence) {
    let lowercased = sentence.toLowerCase();
    for (let char of 'abcdefghijlmnopqrstuvxzkwy') {
        if (lowercased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const cartaSelecionada = pick(cartas);
    const naipes = ['paus', 'ouros', 'copas', 'espadas']
    const naipeSelecionado = pick(naipes);
    //return `carta ${carta2} de ${naipe2}`;
    return cartaSelecionada + ' de ' + naipeSelecionado
}

function cartasAleatorias(num) {
    for (i = 0; i < num; i++) {
        console.log(getCard());
    }
}


const numbers = [2, 5, 9, 24, 32, 89, 57, 43, 105, 7, 11, 14, 300]


// 1. identificar se todos os elementos de um determinado array são números ímpares

function isOdd(arr) {
    return arr.every(n => typeof n === 'number' && n % 2 === 1)
}  

// 2. identificar se algum dos elementos de um array não é um número

function hasNonNumber(arr) {
    return arr.some(n => typeof n !== 'number')
}

// 3. dado um array com vários elementos do tipo number, retornar somente os elementos que são pares

function getEvenNumbers(arr) {
    return arr.filter(n => typeof n === 'number' && n % 2 === 0)
}

// 4. logar no console cada elemento do array

function logElements(arr) {
    arr.forEach(n => console.log(n))
}

// 5. dado um array com vários elementos do tipo number, retornar um novo array cujos elementos serão o valor do elemento do array inicial + 3 

function plusThree(arr) {
    return arr.map(n => n + 3)
}

// 6. dado um array com vários elementos do tipo number, retornar o 'average' desses números

function avg(arr) {
    return arr.reduce((total, el) => total + el, 0) / arr.length
}

// extra

function log(el) {

    if (Array.isArray(el)) // se for array)
    {
        el.forEach(n => console.log(n))
    } else {
        console.log(el)
    }
}



function randomNumbersArray(length = 10) {
    return Array.from(Array(length), () => Math.floor(Math.random() * 100) + 1);
}


const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);
    });
};
makeDogPromise()
    .then(() => {
        console.log('got dog!');
    })
    .catch(() => {
        console.log('no dog');
    });

    const makeDog = () => {

        const rand = Math.random();
        if (rand < 0.5) {
            console.log('got dog!')
        }
        else {
            console.log('no dog');
        }
    }

// const firstReq = new XMLHttpRequest();
//     firstReq.addEventListener('load', function() {
//         console.log('worked');
//        const data = JSON.parse(this.responseText);
//        console.log(data); 
//         //const data = console.log(this.responseText);
        
//     });
//     firstReq.addEventListener('error', () => {
//         console.log('error!!!');
//     });

//     firstReq.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
//     firstReq.send();
//     console.log('request sent!');



// console.log('escrito por ultimo, mas aparece primeiro');


// axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(({ data }) => {
//     const quote = document.querySelector('p');
//     quote.innerText = data;
// });


function getResFromUrl() {

    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(({ data }) => {
        const quote = document.querySelector('p');
        quote.innerText = data;
    });
}

getResFromUrl()

const btn = document.getElementById('btn');
btn.addEventListener('click', getResFromUrl)
               