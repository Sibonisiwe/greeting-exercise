const greetingBtn = document.querySelector(".greetingBtn");
const enterName = document.querySelector(".enterName");
const hello = document.querySelector(".message");

function greetingBtnClicked() {
    var name = enterName.value;
    var msg = name;

    hello.innerHTML = msg;
}


greetingBtn.addEventListener("click", greetingBtnClicked);