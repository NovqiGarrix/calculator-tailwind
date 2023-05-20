const input = document.getElementById("input")
const expression = document.getElementById("expression")
const ac = document.getElementById("ac")
const backspace = document.getElementById("backspace")
const persen = document.getElementById("persen")
const bagi = document.getElementById("bagi")
const tujuh = document.getElementById("7")
const delapan = document.getElementById("8")
const sembilan = document.getElementById("9")
const kali = document.getElementById("kali")
const empat = document.getElementById("4")
const lima = document.getElementById("5")
const enam = document.getElementById("6")
const min = document.getElementById("min")
const satu = document.getElementById("1")
const dua = document.getElementById("2")
const tiga = document.getElementById("3")
const plus = document.getElementById("plus")
const nol = document.getElementById("0")
const koma = document.getElementById("koma")
const equal = document.getElementById("equal")

function add(number) {
    const prev = input.innerText
    if (prev === '0'){
        if (number === ',') {
            number = '0,'
        }
        input.innerText = number
        return
    }
    const now = `${prev}${number}`
    input.innerText = now
}

const operations = ['%', 'x', '-', '/', '+']

function addOperation(operation) {
    const expr = input.innerText.slice(-1)
    const isReplace = operations.includes(expr)
    if(isReplace) {
        input.innerText = input.innerText.replace(expr, operation)
        return
    }
    
    add(operation)
}

equal.addEventListener("click", async () => {
    const expr = input.innerText
        .replaceAll("x", "*")
        .replaceAll(',', '.');
    
    const url = new URL("http://api.mathjs.org/v4")
    url.searchParams.set("expr", expr)

    const resp = await fetch(url)
    const hasil = await resp.text()

    expression.innerText = input.innerText
    input.innerText = hasil

})

kali.addEventListener("click", () => {
    addOperation("x")
})

min.addEventListener("click", () => {
    addOperation("-")
})

bagi.addEventListener("click", () => {
    addOperation("/")
})

plus.addEventListener("click", () => {
    addOperation("+")
})

persen.addEventListener("click", () => {
    addOperation("%")
})

backspace.addEventListener("click", () => {
    const prev = input.innerText
    if (prev.length === 1) {
        input.innerText = '0'
        return
    }
    input.innerText = prev.slice(0, prev.length-1)
})

ac.addEventListener("click", () => {
    input.innerText = "0"
    expression.innerText = ''
})

tujuh.addEventListener("click", () => {
    add(7)
})

delapan.addEventListener("click", () => {
    add(8)
})

sembilan.addEventListener("click", () => {
    add(9)
})

empat.addEventListener("click", () => {
    add(4)
})

lima.addEventListener("click", () => {
    add(5)
})

enam.addEventListener("click", () => {
    add(6)
})

satu.addEventListener("click", () => {
    add(1)
})

dua.addEventListener("click", () => {
    add(2)
})

tiga.addEventListener("click", () => {
    add(3)
})

nol.addEventListener("click", () => {
    add(0)
})

koma.addEventListener("click", () => {
    add(',');
})