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
    });

    describe("Radio button values", function () {
        it("should be able to greet sinazo in Xhosa", function(){
            let greetings = Greeting();

            greetings.languageChecked("Xhosa");
            const language = greetings.languageChecked("Xhosa", "sinazo");
            
            assert.equal("Molo, sinazo", language );
        });

        it("should be able to greet sinazo in English", function(){
            let greetings = Greeting();
            
            greetings.languageChecked("English");
            const language = greetings.languageChecked("English", "sinazo");
            
            assert.equal("Hellow, sinazo", language)
        });

        it("should be able to greet sinazo in Afrikaans", function(){
            let greetings = Greeting();
            
            greetings.languageChecked("Afrikaans");
            const language = greetings.languageChecked("Afrikaans", "sinazo");
            
            assert.equal("Hallo, sinazo", language)
        }); 
    });
});