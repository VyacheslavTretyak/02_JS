function Fraction(numerator, denominator) {
    this.num = numerator === undefined ? 0 : numerator;
    this.den = denominator === undefined ? 0 : denominator;    
    this.sum = sum;
    this.dif = dif;
    this.mult = mult;
    this.div = div;
    this.abbr = abbr;
    this.show = show;
}

function show() {
    return this.num + "/" + this.den;
}

function sum(fr2) {
    var fr1 = this;
    var g = (fr1.den * fr2.den) / gcd(fr1.den, fr2.den);
    var a = fr1.num * (g / fr1.den) + fr2.num * (g / fr2.den);    
    return new Fraction(a, g);
}

function dif(fr2) {
    var fr1 = this;
    var g = (fr1.den * fr2.den) / gcd(fr1.den, fr2.den);
    var a = fr1.num * (g / fr1.den) - fr2.num * (g / fr2.den);
    return new Fraction(a, g);
}

function mult(fr2) {
    var fr1 = this;        
    return new Fraction(fr1.num * fr2.num, fr1.den * fr2.den);
}

function div(fr2) {
    var fr1 = this;
    return new Fraction(fr1.num * fr2.den, fr1.den * fr2.num);
}

function abbr() {
    var fr1 = this;
    var g = gcd(fr1.num, fr1.den);    
    return new Fraction(fr1.num / g, fr1.den / g);
}

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);    
}