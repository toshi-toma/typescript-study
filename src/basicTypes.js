// Boolean
var isDone = false;
// Number
var decimal = 10;
// String
var color = 'blue';
// Array, generic array type
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
var x;
x = ['number', 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// any
var notSure = 4;
notSure = 'string';
// void
function warnUser() {
    console.log('This is my warning message');
}
// null, undefined
var u = undefined;
var n = null;
// never
function error(message) {
    throw new Error(message);
}
create({ prop: 0 });
// type assertions
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength2 = someValue.length;
