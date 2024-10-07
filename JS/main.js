console.log("Hello world")


document.writeln("Hello from JavaScript")

document.getElementById('naslov').innerText = 'Razvoj softvera'

// == poredjenje bez provere tipa
// === poredjenje sa proverom tipa

const a = '3' == 3
console.log('Bez provere tipa = ' + a)

const b = '3' === 3
console.log('Sa proverom tipa = ' + b)

//konstante ne mogu se kasnije menjati
const konstanta = "ABC"

// let se kasnije moze menjati
let promenljiva = "ABC"
promenljiva = "A"

// var isto sto i let
var promenljiva2 = "ABCD"
promenljiva2 = "abcder"

// lambde i fje
let niz = [0, 4, 5, 6, 7]
niz.forEach(e=>console.log(e))
console.log("presek")
niz.filter(e=>e%2).forEach(e=>console.log(e))

//mapiranje objekata
let nizObjekata = [
    {
        id: 1,
        name: 'Pavle'
    },
    {
        id: 2,
        name: 'Mina'
    },
    {
        id: 3,
        name: 'Marko'
    }
]
console.log(nizObjekata)
nizObjekata.forEach(e=>console.log(e))

nizObjekata.push({id:4, name:'Tamara'})
document.getElementById('naslov').innerText = nizObjekata.map(e=>e.id)

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    //alert('Dugme je aktivirano!')
    const input = prompt("Unesite neku vrednost")
    alert("Uneli ste: " + input)
})












