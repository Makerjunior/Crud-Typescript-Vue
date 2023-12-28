import * as fs from "fs";
import { Logger } from "../Logger/Logger";
/**
 *Static classe use to read and write database
 * @export
 * @class readData
 */
export class readData {
    /**
     * @static
     * @type {string}
     * @memberof readData
     */
    static filePath: string = "app/src/Database/db.json";
    static data: any;
    /**
     * Static method for reading the json database
     * @memberof readData
     * @returns {}
     */ 
    @Logger("Lendo arquivo!")
    static getdata() {
        const fileContent = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(fileContent).Carros;
    }
    /**
     * Method to salve data in database
     * @static
     * @param {{}} data
     * @memberof readData
     */
    static serData(data: {}) {
        fs.writeFileSync(
            this.filePath,
            JSON.stringify({ Carros: data }, null, 2)
        );
    }

}