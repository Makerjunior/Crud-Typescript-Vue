// Função de fábrica de decorator com parâmetros
/**
 * Decorator to get log messages
 * @export
 * @param {string} [prefix]
 * @param {boolean} [retur]
 * @return {*} 
 */
export function Logger(prefix?: string, retur?: boolean) {
  // A função do decorator real
  if (!prefix) {
    prefix = "INFO";
  }

  return function (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(
        `[${new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        })}] ${prefix} - Método ${key} iniciado com argumentos: ${JSON.stringify(
          args
        )}`
      );

      // Chamada original do método
      const result = originalMethod.apply(this, args);
      if (retur) {
        console.log(
          `[${new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo",
          })}] ${prefix} - Método ${key} finalizado com resultado: ${JSON.stringify(
            result
          )}`
        );
      }

      return result;
    };

    return descriptor;
  };
}
