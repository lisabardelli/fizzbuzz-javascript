describe ("Javabuzz",function(){

    var javabuzz;
    describe('knows when a number is', function(){
        it('is divisible by 3', function(){
            javabuzz = new Javabuzz();
            expect(javabuzz.isDivisibleByThree(3)).toBe(true);
        });
        it('is divisible by 5', function(){
            javabuzz = new Javabuzz();
            expect(javabuzz.isDivisiblebyFive(5)).toBe(true);
        });
        it('is not divisible by 5', function(){
            javabuzz = new Javabuzz();
            expect(javabuzz.isDivisiblebyFive(6)).toBe(false);
        });
    });
});


