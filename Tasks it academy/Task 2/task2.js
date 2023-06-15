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

