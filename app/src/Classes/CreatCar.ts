import { ICar } from "../interfaces/interfaces";
import { Db } from "../Database/Database";

export class AddCar {
  private static carros:ICar[]=[];
  constructor() {}
  static creatCars() {
   for (let i = 0; i < 20; i++) {
      const novoCarro: ICar = {
        ano: 2022,
        marca: `Carro${i + 1}`,
        placa: `XYZ${i + 1000}`,
        preco: 25000 + i * 1000,
      };
      this.carros.push(novoCarro);
    }
    const concesionaria = new Db();
    concesionaria.addCarJson(this.carros)
  }
}

