// carRoutes.ts
import express, { Request, Response } from 'express';
import { data } from '../Database/Database';
import { ICar } from '../interfaces/interfaces';
/* Router Object for handling application routes */
const router = express.Router();

// Router to get data
router.get('/', (req: Request, res: Response) => {
  const api = data.getDados();
  res.json({ api });
});

// Router to add data
router.post('/addCar', (req: Request, res: Response) => {
  const newCar: ICar = req.body;
  const api = data.addNewCar(newCar);
  res.json({ api });
});
/*Router to delete data */
router.post('/delete', (req: Request, res: Response) => {
  const newCar = req.body;
  const api = data.deleteCar(newCar.placa);
  res.json({ api });
});
/**Router to update data */
router.post('/update', (req: Request, res: Response) => {
  const newCar: ICar = req.body;
  const api = data.updateCar(newCar);
  res.json({ api });
});

export default router;
