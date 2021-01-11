class Javabuzz {
    isDivisibleByThree(x) {
        return this._isDivisibleby(x, 3);
    }

    isDivisiblebyFive(x) {
        return this._isDivisibleby(x, 5);
    }

    isDivisiblebyBoth(x) {
        return this._isDivisibleby(x, 15);
    }

    _isDivisibleby(number, divisor) {
        return (number % divisor === 0);
    }
}
