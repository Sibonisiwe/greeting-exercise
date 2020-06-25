function Greeting(greeted) {

  var greetedNames = greeted || {}



  function greet(name) {
    if (name) {
      if (greetedNames[name] === undefined) {
        greetedNames[name] = 0;
      }
    }
  }

  function errorhandler(lang, name){

    if(name === ""){
      return "Please enter a name"
    }

    else if(lang === undefined){
      return "Please select a language"
       }

    else if(name === "" && lang === undefined){
      return "Please enter a name and select the a language"
     }

  }

  function languageChecked(lang, userName) {
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