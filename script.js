var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

const multiply1 = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
const add5 = curriedSum1(5)
add5(12)

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
compose(add1, add6)(10)



// advance array

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach', double);

// map

const mapArray = array.map(num => num * 3);

console.log('map', mapArray);

//filter

const filterArray = array.filter(num => {
    return num > 10
})

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
})

console.log('reduce', reduceArray);


// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


// context vs scope

const object4 = {
    a: function () {
        console.log(this);
    }
}


// instantation

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');









