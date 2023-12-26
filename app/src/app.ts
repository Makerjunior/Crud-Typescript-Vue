import { data } from "./Database/Database";

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  const api = data.getDados();
  res.json({ api });
});

app.post("/addcar", (req: Request, res: Response) => {
  const novoCarro = req.body;
  data.addNewCar(novoCarro);
  res.json({ message: "Carro adicionado com sucesso" });
});

app.delete("/deletecar", (req: Request, res: Response) => {
  const novoCarro = req.body;
  data.deleteCar(novoCarro.placa);
  res.json({ message: "Carro deletado com sucesso" });
});

app.put("/updatecar", (req: Request, res: Response) => {
  const novoCarro = req.body;
  data.updateCar(novoCarro);
  res.json({ message: "Carro atualizado com sucesso" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
