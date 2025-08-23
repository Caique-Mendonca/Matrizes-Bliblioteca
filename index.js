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
}

let linhas = 3
let colunas = 4
let elementos = [4,7,8,9,3,5,4,7,1,4,2,4]
let matriz = new Matrix(linhas, colunas, elementos)

console.table(matriz.A)
console.log(matriz.get(1,2))