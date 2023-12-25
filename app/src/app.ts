import { AddCar } from "./Classes/CreatCar";
import { Db } from "./Database/Database";


 //AddCar.creatCars();
 import express, { Request, Response } from 'express';




const app = express();
const port = 3000;

// Rota para obter dados do usuário
app.get('/', (req: Request, res: Response) => {
const concesionaria = new Db();
const data = concesionaria.listCar();
  res.json({ data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




/*
concesionaria.updateCarJson('ABC123', {
  ano: 2022,
  marca: 'Atualizado'+ new Date(),
  placa: 'ABC123',
  preco: 28000
});
concesionaria.listCar();

concesionaria.deleteCarJson('XYZ789');
concesionaria.listCar();
*/

