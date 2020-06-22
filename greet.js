const greetingBtn = document.querySelector(".greetingBtn");
const enterName = document.querySelector(".enterName");
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
  const user = enterName.value;
  const msg = user;
  if (user) {
    greetingInstance.greet(user)
  }

  //theMessage.innerHTML = greetingInstance.hello(msg)

  

  var checkedRadio = document.querySelector("input[name='language']:checked");
  //alert(checkedRadioBtn.value);
  if (checkedRadio) {
    var buttonChecked = checkedRadio.value;
    theMessage.innerHTML = greetingInstance.languageChecked(buttonChecked, msg)
  }
  else {
    theMessage.innerHTML = "Please choose a language"

  }


  //console.log(greetingInstance.getGreetedNames())
  localStorage.setItem('name', JSON.stringify(greetingInstance.getGreetedNames()));


  if (localStorage.length > 0) {
    greetingInstance.greet()
  } else {
    "No items"
  }


  if (window.localStorage) {
    countElem.innerHTML = greetingInstance.getCounter();
  }

  

  console.log(greetingInstance.validateStr());
  enterName.innerHTML = greetingInstance.validateStr();
 
}


function reset() {
  localStorage.clear()

}

resetElem.addEventListener("click", reset);
greetingBtn.addEventListener("click", greetingBtnClicked);








