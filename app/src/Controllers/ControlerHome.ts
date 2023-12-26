
// App.ts
import express from 'express';
import carRoutes from './carRoutes'; // Importe as rotas de carros

export class App {
  public server: any;
  private port: number = 3000;

  constructor() {
    this.server = express();
    this.config();
    this.setupRoutes();
    this.startServer();
  }

  config(): void {
    this.server.use(express.json());
  }

  setupRoutes() {
    // Use as rotas de carros definidas no arquivo separado
    this.server.use('/', carRoutes);
  }

  startServer() {
    this.server.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}


/*

import express, { Request, Response } from "express";
import { data } from "../Database/Database";
import { ICar } from "../interfaces/interfaces";

export class App {
  public server: any;
  private port: number = 3000;

  constructor() {
    this.server = express();
    this.config();
    this.setupRoutes();
    this.startServer();
  }

  config(): void {
    this.server.use(express.json());
  }

  setupRoutes() {
    // Rota para obter dados
    this.server.get("/", (req: Request, res: Response) => {
      const api = data.getDados();
      console.log(api);
      res.json({ api });
    });

    // Rota para adicionar um novo carro
    this.server.post("/addCar", (req: Request, res: Response) => {
      const newCar: ICar = req.body;
      const api = data.addNewCar(newCar);
      res.json({ api });
    });
  }

  startServer() {
    this.server.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}
*/