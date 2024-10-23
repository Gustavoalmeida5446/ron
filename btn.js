// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function () {
//     console.log('o mouse passou por cima!');
//     const altura = Math.floor(Math.random() * window.innerHeight);
//     const largura = Math.floor(Math.random() * window.innerWidth);
//     btn.style.left = `${largura}px`;
//     btn.style.top = `${altura}px`;
// });

// btn.addEventListener('click', function(){
//     console.log('clicou!')
//     btn.innerText = "broxou!";
//     document.body.style.backgroundColor = "green";
// })



// window.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         console.log('APERTOU O ENTER!!!')
//     } else {
//         console.log('não é o enter')
//     }
// })

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function () {
//     console.log('worked');
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     //const data = console.log(this.responseText);
//     const quote = document.querySelector('p');
//     quote.innerText = data;

// });
// firstReq.addEventListener('error', () => {
//     console.log('error!!!');
// });

// firstReq.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
// firstReq.send();
// console.log('request sent!');


