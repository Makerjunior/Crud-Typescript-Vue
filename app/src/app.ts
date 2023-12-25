import { AddCar } from "./Classes/CreatCar";
import { Db } from "./Database/Database";


 AddCar.creatCars();
 //import express, { Request, Response } from 'express';
import { ICar } from "./interfaces/interfaces";



/*
const app = express();
const port = 3000;

// Rota para obter dados do usuário
app.get('/', (req: Request, res: Response) => {
const concesionaria = new Db();

concesionaria.updateCarJson('JPT9387', {
  ano: 2022,
  marca: 'Atualizado'+ new Date(),
  placa: 'ABC123',
  preco: 28000
});
const s:ICar={
  ano: 2022,
  marca: 'Atualizado'+ new Date(),
  placa: 'ABC123',
  preco: 28000
}
concesionaria.addCarJson(s)

const data = concesionaria.gerData();
  res.json({ data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

*/

const concesionaria = new Db();

concesionaria.updateCarJson('ABC123', {
  ano: 2022,
  marca: 'Atualizado'+ new Date(),
  placa: 'ABC123',
  preco: 28000
});
concesionaria.listCar();

concesionaria.deleteCarJson('XYZ789');
concesionaria.listCar();


