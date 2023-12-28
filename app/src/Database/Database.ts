
import { ICar } from "../interfaces/interfaces";
import { readData } from "../Carros/updateData";
/**
 *Class responsible for integration with the database
 * @export
 * @class Db
 */
export class Db {
  /**
   * Parameter that will read data from the database
   * @private
   * @type {*}
   * @memberof Db
   */
  private data: any;

  /**
   * Creates an instance of Db, and read data in database.
   * @construct 
   */
  constructor() {
    this.data = readData.getdata();
  }
  /**
   * Method to get data in database
   * @return {*} 
   * @memberof Db
   */
  public getDados() {
    return this.data;
  }

  /**
   * Method use to add car in database
   * @param {ICar} newCar
   * @memberof Db
   */
  public addNewCar(newCar: ICar) {
    this.data.push(newCar);
    readData.serData(this.data)
    this.getDados();
  }
  /**
   * Method use to update car in database
   *
   * @param {ICar} car -  Receive a new car as a parameter
   * @memberof Db
   * 
   */
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
  /**
   * Method to delete car in database
   * @param {string} _placa
   * @memberof Db
   */
  public deleteCar(_placa: string): void {
    this.data = this.data.filter((carro: ICar) => carro.placa !== _placa);
    readData.serData(this.data)
    this.getDados();
  }
}
/**Object representing the database */
export const data = new Db();
