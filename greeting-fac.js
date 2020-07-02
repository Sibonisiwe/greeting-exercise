function Greeting(greeted) {

  var greetedNames = greeted || {}



  function greet(name) {
    var nameR = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (nameR) {
      if (greetedNames[nameR] === undefined) {
        greetedNames[nameR] = 0;
      }
    }
  }

  function errorhandler(lang, userName) {

    if (!userName && !lang) {
      return "Please enter a name and select the a language"
    }
    else if (!userName) {
      return "Please enter a name"
    }

    else if (!lang) {
      return "Please select a language"
    }

    return "";

  }

  function languageChecked(lang, userName) {

    greet(userName);

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



  function getCounter() {
    var countedNames = Object.keys(greetedNames);
    return countedNames.length;
  }

  function getGreetedNames() {
    return greetedNames;
  }

  

  return {
    greet,
    getCounter,
    getGreetedNames,
    languageChecked,
    errorhandler,
  };
}