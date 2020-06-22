describe("the Greeting exercise", function () {
    describe("The greet factory function", function () {
        it("should be able to greet a name that has not been greeted", function () {
            
            let greetings = Greeting();
    
        });

        it("should be able to check all three languages in the radio buttons", function(){
            
            let greetings = Greeting();

            greetings.languageChecked();
            
            assert.equal( greetings.languageChecked());
            
        });

        it ("should be able to greet in Xhosa, English, and Afrikaans", function(){

            let greetings = Greeting();
            greetings.languageChecked();
        assert.equal(Xhosa, greetings.languageChecked())
        })
    });
});