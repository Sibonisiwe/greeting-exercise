const greetingBtn = document.querySelector(".greetingBtn");
const enterNames = document.querySelector(".enterName");
const theMessage = document.querySelector(".message");

const theButtons = document.querySelector(".radioBtn");
const countElem = document.querySelector(".counter");
const resetElem = document.querySelector(".resetBtn");



var namesGreeted;
if (localStorage['name']) {
  namesGreeted = JSON.parse(localStorage.getItem('name'));
}

var greetingInstance = Greeting(namesGreeted)

window.addEventListener('load', function () {
  countElem.innerHTML = greetingInstance.getCounter();
});


function greetingBtnClicked() {
  const user = enterNames.value;
  
  const regularExpUser = greetingInstance.regExpression(user);
    theMessage.innerHTML = regularExpUser;

    if (regularExpUser) {
      greetingInstance.greet(regularExpUser)
    }
  
    var checkedRadio = document.querySelector(".radioBtn:checked");

    const errorMessage = greetingInstance.errorhandler(checkedRadio, regularExpUser)
    theMessage.innerHTML = errorMessage;

    if (!errorMessage) {

      theMessage.innerHTML = greetingInstance.languageChecked(checkedRadio.value, regularExpUser)
      countElem.innerHTML = greetingInstance.getCounter();

      localStorage.setItem('name', JSON.stringify(greetingInstance.getGreetedNames()));
    }
  
  
  setTimeout(function () { theMessage.innerHTML = "" }, 3000)
}


function reset() {
  localStorage.clear()
  location.reload()

}

resetElem.addEventListener("click", reset);
greetingBtn.addEventListener("click", greetingBtnClicked);








