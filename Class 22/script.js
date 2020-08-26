var a = 33;
var b = 20;

// Arithmetic Operator 
var sum = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;

document.write("ARITHMETIC OPERATOR " + "<br>");
document.write("sum: " + sum + "<br>");
document.write("sub: " + sub + "<br>");
document.write("mul: " + mul + "<br>");
document.write("div: " + div + "<br>");

// Increment / Decrement 
var val = 4;
document.write("INCREMENT / DECREMENT " + "<br>");
document.write("post increment: " + (val++) + "<br>");
document.write("pre increment: " + (++val) + "<br>");

document.write("post decrement: " + (val--) + "<br>");
document.write("pre decrement: " + (--val) + "<br>");

// Assignment Operator 
var x = 20;
document.write("ASSIGNMENT OPERATOR: " + "<br>");
document.write("temp value x: " + x + "<br>");
x += 2;
document.write("after assign + x: " + x + "<br>");
x -= 5;
document.write("after assign - x: " + x + "<br>");



// String
var str1 = "Learning And ";
var str2 = "Earning Development";

document.write("STRING " + "<br>");
// var concate = st1
document.write(" string concate: " + (str1 + str2) + "<br>");


// Logical Operator
document.write("COMPARISON OPERATOR " + "<br>");
var p = 20;
var q = 20;
var t = 22;
if (p == q) {
    document.write("True");
}
document.write("<br>Same Type" + "<br>");
var check = p == t;
document.write("<br>" + check);

var dcheck = p === q;
document.write("<br>" + dcheck);

document.write("<br>Different Type" + "<br>");
var v = '20';
check = p == v;
document.write("<br>" + check);

dcheck = p === v;
document.write("<br>" + dcheck);

check = p != t;
document.write("<br>" + check);

// Ignoring &&, || ! operators 


// TYPE 
document.write("<br>" + typeof (p) + "<br>");
var name = "HK";
document.write(typeof (name) + "<br>");
document.write(typeof (check) + "<br>");

var obj = {
    'name': "HK",
    'email': "mhkm@email.com",
    'sex': "male"
};
document.write(typeof (obj) + "<br>");

// Ignoring Bitwise Operator  &, |, >>, << 






