describe ("Javabuzz",function(){

    var javabuzz;
    beforeEach(function() {
        javabuzz = new Javabuzz();
    });

    describe('knows when a number is', function(){
        it('is divisible by 3', function(){
            expect(javabuzz.isDivisibleByThree(3)).toBe(true);
        });
        it('is divisible by 5', function(){
            expect(javabuzz.isDivisiblebyFive(5)).toBe(true);
        });
        it('is not divisible by 5', function(){
            expect(javabuzz.isDivisiblebyFive(6)).toBe(false);
        });
        it('is divisible by both 5 and 3', function() {
            expect(javabuzz.isDivisiblebyBoth(15)).toBe(true);
        });
        it('is not divisible by both', function() {
            expect(javabuzz.isDivisiblebyBoth(14)).toBe(false);
        });
    });

    describe('returns the correct word', function() {
        it('fizz for numbers divisible by 3', function() {
            expect(javabuzz.play(6)).toBe('fizz');
        });
        it('buzz for numbers divisible by 5', function(){
            expect(javabuzz.play(10)).toBe('buzz')
        });
        it('Fizzbuzz for numbers divisible by both 3 and 5', function(){
            expect(javabuzz.play(15)).toBe('Fizzbuzz')
        });
        it('number for numbers not divisible by 3 or 5', function(){
            expect(javabuzz.play(14)).toBe(14)
        });
    });
});
