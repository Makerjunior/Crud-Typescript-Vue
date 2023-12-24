import { AddCar } from "./Classes/CreatCar";
import { Db } from "./Database/Database";

 //AddCar.creatCars();

const concesionaria = new Db();
concesionaria.listCar();
concesionaria.updateCarJson('ABC123', {
  ano: 2022,
  marca: 'Atualizado'+ new Date(),
  placa: 'ABC123',
  preco: 28000
});
concesionaria.listCar();

concesionaria.deleteCarJson('XYZ789');
concesionaria.listCar();


