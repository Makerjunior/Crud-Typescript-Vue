import * as fs from 'fs';
class ArrayManipulator {
    private myArray: any[];
  
    constructor() {
      this.myArray = [];
    }
  
    // Getter
    public getArray(): any[] {
      return this.myArray;
    }
  
    // Setter
    public setArray(newArray: any[]): void {
      this.myArray = newArray;
    }
  }
  
  // Exemplo de uso
  const arrayManipulator = new ArrayManipulator();
  
  // Obter o array inicial
  const initialArray = arrayManipulator.getArray();
  //console.log("Array inicial:", initialArray);
  
  // Definir um novo array
  const newArray = [1, 2, 3, 4, 5];
  arrayManipulator.setArray(newArray);
  
  // Obter o array atualizado
  const updatedArray = arrayManipulator.getArray();
 // console.log("Array atualizado:", updatedArray);
  
 const filePath = 'db.json';
 const fileContent = fs.readFileSync(filePath, 'utf-8');
 console.log(JSON.parse(fileContent).Carros.push({ ano: 2022, marca: 'Tudo certo0000000', placa: 'JPT9387', preco: 28000 }));