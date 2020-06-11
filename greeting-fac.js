function Greeting() {
    var names = "";

    let greetTwo = "";
    let greetOne = "";
    let greetThree = "";

    var greetingCounter = 0;
    
    function hello(name) {
        return "Hi, " + name;    
    }

    function greet() {
         names;
    }

    function EnglishOne(userName) {
        return "Hellow, " + userName;
    }

    function getEnglish() {
        return greetTwo;
    }

    function IsiXhosaOne(userName) {
        return "Molo, " + userName;
    }

    function getIsiXhosa() {
        return greetOne;
    }

    function AfrikaansOne(userName) {
        return "Hallo, " + userName;
    }

    function getAfrikaans() {
        return greetThree;
    }

    function countGreetings() {
        greetingCounter++;
    }

    function counter(count) {
        greetingCounter = count;
    }

    function getCounter() {
        return greetingCounter;
    }
    
    return {
        hello,
        greet,
        EnglishOne,
        getEnglish,
        IsiXhosaOne,
        getIsiXhosa,
        AfrikaansOne,
        getAfrikaans,
        counter,
        getCounter,
        countGreetings
    };
}