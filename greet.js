$(function () {
  //alert("ready to go")

  var namesGreeted;
  if (localStorage['names']) {
    namesGreeted = JSON.parse(localStorage.getItem('names'));
  }
  const greetedNames = Greeting(namesGreeted)

  //$(".counter").on('load', function () {
  window.$('load', function () {

    $(".counter").html(greetedNames.getCounter());
  });


  $(".greetingBtn").on("click", function () {

    var name = $(".enterName").val()

    var regExp = greetedNames.regExpression(name);
    $(".message").text(regExp);

    if (regExp) {
      greetedNames.greet(regExp)
    }

    $(".radioBtn")
    const checked = $("input:checked").val()

    var errorMessage = greetedNames.errorhandler(checked, regExp)
    $(".message").text(errorMessage);

    if (!errorMessage) {

      var langAndName = greetedNames.languageChecked(checked, regExp)
      $(".message").text(langAndName);
      $(".counter").html(greetedNames.getCounter())
      localStorage.setItem('names', JSON.stringify(greetedNames.getGreetedNames()));
    }

  })


  $(".listAllbtn").on("click", function () {
    $("#namesList").html("")
    // $("#namesList").html(JSON.stringify(greetedNames.getGreetedNames()))
    const names = greetedNames.getGreetedNames()
    console.log(names);
    for(var name in names){
      const perName = name
      const perCount = names[perName]
      $("#namesList").append("<div>" + perName + " has been greeted " + perCount + " times </div>")
    };

  });

  $(".resetBtn").on("click", function () {

    localStorage.clear()
    location.reload()

  });

});

