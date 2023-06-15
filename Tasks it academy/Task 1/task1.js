// TASK 1
// Написать функцию, которая получает два аргумента.
// Вызвать эту функцию, передав ей "A" и "F".
// Функция должна вывести в консоль буквы от "A" до "F", по одной букве в секунду.
// Одновременно много таймеров (setTimeout/setInterval) не запускать, обойтись одним.

function printLetters(firstLetter, lastLetter) {
    const startCharCode = firstLetter.charCodeAt(0);
    const endCharCode = lastLetter.charCodeAt(0)
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


