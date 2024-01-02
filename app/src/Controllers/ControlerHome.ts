
// App.ts
import express from 'express';
import carRoutes from './carRoutes';
import cors from 'cors';
/** Class App responsable for configuring the application, startting
 *  the server, port,niddeware and calling routes in external file.
 * @class
 */
export class App {
  /**
   * @param {Object} server Server express
   * @param {number} port Port aplication
   * @type {*}
   * @memberof App
   */
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
    this.server.use(cors()); // Use o middleware cors aqui

  }

  setupRoutes() {
    // Use routes in external file
    this.server.use('/', carRoutes);
  }
  /**
   *Method to start the server
   * @memberof App
   */
  startServer() {
    this.server.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

