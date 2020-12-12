export default class App {

    sumatoriaSerieUno(numero) {
        let i
        let suma = 0

        for(i = 1; i <= numero; i++) {
            
            suma = suma + 1/i
            
        } 
            
        return suma
    }

    sumatoriaSerieDos(numero) {
        let i = 1
        let suma = 0
        
        while (i <= numero) {

            if (i == 1) {
                suma = suma + 1
            } else if (i % 2 == 0) {
                suma = suma + 1/i
            } else {
                suma = suma - 1/i
            } 

                i++
        }

        return suma
    }

    esPrimo(numero) {

        let i = 1
        let divisibles = 0

        do {
            
            if (numero % i == 0) {
                divisibles++
            }
            
            i++
        
        } while (i <= numero)

        if(divisibles == 2) {
            return true
        } else
            return false

    }

    obtenerMultiplos(inicio, fin){
        
        let resultado = ""
        let numero = inicio

        do {
            
            if (numero % 3 == 0){
                resultado = resultado + String(numero)
            } 
            numero++
        } while (numero <= fin)

        return resultado
    }

    obtenerImpares(numero1, numero2) {

        let resultado = ""
        let t = 0

        if (numero1 > numero2) {
            t = numero2
            numero2 = numero1
            numero1 = t 
            
        }

        do {

            if ((numero2) % 2 == 1) {
                resultado = resultado + String(numero2)
                if(numero2 != numero1 + 1 && numero2 != numero1 - 1 && numero2 != numero1){
                    resultado = resultado + ","
                }
            }

            numero2--
            
        } while (numero1 <= numero2)

        return resultado

    }

}

let app = new App();

console.log(app.sumatoriaSerieUno(6))
console.log(app.sumatoriaSerieDos(6))
console.log(app.esPrimo(17))
console.log(app.obtenerMultiplos(10, 25))
console.log(app.obtenerImpares(15, 5))
console.log(app.obtenerImpares(2, 10))