describe("Greeting exercise", function () {
    describe("greet user function", function () {

        it("should greet a name Sipho once", function () {
            
            let greetings = Greeting();

            greetings.greet("sipho");
            greetings.greet("sipho");

            assert.equal(1, greetings.getCounter());
    
        }); 
        
        it("should greet a name Muzi once", function () {
            let greetings = Greeting();

            greetings.greet("muzi");
            
            assert.equal(1, greetings.getCounter());
       });

        it("should greet two different names once", function () {
            let greetings = Greeting();

            greetings.greet("linda");
            greetings.greet("siwe");
            assert.equal(2, greetings.getCounter());
        
        });

        it("should be able to change a name that starts with upper to first letter uppercase and the rest to lowercase", function () {
            let greetings = Greeting();
        greetings.greet("SIBO");

        assert.deepEqual({"Sibo":0}, greetings.getGreetedNames());
    });
});

    describe("The error handling function", function() {
        it("should be able to retunr an error message 'please enter your name and select a language' when both blank", function() {
            let greetings = Greeting();
            greetings.errorhandler("","");
            assert.equal("Please enter a name and select a language", greetings.errorhandler())
        });

        it("should be able to return an error message 'Please enter a name' when name is blank", function() {
            let greetings = Greeting();
            greetings.errorhandler("English", "");
            const errors = greetings.errorhandler("English", "");
            assert.equal("Please enter a name", errors);
        });

        it("should be able to return an error message 'please select a language' when no button is selected", function() {
            let greetings = Greeting();
            greetings.errorhandler("", "Sandy")
            const error = greetings.errorhandler("", "Sandy")
            assert.equal('Please select a language', error);
        });
    });

    describe("Radio button values", function () {
        it("should be able to greet sinazo in Xhosa", function(){
            let greetings = Greeting();

            greetings.languageChecked("Xhosa", "sinazo");
            const language = greetings.languageChecked("Xhosa", "sinazo");
            
            assert.equal("Molo, sinazo", language);
        });

        it("should be able to greet sinazo in English", function(){
            let greetings = Greeting();
            
            greetings.languageChecked("English", "sinazo");
            const language = greetings.languageChecked("English", "sinazo");
            
            assert.equal("Hellow, sinazo", language)
        });

        it("should be able to greet sinazo in Afrikaans", function(){
            let greetings = Greeting();
            
            greetings.languageChecked("Afrikaans", "sinazo");
            const language = greetings.languageChecked("Afrikaans", "sinazo");
            
            assert.equal("Hallo, sinazo", language)
        }); 
    });

    describe("The counter function", function() {
        it("should be able to count names stored", function() {
            let greetings = Greeting();
            greetings.getCounter();
        

            assert.equal(0, greetings.getCounter());
        });
    });
});