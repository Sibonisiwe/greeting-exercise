const greetingBtn = document.querySelector(".greetingBtn");
const enterName = document.querySelector(".enterName");
const theMessage = document.querySelector(".message");

const theButtons = document.querySelector(".radioBtn");
//const theCounter = document.querySelector(".counterBtn");
const count = document.querySelector(".counter");



var namesGreeted;
if (localStorage['name']) {
  namesGreeted = JSON.parse(localStorage.getItem('name'));
}

var greetingInstance = Greeting(namesGreeted)

function greetingBtnClicked() {
    const user = enterName.value;
    const msg = user;
    if (user) {
        greetingInstance.greet(user)
    }

    theMessage.innerHTML = "fghjfghjkcvbnm"
    theMessage.innerHTML = greetingInstance.hello(msg)
    theMessage.innerHTML = greetingInstance.languageChecked(msg)

        //console.log(greetingInstance.getGreetedNames())
        //localStorage.setItem('name', JSON.stringify(greetingInstance.getGreetedNames()));

        const greetState = greetingInstance.getGreetedNames();
        const greetStateString = JSON.stringify(greetState);
        localStorage["greetState"] = greetStateString;

        if (localStorage.length > 0) {
             greetingInstance.greet()
        } else {
             "No items"
          }
        console.log(localStorage.length);

        if (window.localStorage) {
            greetingInstance.getCounter();
          }
          console.log(window.localStorage);

        counter()
    }
    

function counter() {

    count.innerHTML = greetingInstance.getCounter();

}


greetingBtn.addEventListener("click", greetingBtnClicked);


// var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    // //alert(checkedRadioBtn.value);
    // if (checkedRadioBtn) {
    //     var buttonChecked = checkedRadioBtn.value;

    //     if (buttonChecked === "Xhosa") {
    //         theMessage.innerHTML = greetingInstance.IsiXhosaOne(msg);
    //     }

    //     else if (buttonChecked === "English") {
    //         theMessage.innerHTML = greetingInstance.EnglishOne(msg);
    //     }

    //     else if (buttonChecked === "Afrikaans") {
    //         theMessage.innerHTML = greetingInstance.AfrikaansOne(msg);
    //     }
