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
  private data: any[] | undefined;

    constructor(){
        const filePath = 'db.json';
        const fileContent = fs.readFileSync(filePath, 'utf-8');
       this.data=JSON.parse(fileContent);
    }
  public readFilesJson() {
    return this.data;
  }

  public addNewCar(newCar:any[]){
    this.data?.push(newCar);
  }
 
}


const d = new Db();
console.log('Reading db',d.readFilesJson());
const n = {ano:"2020", marca:"novo",placa:"knd5674",preco:4093};


d.readFilesJson();