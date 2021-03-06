// Simulacion de tienda virtual mediante prompt
let producto;
let vehiculo;
let modelo;
let item;

let producto1;
let producto2;
let producto3;

class Producto{
    constructor(){
        this.vehiculo = vehiculo;
        this.modelo = modelo;
        this.item = item;
    }
}

function mensajeBienvenida(){
    return prompt(`Bienvenidos a la tienda online de Weskan. Seleccione un numero:
                        1- Comprar (Puede comprar hasta 3 productos)
                        2- Ver Carrito
                        3- Finzalizar Compra`);
}

function comprar(a, b, c){
    let salir = 0;
    while(salir == 0){
        let opcion = prompt(`Seleccione un numero:
                            1- ${a}
                            2- ${b}
                            3- ${c}`)
        switch(opcion){
            case '1':
                salir = 1;
                return a;
                break;
            case '2':
                salir = 1;
                return b;
                break;
            case '3':
                salir = 1;
                return c;
                break;
            default:
                break
        }
    }
}

function mostrarProducto(num){
    switch(num){
        case 1:
            return console.log(`Producto: ${producto1.item} de ${producto1.modelo} para ${producto1.vehiculo}`);

        case 2:
            return console.log(`Producto: ${producto2.item} de ${producto2.modelo} para ${producto2.vehiculo}`);

        case 3:
            return console.log(`Producto: ${producto3.item} de ${producto3.modelo} para ${producto3.vehiculo}`);

        default:
            return;
    }
}

function asignarProducto(posicion){
    switch(posicion){
        case 0:
            producto1 = new Producto();
            break;

        case 1:
            producto2 = new Producto();
            break;

        case 2:
            producto3 = new Producto();
            break;
    }
    return;
}

let i = 0;
let salir = 0;
while((i <=2) && salir == 0){
    switch(mensajeBienvenida()){
        case '1':
            vehiculo = comprar("Auto", "Moto","-");
            if(vehiculo == 'Auto'){
                modelo = comprar("BMW", "Mercedes Benz","-");
                item = comprar("Asiento de valvula", "Guia de Valvula", "Valvula");
            }
            else{
                modelo = comprar("Yamaha", "Kawasaki","-");
                item = comprar("Asiento de valvula", "Guia de Valvula", "Valvula");
            }
            asignarProducto(i);
            i++;
            break;
        
        case '2':
            for(let j = 0; j <= i; j++){
                mostrarProducto(j);
            }
            break;

        case '3':
            salir = 1;
            break;
    }
}

for(let k = 0; k<= i; k++){
    mostrarProducto(k);
}
