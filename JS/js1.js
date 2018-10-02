var car = {};
car.manufacturer = 'Nissan';
car.model = 'Leaf';
car.year = 2016;
car.speed = 90;

car.printInfo = function () {
    var str = '';
    var arr = Object.keys(this);
    for (var i = 0; i < 4; i++) {        
        str += arr[i]  + ' ' + this[arr[i]] + '<br/>';        
    }
    return str;
}

car.getTime = function () {
    var dist = prompt("input distance");
    var time = dist / this.speed;
    var o = time / 4;
    time += Math.floor(o);
    var h = Math.floor(time);
    var m = Math.round(60 * (time - h));
    return h + " h. " + m + " min.";

}


