const greetingBtn = document.querySelector(".greetingBtn");
const enterName = document.querySelector(".enterName");
const theMessage = document.querySelector(".message");

const theButtons = document.querySelector(".radioBtn");
const theCounter = document.querySelector(".counterBtn");
const count = document.querySelector(".counter");

greetingInstance = Greeting()

function greetingBtnClicked() {
    const user = enterName.value;
    const msg = user;

    theMessage.innerHTML = greetingInstance.hello(msg)


    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    //alert(checkedRadioBtn.value);
    if (checkedRadioBtn) {
        var buttonChecked = checkedRadioBtn.value;


        if (buttonChecked === "Xhosa") {
    theMessage.innerHTML = greetingInstance.IsiXhosaOne(msg);

        }

        else if (buttonChecked === "English") {
    theMessage.innerHTML = greetingInstance.EnglishOne(msg);

        }

        else {
    theMessage.innerHTML = greetingInstance.AfrikaansOne(msg);

        }
    }
}


//var greetingCount = 0;
theCounter.addEventListener("click", function() {
    greetingInstance.countGreetings();
//greetingCount++;
    count.innerHTML = greetingInstance.getCounter();
//count.innerHTML = greetingCount;

localStorage['counted'] = greetingInstance.getCounter()

    
});


greetingBtn.addEventListener("click", greetingBtnClicked);


