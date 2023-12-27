import * as fs from "fs";
export class readData {

    static  filePath: string = "db.json";
    static data: any;
    static getdata(){
        const fileContent = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(fileContent).Carros;
    }
    
    static serData(data:{}){
        fs.writeFileSync(
            this.filePath,
            JSON.stringify({ Carros: data }, null, 2)
          );
      }
   
}