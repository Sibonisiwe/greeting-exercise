$(function () {
  //alert("ready to go")

  var namesGreeted;
  if (localStorage['names']) {
    namesGreeted = JSON.parse(localStorage.getItem('names'));
  }
  var greetedNames = Greeting(namesGreeted)

  $(".greetingBtn").on("click", function () {

    var name = $(".enterName").val()
    // var userName = greetedNames.languageChecked(lang, name)
    var addToLocal = greetedNames.greet(name)

    $(".radioBtn")
    var checked = $("input:checked").val()

    if (addToLocal !== "") {

      $(".message").text(checked + name);
      $("#counter").html($(greetedNames.getCounter()))
      localStorage.setItem('names', JSON.stringify(greetedNames.getGreetedNames()));
    }





  })



});



