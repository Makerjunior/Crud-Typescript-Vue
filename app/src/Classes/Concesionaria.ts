import { ListCar } from "../Tips/Tipos";
import { ICar } from "../interfaces/interfaces";

class Concesionaria {
    public Caros: ICar[];

    constructor() {
        this.Caros = [];
       
    }

    adicionarCarro(novoCarro: ListCar): void {
    novoCarro.crs.find((v)=>{
        this.Caros.push(v);
    })
    }

    removerCarro(carroRemovido: ICar): void {
        const indice = this.Caros.findIndex(carro => carro.placa === carroRemovido.placa);
        if (indice !== -1) {
            this.Caros.splice(indice, 1);
        }
    }

    public statusC(): void {
        this.Caros.forEach((v) => {
            console.log(`Placa do ${v.marca} é ${v.placa} - ${v.ano}`);
        });
    }
}

export  const Comcesionaria = new Concesionaria();