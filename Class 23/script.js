document.write("<br>");

function test_func() {
    document.write("Learning And Earning Development <br>");
}

test_func();
test_func();
test_func();

document.write("<br>");

function test_funct(x) {
    document.write("Value of x: " + x + "<br>");
}
test_funct(123);
test_funct(12.54);
test_funct("Humayun Kabir");

document.write("<br>");

function test_fn(a, b, c) {
    document.write(a + "<br>");
    document.write(b + "<br>");
    document.write(c + "<br>");
}
test_fn(10, 20, 30);

function add(a, b) {
    return a + b;
}
var x = add(50, 60);
document.write(x);
document.getElementById("test").innerHTML = x;


var student = {
    firstname: "Humayun",
    lastname: "Kabir",
    roll: "140108",
    // email = "mhkm@email.com"
    full_name: function () {
        return this.firstname + " " + this.lastname;
    }
};

document.write("<br>" + student.firstname);
document.write("<br>" + student.full_name() + "<br>");


// JAVASCRIPT EVENTS 
function display(event) {
    if (event == 'onload') {
        document.getElementById("view").innerHTML = "JS Event " + event + " has been called <br>";
    }
    document.getElementById("view1").innerHTML = "JS Event " + event + " has been called <br>";
}
