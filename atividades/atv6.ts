
interface Operacao {
    calcular(): number
}

class Retangulo implements Operacao {
    constructor(public largura: number, public altura: number) {}
    calcular(): number {
        return this.largura * this.altura
    }
}

class Circulo implements Operacao {
    constructor(public raio: number) {}
    calcular(): number {
        return Math.PI * this.raio * this.raio
    }
}

console.log("\n=== Teste das classes ===")
let ret = new Retangulo(5, 4)
let circ = new Circulo(3)
console.log(`Área do retângulo: ${ret.calcular()}`)
console.log(`Área do círculo: ${circ.calcular().toFixed(2)}`)
