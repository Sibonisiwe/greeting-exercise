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
    var nameG = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
    if (nameG) {
      greetingInstance.greet(nameG)
      
    } 
    //var checkedRadio = document.querySelector("input[name='language']:checked");
    var checkedRadio = document.querySelector(".radioBtn:checked");
    if (checkedRadio === null && nameG === "") {
      theMessage.innerHTML = "please enter your name and select a language";
    } else if (nameG === "") {
       theMessage.innerHTML = "please enter a name";
    } else if (checkedRadio === null) {
     theMessage.innerHTML = "please select a language";
    } else if (!(checkedRadio === null && nameG === "")) { 
    theMessage.innerHTML = greetingInstance.languageChecked(checkedRadio.value, nameG)
    

      localStorage.setItem('name', JSON.stringify(greetingInstance.getGreetedNames()));

      if (localStorage.length > 0) {
        greetingInstance.greet()
      } else {
        "No items"
      }

      if (window.localStorage) {
        countElem.innerHTML = greetingInstance.getCounter();

      }

    } 
    setTimeout(function(){theMessage.innerHTML = ""},3000)
    
  
}


function reset() {
  localStorage.clear()
  location.reload()

}

resetElem.addEventListener("click", reset);
greetingBtn.addEventListener("click", greetingBtnClicked);








