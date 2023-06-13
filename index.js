// TASK 1
// Написать функцию, которая получает два аргумента.
// Вызвать эту функцию, передав ей "A" и "F".
// Функция должна вывести в консоль буквы от "A" до "F", по одной букве в секунду.
// Одновременно много таймеров (setTimeout/setInterval) не запускать, обойтись одним.

function printLetters(firstLetter, lastLetter) {
    const startCharCode = firstLetter.charCodeAt(0);
    const endCharCode = lastLetter.charCodeAt(0);
  
    let currentCharCode = startCharCode;
  
    function printNextLetter() {
      console.log(String.fromCharCode(currentCharCode));
  
      if (currentCharCode < endCharCode) {
        currentCharCode++;
        setTimeout(printNextLetter, 1000);
      }
    }
  
    printNextLetter();
  }
printLetters('A','F')


        

function printLetters(firstLetter, lastLetter) {
  const startCharCode = firstLetter.charCodeAt(0);
  const endCharCode = lastLetter.charCodeAt(0);
    for (let currentCharCode = startCharCode; currentCharCode <= endCharCode; currentCharCode++) {
      setTimeout(() => {
        console.log(String.fromCharCode(currentCharCode));
      }, 1000 * (currentCharCode - startCharCode));
    }
}
printLetters('A','F')


// TASK 2 
// Описать класс PoemButton в ES5-стиле ООП (т.е. функция-конструктор, методы добавлять именно в prototype класса).
// Конструктор класса должен получать две строки — buttonCaption и alertText и создавать на веб-странице кнопку 
// с текстом buttonCaption, при нажатии на которую вызывается метод buttonPressed(), 
// который в свою очередь выводит в alert текст alertText.
// Загрузить через AJAX файл http://fe.it-academy.by/Examples/test_JSE.json
// По каждому элементу загруженного массива создать объект класса PoemButton.


  function PoemButton(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
  }
  PoemButton.prototype.buttonPressed = function () {
    alert(this.alertText);
  };
  PoemButton.prototype.createButton = function () {
    const container = document.querySelector('.container') 
    let btn = document.createElement('button');
    let self = this
    btn.innerText = this.buttonCaption;
    btn.addEventListener('click',()=>{
      self.buttonPressed();
    })
    container.appendChild(btn);

  }
  function createButtons(data) {
    for (let key in data) {
      new PoemButton(data[key].buttonCaption, data[key].alertText).createButton();
    }
  }

  const fetchResult = fetch("http://fe.it-academy.by/Examples/test_JSE.json");
  fetchResult.then((response) => response.json())
  .then((dataFetch) => { createButtons(dataFetch)})

// TASK 3
// Задание аналогично заданию №2, только класс должен быть разработан в ES6-стиле ООП (class). 


// class PoemButton {
//   constructor(buttonCaption, alertText) {
//     this.buttonCaption = buttonCaption;
//     this.alertText = alertText;
//   }
//   buttonPressed() {
//     alert(this.alertText);
//   };
//   createButton(){
//     const container = document.querySelector('.container') 
//     let btn = document.createElement('button');
//     let self = this
//     btn.innerText = this.buttonCaption;
//     btn.addEventListener('click',()=>{
//       self.buttonPressed();
//     })
//     container.appendChild(btn);
//   }
// }

// function createButtons(data) {
//   for (let key in data) {
//     new PoemButton(data[key].buttonCaption, data[key].alertText).createButton();
//   }
// }

// const fetchResult = fetch("http://fe.it-academy.by/Examples/test_JSE.json");
// fetchResult.then((response) => response.json())
// .then((dataFetch) => { createButtons(dataFetch)})



// TASK 4
// Загрузить через AJAX файл http://fe.it-academy.by/Examples/test_JSE.txt
// Регулярным выражением найти в загруженном тексте все 
// валидные строковые константы JavaScript и вывести их в консоль.

const data = fetch("http://fe.it-academy.by/Examples/test_JSE.txt");
data.then((response) => response.text())

.then((dataFetch) => { test(dataFetch);})

function test(text) {
  let regex = /("(\\.|[^\\"^\\'])+")|('(\\.|[^\\"^\\'])+')/g;
  let arr = text.match(regex)
  
  for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

