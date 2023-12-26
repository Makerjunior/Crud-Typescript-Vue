import * as fs from "fs";
import { ICar } from "../interfaces/interfaces";

export class Db {
  private data: any;
  private filePath: string = "db.json";

  constructor() {
    const fileContent = fs.readFileSync(this.filePath, "utf-8");
    this.data = JSON.parse(fileContent).Carros;
  }
  public getDados() {
    return this.data;
  }

  public addNewCar(newCar: ICar) {
    this.data.push(newCar);
    fs.writeFileSync(
      this.filePath,
      JSON.stringify({ Carros: this.data }, null, 2)
    );
  }

  public updateCar(car: ICar): void {
    const { ano, marca, placa, preco } = car;
    this.data.find((v: any) => {
      if (v.placa == car.placa) {
        v.ano = ano;
        v.marca = marca;
        v.placa = placa;
        v.preco = preco;
      }
      fs.writeFileSync(
        this.filePath,
        JSON.stringify({ Carros: this.data }, null, 2)
      );
    });
  }

  public deleteCar(_placa: string): void {
    this.data = this.data.filter((carro: ICar) => carro.placa !== _placa);
    fs.writeFileSync(
      this.filePath,
      JSON.stringify({ Carros: this.data }, null, 2)
    );
  }
}

export const data = new Db();
