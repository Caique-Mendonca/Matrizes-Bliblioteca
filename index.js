class Matrix{
    constructor(rows, cols, elements){
        this.rows = rows
        this.cols = cols
        this.elements = elements

        this.A = new Array(rows)

        for(let i = 0; i<rows; i++){
            this.A[i] = new Array(cols)
        }
        
        let k = 0
        for(let i = 0; i<rows; i++){
            for(let j = 0; j<cols; j++){
                this.A[i][j] = elements[k]
                k++
            }
        }

    }

    get(i, j){
        return `A posição A[${i}][${j}] é ${this.A[i-1][j-1]}`
    }

    set(i, j, value){
        this.A[i-1][j-1] = value
    }
}

class Vector{
    constructor(dim, elements){
        this.dim = dim
        this.elements = elements

        this.B = new Array(dim)
        for (let i = 0; i < dim; i++){
            this.B[i] = elements[i]
        }
    }

    get(i){
        return `O valor do indice ${i} é ${this.B[i-1]}`
    }

    set(i, value){
        this.B[i-1] = value
    }
}

class LinearAlgebra{
    // transpose(a){
    //     let transposto = new Array(a[1].length)
    //     for(let i = 0; i < a[1].length; i++){
    //         for(let j = 0; j < a.length; j++){
    //            transposto[i][j] = a[i][j]
    //         }
    //     }
    // }
 }

// Definir matriz
let linhas = 3
let colunas = 4
let elementos = [4,7,8,9,3,5,4,7,1,4,2,4]
let matriz = new Matrix(linhas, colunas, elementos)

// Definir vetor
let dimensao = 5
let elementosArray = [6,3,8,9,5]
let vetor = new Vector(dimensao, elementosArray)



matriz.set(3,3, 100)
console.table(matriz.A)
console.log(matriz.get(1,2))

vetor.set(3, 69)
console.log(vetor.B)
console.log(vetor.get(4))

let l_algebra = new LinearAlgebra()
console.log(l_algebra.transpose(matriz.A))
