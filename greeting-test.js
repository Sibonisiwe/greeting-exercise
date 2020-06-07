describe("The greet factory function", function () {
    it("should be able to greet Nelly", function () {
        let greet = Greeting();
        
            assert.equal("Hello, nelly", greet("nelly"));
    });
});

    //     greet.hello(name);

    //     assert.equal(name, greet.getNelly())
    // });

    // it("should be able to enter name in the text box", function () {
    //     let greet = Greeting();

    //     greet.enterName(name);

    //     assert.equal(name, greet.getEnteredName())
    // });
//});