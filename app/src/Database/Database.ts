import * as fs from 'fs';
import { ICar, ListCar } from '../interfaces/interfaces';

const path = 'db.json';

/**
 *
 *
 * @export
 * @class Db
 */
export class Db {

  /**
   *
   * Return all data from the database using the ListCar interfece
   * @private
   * @return {*}  {ListCar}
   * @memberof Db
   */
  private readFilesJson(): ListCar {
    try {
      const conteudo = fs.readFileSync(path, 'utf-8');
      return JSON.parse(conteudo);
    } catch (erro) {
      console.error('Erro reading JSON:', erro);
      return { crs: [] };
    }
  }

  /**
   *
   * Write to file database
   * @private
   * @param {ListCar} dataFile
   * @memberof Db
   */
  private writeFileJson(dataFile: ListCar): void {
    fs.writeFileSync(path, JSON.stringify(dataFile, null, 2));
  }
/**
 * Adds a Car to the database
 * @param {ICar[]} carros
 * @memberof Db
 */
public addCarJson(carros: ICar[]): void {
    const dataFile = this.readFilesJson();
    dataFile.crs.push(...carros);
    this.writeFileJson(dataFile);
    console.log('Added successfully.');
  }

  public updateCarJson(placa: string, novoCarro: ICar): void {
    const dataFile = this.readFilesJson();
    const indice = dataFile.crs.findIndex(carro => carro.placa === placa);

    if (indice !== -1) {
      dataFile.crs[indice] = novoCarro;
      this.writeFileJson(dataFile);
      console.log('Update in Car.');
    } else {
      console.error('Car not found for update.');
    }
  }

  public deleteCarJson(placa: string): void {
    const dataFile = this.readFilesJson();
    const indice = dataFile.crs.findIndex(carro => carro.placa === placa);

    if (indice !== -1) {
      dataFile.crs.splice(indice, 1);
      this.writeFileJson(dataFile);
      console.log('Car removed successfull.');
    } else {
      console.error('Car not .');
    }
  }

  public listCar(): void {
    const dataFile = this.readFilesJson();
    console.log('List of Car:', dataFile.crs);
  }
}
