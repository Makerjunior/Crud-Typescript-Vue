import * as fs from "fs";
import { ICar } from "../interfaces/interfaces";
import { readData } from "../Classes/updateData";

export class Db {
  private data: any;
  
  
  constructor() {
      this.data = readData.getdata();
  }
  public getDados() {
    return this.data;
  }

  public addNewCar(newCar: ICar) {
    this.data.push(newCar);
    readData.serData(this.data)
    this.getDados();
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
      readData.serData(this.data)
      this.getDados();
    
    });
  }

  public deleteCar(_placa: string): void {
    this.data = this.data.filter((carro: ICar) => carro.placa !== _placa);
    readData.serData(this.data)
    this.getDados();
  }
}

export const data = new Db();
