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

