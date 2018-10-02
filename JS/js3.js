function Clock(h, m, s) {
    this.hours = h === undefined ? 0 : h;
    this.minutes = m === undefined ? 0 : m;
    this.seconds = s === undefined ? 0 : s;
    if (this.seconds >= 60) {
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;
    }
    if (this.minutes >= 60) {
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
    }
    if (this.hours >= 24) {        
        this.hours = this.hours % 24;
    }
    this.show = showTime;
    this.calc = calc;
    this.addSec = addSec;
    this.addMin = addMin;
    this.addHour = addHour;
    this.copy = copy;

}

function copy() {
    return new Clock(this.hours, this.minutes, this.seconds);
}

function calc() {
    if (this.seconds >= 60) {
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;
    }
    if (this.minutes >= 60) {
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
    }
    if (this.hours >= 24) {
        this.hours = this.hours % 24;
    }
}

function addSec(sec) {
    this.seconds += sec;
    this.calc();
}
function addMin(min) {
    this.minutes += min;
    this.calc();
}
function addHour(hour) {
    this.hours += hour;
    this.calc();
}

function showTime() {
    return this.hours + " : " + this.minutes + " : " + this.seconds;
}