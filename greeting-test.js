describe("the Greeting exercise", function () {
    describe("The greet factory function", function () {
        it("should be able to greet any name entered", function () {
            let greetings = Greeting();
            greetings.hello(1);

            assert.equal(greetings.greet());
        });

        it("should be able to greet in English", function() {

            let greetings = Greeting();
            greetings.EnglishOne(1);
            assert.equal("", greetings.getEnglish());
        });

        it("should be able to greet in IsiXhosa", function() {

            let greetings = Greeting();
            greetings.IsiXhosaOne(1);
            assert.equal("", greetings.getIsiXhosa());
        });
        it("should be able to greet in Afrikaans", function() {

            let greetings = Greeting();
            greetings.AfrikaansOne(1);
            assert.equal("", greetings.getAfrikaans());
        });

        it("should be able to keep count of people greeted", function() {

            let greetings = Greeting();
            greetings.counter();
            assert.equal(greetings.getCounter());
        });
    });
});                                               