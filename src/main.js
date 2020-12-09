export default class App {

    sumatoriaSerieUno(numero) {
        let i
        let suma 
        suma = 0

        for(i = 1; i <= numero;i++) {
            suma = suma + i
        }

        return suma
    }
    
}

let app = new App();

console.log(app.sumatoriaSerieUno(6))