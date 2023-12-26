// carRoutes.ts
import express, { Request, Response } from 'express';
import { data } from '../Database/Database';
import { ICar } from '../interfaces/interfaces';

const router = express.Router();

// Rota para obter dados
router.get('/', (req: Request, res: Response) => {
  const api = data.getDados();
  res.json({ api });
});

// Rota para adicionar um novo carro
router.post('/addCar', (req: Request, res: Response) => {
  const newCar: ICar = req.body;
  const api = data.addNewCar(newCar);
  res.json({ api });
});

router.delete('/delete', (req: Request, res: Response) => {
    const newCar: ICar = req.body;
    const api = data.deleteCar(newCar.placa);
    res.json({ api });
  });

  router.post('/update', (req: Request, res: Response) => {
    const newCar: ICar = req.body;
    const api = data.updateCar(newCar);
    res.json({ api });
  });

export default router;
