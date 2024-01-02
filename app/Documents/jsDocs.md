Aqui estão algumas das tags JSDoc mais comuns e suas aplicações:

1. **`@param`**: Descreve um parâmetro de uma função ou método.

   ```javascript
   /**
    * Função que adiciona dois números.
    *
    * @param {number} a - O primeiro número.
    * @param {number} b - O segundo número.
    * @returns {number} A soma de a e b.
    */
   function adicionar(a, b) {
     return a + b;
   }
   ```

2. **`@returns`**: Descreve o valor retornado por uma função ou método.

   ```javascript
   /**
    * Função que multiplica dois números.
    *
    * @param {number} a - O primeiro número.
    * @param {number} b - O segundo número.
    * @returns {number} O produto de a e b.
    */
   function multiplicar(a, b) {
     return a * b;
   }
   ```

3. **`@throws`**: Descreve exceções que uma função ou método pode lançar.

   ```javascript
   /**
    * Função que divide dois números.
    *
    * @param {number} a - O numerador.
    * @param {number} b - O denominador.
    * @returns {number} O resultado da divisão.
    * @throws {Error} Se b for zero.
    */
   function dividir(a, b) {
     if (b === 0) {
       throw new Error('Não é possível dividir por zero.');
     }
     return a / b;
   }
   ```

4. **`@type`**: Especifica o tipo de uma variável ou retorno de função.

   ```javascript
   /**
    * @type {string}
    */
   let nome = 'John';
   ```

5. **`@typedef`**: Define um novo tipo de dados.

   ```javascript
   /**
    * @typedef {Object} Pessoa
    * @property {string} nome - O nome da pessoa.
    * @property {number} idade - A idade da pessoa.
    */
   ```

6. **`@class`**: Documenta uma classe.

   ```javascript
   /**
    * Classe representando um carro.
    *
    * @class
    */
   class Carro {
     // ...
   }
   ```

7. **`@constructor`**: Documenta o construtor de uma classe.

   ```javascript
   /**
    * Construtor da classe Carro.
    *
    * @constructor
    * @param {string} modelo - O modelo do carro.
    * @param {string} cor - A cor do carro.
    */
   constructor(modelo, cor) {
     this.modelo = modelo;
     this.cor = cor;
   }
   ```

8. **`@property`**: Documenta uma propriedade de uma classe ou objeto.

   ```javascript
   /**
    * Classe representando um círculo.
    *
    * @class
    */
   class Circulo {
     /**
      * @property {number} raio - O raio do círculo.
      */
     // ...
   }
   ```

9. **`@enum`**: Documenta um conjunto de valores enum.

   ```javascript
   /**
    * Enumeração representando dias da semana.
    *
    * @enum {string}
    */
   const DiasDaSemana = {
     DOMINGO: 'Domingo',
     SEGUNDA: 'Segunda',
     // ...
   };
   ```

10. **`@example`**: Fornece exemplos de uso.

    ```javascript
    /**
     * Função que retorna o quadrado de um número.
     *
     * @param {number} x - O número para o qual calcular o quadrado.
     * @returns {number} O quadrado de x.
     *
     * @example
     * // Retorna 25
     * const resultado = calcularQuadrado(5);
     */
    function calcularQuadrado(x) {
      return x * x;
    }
    ```

Estas são apenas algumas das tags disponíveis. A documentação completa pode ser encontrada na especificação oficial do JSDoc: [JSDoc Tags](https://jsdoc.app/tags.html).