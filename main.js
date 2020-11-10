//1
var myStr = 'Even though "Israel" is country? it is always in the new! news continues to, report on; Jews moving to Israel';
function wordsList(str, subStr) {
    var re = new RegExp('\\.|,|\\?|!|:|;|"', 'g');
    str = str.replaceAll(re, '');
    str = str.toLowerCase();
    var arr = str.split(' ');
    var result = new Set();
    arr.forEach((element) => {
        if (element.indexOf(subStr) > -1) {
            result.add(element);
        }
    });
    return result;
};
 
console.log(wordsList(myStr, 'ew'));
console.log(wordsList(myStr, 'try'));

//2
function getLocalDate(date, isSeconds = false, isISO = false) {
    // var date = new Date(date);
    if (isISO === true) {
        return toISO(date, isSeconds);
    }
    return toDate(date, isSeconds);
}
function toISO(date, isSeconds) {
    var result = date.getUTCFullYear() +
        '-' + pad(date.getUTCMonth() + 1) +
        '-' + pad(date.getUTCDate()) +
        ', ' + pad(date.getHours()) +
        ':' + pad(date.getMinutes());
      return isSeconds === true ? result + ':' + pad(date.getUTCSeconds()) : result;
};

function toDate(date, isSeconds) {
    var result = pad(date.getDate()) +
        '.' + pad(date.getMonth() + 1) +
        '.' + date.getFullYear() +
        ', ' + pad(date.getHours()) +
        ':' + pad(date.getMinutes());
    return isSeconds === true ? result + ':' + pad(date.getSeconds()) : result;
};

function pad(number) {
    return number <= 9 ? `0${number}`.slice(-2) : number;
}

console.log(getLocalDate(new Date("2020-11-15 14:33:22")));
console.log(getLocalDate(new Date("2020-11-15 14:33:22"), true));
console.log(getLocalDate(new Date("2020-11-15 14:33:22"), false, true));
console.log(getLocalDate(new Date("2020-11-15 14:33:22"), true, true));

//3
function getWeekDay(date) {
   var date = new Date(date);
   var days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
    ];
    return days[date.getDay()];
}
console.log(getWeekDay('2019-01-30'));
console.log(getWeekDay('2020-11-09'));
console.log(getWeekDay('2020-11-27'));

//4
function getLocalDay(date) {
    var date = new Date(date);
    var day = date.getDay();
    if (day === 0) day = 7;
    return day;
};
console.log(getLocalDay('2020-11-25'));
console.log(getLocalDay('2020-12-31'));

//5
function getDateAgo(date, days) {
   var date = new Date(date);
  
    date.setDate(date.getDate() - days);
    return pad(date.getDate()) + '.' + pad(date.getMonth() + 1)+ '.' + date.getFullYear();
};
console.log(getDateAgo('2019-01-29', 1));
console.log(getDateAgo('2020-12-31', 1));
 
//6
var Car = function (engine, model, name, year) {
    this.engine = engine;
    this.model = model;
    this.name = name;
    this.year = year;
};
Object.defineProperties(Car.prototype, {
    used: {
     get() {
    var yearNow = new Date().getFullYear();
        return yearNow - this.year > 1 ? 'used' : 'new';
      },
      set(value) {
    var yearNow = new Date().getFullYear();
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
      }
    }
});
Car.prototype.info = function () {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};
  
var car = new Car(2001, 'X6', 'BMV', 2020);
var car2 = new Car(1900, 'Actavia', 'Shkoda', 2016);

console.log(car.info()); 
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info());

//7
function testPerformance(iterations, func) {
    var time = Date.now();
    if (typeof func === 'function') {
        for (var i = iterations; i >= 0; i--) {
            func();
        }
    }
    return Date.now() - time; 
};
function test1() {
    var str = myStr;
    while (str.indexOf('c') !== -1) str = str.replace('c', '');
    while (str.indexOf('o') !== -1) str = str.replace('o', '');
    while (str.indexOf('u') !== -1) str = str.replace('u', '');
    while (str.indexOf('n') !== -1) str = str.replace('n', '');
    while (str.indexOf('t') !== -1) str = str.replace('t', '');
    while (str.indexOf('r') !== -1) str = str.replace('r', '');
    while (str.indexOf('y') !== -1) str = str.replace('y', '');
}
  
function test2() {
    var re = new RegExp('[country]', 'g');
    myStr.replace(re, '');
}
console.log(testPerformance(20, test1));
console.log(testPerformance(80, test2));
console.log(testPerformance(20, 2222));