function Greeting(greeted) {

  var greetedNames = greeted || {}


  
  function greet(name) {
    if (name) {
      if (greetedNames[name] === undefined) {
        greetedNames[name] = 0;
      }
    }
  }

  function errorhandler() {

  }

  function languageChecked(lang, userName) {
    //if (lang === undefined) {
    //   return "Please select language"
    // }
    // else {
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
    var countedNames = Object.keys(greetedNames);
    return countedNames.length;
  }
  function getGreetedNames() {
    return greetedNames
  }

function validateStr(greetedNames, strMatchPattern) {
var strMatchPattern = /[^a-zA-Z]/g; 
  var objRegExp = new RegExp(strMatchPattern);
 
  return objRegExp.test(greetedNames);

}


  return {
    //hello,
    greet,
    getCounter,
    getGreetedNames,
    languageChecked,
    validateStr,

  };
}