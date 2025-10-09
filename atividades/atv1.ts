let numeros = [3, 5, 7, 3, 8, 9, 1]

// a) Usando for
console.log("=== Quadrado com for ===")
for (let i = 0; i < numeros.length; i++) {
    console.log(`O quadrado de ${numeros[i]} é ${numeros[i] * numeros[i]}`)
}

// b) Usando forEach
console.log("\n=== Quadrado com forEach ===")
numeros.forEach(n => console.log(`O quadrado de ${n} é ${n * n}`))