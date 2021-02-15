function Greeting(greeted) {

  var greetedNames = greeted || {}


  function greet(name) {
    var nameG = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      if (nameG) {
        if (greetedNames[nameG] === undefined) {
          greetedNames[nameG] = 1;
        }

        else {
          greetedNames[nameG] += 1;
        }
      }
    
   }

  function errorhandler(lang, userName) {

    if (!userName && !lang) {
      return "Please enter a name and select a language"
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

  function regExpression(name) {
      var namesReg = /^[A-Za-z]+$/;
      var newInstanc = new RegExp(namesReg);
      var regexTest = newInstanc.test(name);
    console.log(regexTest);
    if(regexTest) { 
    var nameFixed = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return nameFixed; 
    } 
     

     return "";
  }

  
   return {
    greet,
    getCounter,
    getGreetedNames,
   languageChecked,
    errorhandler,
    regExpression,
    
   };
}