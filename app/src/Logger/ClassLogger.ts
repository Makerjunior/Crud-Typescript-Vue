import * as fs from 'fs';

class Logger {
  private static logFilePath = 'app.log';

  private static writeToFile(message: string): void {
    fs.appendFileSync(Logger.logFilePath, `${message}\n`, 'utf-8');
  }

  static log(message: string): void {
    // Exibe no terminal
    console.log(message);
    
    // Escreve no arquivo de log
    Logger.writeToFile(message);
  }

  static error(message: string): void {
    // Exibe no terminal com formatação de erro
    console.error(`Error: ${message}`);

    // Escreve no arquivo de log
    Logger.writeToFile(`[Error] ${message}`);
  }

  static clearLogFile(): void {
    // Limpa o conteúdo do arquivo de log
    fs.writeFileSync(Logger.logFilePath, '', 'utf-8');
  }
}

export default Logger;



