import { ICar } from "../interfaces/interfaces";
import { data } from "../Database/Database";

export class AddCar {
  constructor() {}
  static creatCars() {
   for (let i = 0; i < 20; i++) {
      const novoCarro: ICar = {
        ano: 2022,
        marca: `Carro${i + 1}`,
        placa: `XYZ${i + 1000}`,
        preco: 25000 + i * 1000,
      };
      data.addNewCar(novoCarro);
    }
  }
}

