function Greeting(greeted) {

  var greetedNames = greeted || {}

  var greetingsCounter = 0;


  function hello(name) {
    return "Hi, " + name;
  }

  function greet(name) {
    if (name) {
      if (greetedNames[name] === undefined) {
        greetingsCounter++;
        greetedNames[name] = 0;
      }
    }
  }

  function languageChecked(userName) {
    var checkedRadio = document.querySelector("input[name='language']:checked");
    //alert(checkedRadioBtn.value);
    if (checkedRadio) {
      var buttonChecked = checkedRadio.value;

      if (buttonChecked === "Xhosa") {
        return "Molo, " + userName

      }

      else if (buttonChecked === "English") {
        return "Hellow, " + userName

      }

      else if (buttonChecked === "Afrikaans") {
        return "Hallo, " + userName
      }
      else { "please select the lang" }
    }
  }

  

  function getCounter() {
    return greetingsCounter;
  }
  function getGreetedNames() {
    return greetedNames
  }



  return {
    hello,
    greet,
    getCounter,
    getGreetedNames,
    languageChecked,
    //EnglishOne,
    //IsiXhosaOne,
    //AfrikaansOne,
    //theCounter,


    //languageChecked,

  };
}