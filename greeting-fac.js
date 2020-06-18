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

  function languageChecked(lang, userName) {
    if (lang === undefined) {
      return "Please select language"
    }
    else {
      if (lang === "Xhosa") {
        return "Molo, " + userName

      }

      if (lang === "English") {
        return "Hellow, " + userName

      }

      if (lang === "Afrikaans") {
        return "Hallo, " + userName
      }
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

  };
}