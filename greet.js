const greetingBtn = document.querySelector(".greetingBtn");
const enterName = document.querySelector(".enterName");
const hellow = document.querySelector(".message");

greetingInstance = Greeting()

function greetingBtnClicked() {
    greetingInstance.hello(enterName.value)
    //var msg = name;

    hellow.innerHTML = (greetingInstance.hello());
}


greetingBtn.addEventListener("click", greetingBtnClicked);