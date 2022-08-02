/*//2 raise 2//
let twoRaiseTo2 = Math.pow(2, 2)
console.log('2 raise to the power of 2 is; ', twoRaiseTo2)
//2 raise to 2//
let twoRaiseTo3 = Math.pow(2, 3)
console.log('2 raise to the power of 3 is; ', twoRaiseTo3)
//6 raise to the power of 6//
let sixRaiseToPower2 = Math.pow(6, 2)
console.log('6 raise to the power of 2 is; ', sixRaiseToPower2)
//function declaration or named function//

function square(){
    console.log(2**2)

}
//for (let count =1; count <=10; count++){//
//invoke or call or use a function//
//square()
square()
square()
square()
square()

function printName(){
    console.log('Gift Chinwendu')
}
//invoke
printName()

function multiply(){
    let number1 = 2
    let number2 = 4

    let product = number1 * number2

    let message= '2 times 4 is ' + product

    console.log(message)
}
//invoke
multiply()

function addition(){
    let number1 = 4
    let number2 = 4

    let add = number1 + number2

    let message= '4 plus 4 is ' + add

    console.log(message)
}
//invoke
addition()

function division(){
    let number1 = 16
    let number2 = 2

    let divide = number1 / number2

    let message= '16 divide 2 is ' + divide

    console.log(message)
}
//invoke
division()

function subtraction(){
    let number1 = 10
    let number2 = 2

    let subtract = number1 - number2

    let message= '10 subtract 2 is ' + subtract

    console.log(message)
}
//invoke
subtraction()*/

function times(a,b){
    let product= a + b
    console.log(product)
}
times(2,2)

/*7+8*3-2
functions to be created
addition
multiplication
subtraction*/
/*function subtract(a,b){
    let subtract= a-b
    console.log(subtract)
}*/
function multiplication(a,b){
    let multiplication= a * b
    console.log(multiplication)
    return multiplication
}
//invoke
let m= multiplication(8,3)
console.log(m)
//7+m-2
function addition(a,m){
    let addition= a + m
    console.log(addition)
    return addition
}
//invoke
let d= addition(7,m)
console.log(d)
//d-2
function subtract(d,a){
    let subtract= d - a
    console.log(subtract)
}
//invoke
subtract(d,2)
