function Greeting(greeted) {

  var greetedNames = greeted || {}



  function greet(name) {
   var nameR =  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (nameR) {
      if (greetedNames[nameR] === undefined) {
        greetedNames[nameR] = 0;
      }
    }
  }

  // function errorhandler(lang, userName){

  //   if(userName === ""){
  //     return "Please enter a name"
  //   }

  //   else if(lang === undefined){
  //     return "Please select a language"
  //      }

  //   else if(userName === "" && lang === undefined){
  //     return "Please enter a name and select the a language"
  //    }

  // }

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
    //errorhandler,
  };
}