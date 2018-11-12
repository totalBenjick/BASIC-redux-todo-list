/*

ADD CLASS
ES5
function Runner( name, kilometers, hours) {
    this.name= name;
    this.kilometers = kilometers;
    this.hours= hours;
    this.setSpeed(kilometers, hours);
}

Runner.prototype.setSpeed = function(km,h){
    this.speed = km/h
}

ES6
    class Runner {
        constructor(name,kilometers,hours){
            this.name= name;
            this.kilometers=kilometers;
            this.hours=hours;
            this.setSpeed(kilometers, hours);
        }

        setSpeed(km,h){
            this.speed = km/h
        }
    }

SPREAD OPERATOR

ES5

function unshift(items, candidates) {//candidates only contains first candidate passed
    return [candidates].concat(items)
}

FOREACH
var fruits = ["kiwi","atermelon","strawberry"];
var result = unshift(fruits, "banana", "apple");

console.log(result);   // ["banana", "kiwi", "watermelon", "strawberry"]


const brands = ["Bmw", "Audi", "Ford", "Tesla"]
brands.forEach(brand => console.log(brand))

MAP
const arr = [{name:”James”,age:18}, {name:”Alice”,age:20}]
const display = arr.kmap(person => person.name)
console.log(display)

FILTER

pick only the yellows

const fruits = [
 {name:”banana”,color:”yellow”},
 {name:”watermelon”,color:”red”},
 {name:”orange”,color:”orange”}
]

const filteredFrits = fruits.filter(fruit => fruit.color==='yellow')

console.log(filteredFruits)














*/
