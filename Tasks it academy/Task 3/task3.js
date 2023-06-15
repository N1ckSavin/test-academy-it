// TASK 3
// Задание аналогично заданию №2, только класс должен быть разработан в ES6-стиле ООП (class). 


class PoemButton {
  constructor(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
  }
  buttonPressed() {
    alert(this.alertText);
  };
  createButton(){
    const container = document.querySelector('.container') 
    let btn = document.createElement('button');
    let self = this
    btn.innerText = this.buttonCaption;
    btn.addEventListener('click',()=>{
      self.buttonPressed();
    })
    container.appendChild(btn);
  }
}

function createButtons(data) {
  for (let key in data) {
    new PoemButton(data[key].buttonCaption, data[key].alertText).createButton();
  }
}

const fetchResult = fetch("http://fe.it-academy.by/Examples/test_JSE.json");
fetchResult.then((response) => response.json())
.then((dataFetch) => { createButtons(dataFetch)})




