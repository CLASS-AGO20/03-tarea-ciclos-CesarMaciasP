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

}

let app = new App();

console.log(app.sumatoriaSerieUno(6))
console.log(app.sumatoriaSerieDos(6))
console.log(app.esPrimo(17))
