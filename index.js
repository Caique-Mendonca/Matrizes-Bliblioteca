class Matrix{
    constructor(rows, cols, elements){
        this.rows = rows
        this.cols = cols
        this.elements = elements

        if(this.rows * this.cols == this.elements.length){
            this.A = new Array(rows)
    
            for(let i = 0; i<rows; i++){
                this.A[i] = new Array(cols)
            }
            
            let k = 0
            for(let i = 0; i<rows; i++){
                for(let j = 0; j<cols; j++){
                    this.A[i][j] = this.elements[k]
                    k++
                }
            }
        }else{
            return "O número de elementos não corresponde ao número de linhas e colunas requeridas"
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
    transpose(a){
        if(!Array.isArray(a[0])){
            let transposto = new Array(a.length)
            for(let i = 0; i < a.length; i++){
                transposto[i] = [a[i]]
            }
            return transposto
        }
        let transposto = new Array(a[0].length)
        
        for(let i = 0; i < a[0].length; i++){
            transposto[i] = new Array(a.length)
            for(let j = 0; j < a.length; j++){
                transposto[i][j] = a[j][i]
            }
        }
        return transposto
    }

    sum(a, b){
        if(!Array.isArray(a[0]) && !Array.isArray(b[0])){
            if(a.length == b.length){
                let soma = new Array(a.length)
                for (let i = 0; i < a.length; i++) {
                    soma[i] = a[i] + b[i]
                }
                return soma
            }else{
                return "Soma impossivel pois a e b tem dimensões diferentes"
            }
        }
        if(a.length == b.length && a[0].length == b[0].length){
            let soma = new Array(a.length)
            for(let i = 0; i < a.length; i++){
                soma[i] = new Array(a[0].length)
            }
    
            for(let i = 0; i < a.length; i++){
                for (let j = 0; j < a[0].length; j++) {
                    soma[i][j] = a[i][j] + b[i][j]
                }
            }
            return soma
        }else{
            return "Soma impossivel pois A e B tem dimensões diferentes"
        }
    }

    times(a, b){
        // numero * vetor
        if(!Array.isArray(a) && !Array.isArray(b[0])){
            let produtoElemento = new Array(b.length)
            for(let i = 0; i < b.length; i++){
                produtoElemento[i] = a * b[i]
            }
            return produtoElemento
        }
        // numero * matriz
        if(!Array.isArray(a) && Array.isArray(b[0])){
            let produtoElemento = new Array(b.length)
            for(let i = 0; i < b.length; i++){
                produtoElemento[i] = new Array(b[0].length)
            }
    
            for(let i = 0; i < b.length; i++){
                for (let j = 0; j < b[0].length; j++) {
                    produtoElemento[i][j] = a * b[i][j]
                }
            }
            return produtoElemento
        }
        // vetor * vetor
        if(!Array.isArray(a[0]) && !Array.isArray(b[0])){
                if(a.length == b.length){
                let produtoElemento = new Array(a.length)
                for (let i = 0; i < a.length; i++) {
                    produtoElemento[i] = a[i] * b[i]
                }
                return produtoElemento
            }else{
                return "Produto elemento a elemento impossivel pois A e B tem dimensões diferentes"
            }
        }

        // matriz * matriz
        if(a.length == b.length && a[0].length == b[0].length){
            let produtoElemento = new Array(a.length)
            for(let i = 0; i < a.length; i++){
                produtoElemento[i] = new Array(a[0].length)
            }
    
            for(let i = 0; i < a.length; i++){
                for (let j = 0; j < a[0].length; j++) {
                    produtoElemento[i][j] = a[i][j] * b[i][j]
                }
            }
            return produtoElemento
        }else{
            return "Produto elemento a elemento impossivel pois A e B tem dimensões diferentes"
        }
    }

    dot(a, b){
        if(!Array.isArray(a[0]) && !Array.isArray(b[0])){
            if(a.length == b.length){
                let produto = 0
                for (let i = 0; i < a.length; i++) {
                    produto += a[i] * b[i]
                }
                return produto
            }else{
                return "Produto impossivel, pois os vetores tem tamanhos diferentes"
            }
        }
        // matriz * matriz
        if(a[0].length == b.length){
            let produto = new Array(a.length)
            for (let i = 0; i < a.length; i++) {
                produto[i] = new Array(b[0].length)
                
            }
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b[0].length; j++) {
                    let soma = 0
                    for (let k = 0; k < a[0].length; k++) {
                        soma += a[i][k] * b[k][j]
                    }
                    produto[i][j] = soma
                }
            }
            return produto
        }else{
            return "Produto impossivel, pois o numero de colunas de A não é igual ao número de linhas de B"
        }
    }

    gauss(a){
        let matrizGauss = new Array(a.length)

        for (let i = 0; i < a.length; i++) {
            matrizGauss[i] = new Array(a[0].length)
        }

        for(let i = 0; i < a.length; i++){
            for (let j = 0; j < a[0].length; j++) {
                matrizGauss[i][j] = a[i][j]
                
            }
        }

        for(let i = 0; i < a.length; i++){
            if(matrizGauss[i][i] === 0){
                let swapRow = i+1
                while(swapRow < matrizGauss.length && matrizGauss[swapRow][i] === 0){
                    swapRow++
                }
                if(swapRow < a.length){
                    [matrizGauss[i], matrizGauss[swapRow]] = [matrizGauss[swapRow], matrizGauss[i]]
                }
            }

            let pivo = matrizGauss[i][i]
            if(pivo !== 0){
                for(let j = i; j < a[0].length; j++){
                    matrizGauss[i][j] /= pivo
                }
            }

            // zerar abaixo do pivo
            for(let k = i+1; k < a.length; k++){
                let factor = matrizGauss[k][i]
                for(let j = i; j < a[0].length; j++){
                    matrizGauss[k][j] -= factor * matrizGauss[i][j]
                }
            }
        }
        
        return matrizGauss

    }

}

// Definir matriz
let linhas = 3
let colunas = 4
let elementos = [4,7,8,9,3,5,4,7,1,4,2,4]
let matriz = new Matrix(linhas, colunas, elementos)

// Matriz 2
let linhas2 = 3
let colunas2 = 4
let elementos2 = [3,8,4,6,0,3,8,7,5,4,6,8]
let matriz2 = new Matrix(linhas2, colunas2, elementos2)

// Definir vetor
let dimensao = 5
let elementosArray = [6,3,8,9,5]
let vetor = new Vector(dimensao, elementosArray)

// Vetor 2
let dimensao2 = 5
let elementosArray2 = [10,5,8,5,12]
let vetor2 = new Vector(dimensao2, elementosArray2)



matriz.set(3,3, 100)
console.table(matriz.A)
console.log(matriz.get(1,2))
console.table(matriz2.A)

vetor.set(3, 69)
console.table(vetor.B)
console.log(vetor.get(4))
console.table(vetor2.B)

let l_algebra = new LinearAlgebra()

// Transposta
console.table(l_algebra.transpose(matriz.A))
console.table(l_algebra.transpose(vetor.B))

// soma
console.table(l_algebra.sum(matriz.A, matriz2.A))
console.table(l_algebra.sum(vetor.B, vetor2.B))

// times
console.table(l_algebra.times(matriz.A, matriz2.A))
console.table(l_algebra.times(vetor.B, vetor2.B))
console.table(l_algebra.times(2, vetor2.B))
console.table(l_algebra.times(2, matriz2.A))

// dot
let matrizA = new Matrix(2, 3, [1,2,3,4,5,6])
let matrizB = new Matrix(3, 2, [7,8,9,10,11,12])
console.table(matrizA.A)
console.table(matrizB.A)
console.table(l_algebra.dot(matrizA.A, matrizB.A))
console.table(l_algebra.dot(vetor.B, vetor2.B))

// gauss
let gauss = new Matrix(3, 3, [1,1,2, 2,4,-3, 3,6,-5])
console.table(l_algebra.gauss(gauss.A))