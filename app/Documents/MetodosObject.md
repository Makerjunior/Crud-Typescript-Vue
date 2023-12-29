Ao trabalhar com objetos JavaScript, você pode usar uma variedade de métodos para manipular e modificar esses objetos. Aqui estão alguns dos métodos de manipulação de objetos mais comuns em JavaScript:

1. **`Object.assign()`**
   - Combina propriedades de dois ou mais objetos em um objeto de destino.
   ```javascript
   const objeto1 = { a: 1, b: 2 };
   const objeto2 = { b: 3, c: 4 };
   const objetoCombinado = Object.assign({}, objeto1, objeto2);
   console.log(objetoCombinado); // Output: { a: 1, b: 3, c: 4 }
   ```

2. **`Object.keys()`**
   - Retorna um array contendo as chaves do objeto.
   ```javascript
   const carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };
   const chaves = Object.keys(carro);
   console.log(chaves); // Output: ["marca", "modelo", "ano"]
   ```

3. **`Object.values()`**
   - Retorna um array contendo os valores das propriedades do objeto.
   ```javascript
   const valores = Object.values(carro);
   console.log(valores); // Output: ["Toyota", "Corolla", 2022]
   ```

4. **`Object.entries()`**
   - Retorna um array de arrays contendo pares chave-valor.
   ```javascript
   const entradas = Object.entries(carro);
   console.log(entradas); // Output: [["marca", "Toyota"], ["modelo", "Corolla"], ["ano", 2022]]
   ```

5. **`Object.create()`**
   - Cria um novo objeto com o objeto especificado como protótipo.
   ```javascript
   const pessoa = { nome: "João", idade: 30 };
   const novaPessoa = Object.create(pessoa);
   console.log(novaPessoa.nome); // Output: João
   ```

6. **`Object.freeze()`**
   - Impede a adição, remoção ou modificação de propriedades em um objeto.
   ```javascript
   const objetoCongelado = Object.freeze({ chave: "valor" });
   objetoCongelado.chave = "novoValor"; // Isso não terá efeito
   ```

7. **`Object.seal()`**
   - Impede a adição ou remoção de propriedades, mas permite a modificação das propriedades existentes.
   ```javascript
   const objetoSelado = Object.seal({ chave: "valor" });
   objetoSelado.chave = "novoValor"; // Isso é permitido
   objetoSelado.novaChave = "outroValor"; // Isso não é permitido
   ```

8. **`Object.fromEntries()`**
   - Cria um objeto a partir de um iterable (como um array de pares chave-valor).
   ```javascript
   const arrayDeEntradas = [["a", 1], ["b", 2], ["c", 3]];
   const objetoFromEntries = Object.fromEntries(arrayDeEntradas);
   console.log(objetoFromEntries); // Output: { a: 1, b: 2, c: 3 }
   ```

Esses métodos proporcionam uma variedade de maneiras de manipular objetos em JavaScript, permitindo a criação, combinação, iteração e modificação de propriedades de forma eficaz.


Para adicionar e remover propriedades de objetos em JavaScript, você pode usar métodos específicos ou operadores simples. Aqui estão exemplos de como adicionar e remover propriedades:

### Adicionar Propriedades:

1. **Operador de Atribuição (`=`):**
   - A forma mais simples de adicionar uma propriedade é usando o operador de atribuição.
   ```javascript
   const pessoa = {};
   pessoa.nome = "João";
   pessoa.idade = 30;
   ```

2. **`Object.defineProperty()`:**
   - Permite adicionar propriedades com mais controle sobre suas características.
   ```javascript
   const pessoa = {};
   Object.defineProperty(pessoa, 'nome', { value: 'João', writable: true });
   ```

3. **`Object.assign()`:**
   - Combina propriedades de objetos diferentes.
   ```javascript
   const pessoa = { nome: 'João' };
   const detalhes = { idade: 30, cidade: 'São Paulo' };
   Object.assign(pessoa, detalhes);
   ```

4. **Spread Operator (`...`):**
   - Introduzido no ECMAScript 2018 (ES9), o operador de propagação (`...`) pode ser usado para adicionar propriedades de objetos.
   ```javascript
   const pessoa = { nome: 'João' };
   const detalhes = { idade: 30, cidade: 'São Paulo' };
   const pessoaComDetalhes = { ...pessoa, ...detalhes };
   ```

### Remover Propriedades:

1. **Operador `delete`:**
   - Remove uma propriedade de um objeto.
   ```javascript
   const pessoa = { nome: 'João', idade: 30 };
   delete pessoa.idade;
   ```

2. **`Object.defineProperty()` com `configurable: true`:**
   - Ao usar `Object.defineProperty()`, você pode configurar a propriedade para ser removível.
   ```javascript
   const pessoa = { nome: 'João', idade: 30 };
   Object.defineProperty(pessoa, 'idade', { configurable: true });
   delete pessoa.idade;
   ```

3. **`Object.keys()` e `Array.prototype.filter()`:**
   - Crie um novo objeto excluindo a propriedade desejada.
   ```javascript
   const pessoa = { nome: 'João', idade: 30, cidade: 'São Paulo' };
   const { idade, ...novaPessoa } = pessoa;
   ```

4. **`Object.assign()` com Spread Operator (`...`):**
   - Crie um novo objeto excluindo a propriedade desejada.
   ```javascript
   const pessoa = { nome: 'João', idade: 30, cidade: 'São Paulo' };
   const { idade, ...novaPessoa } = pessoa;
   ```

Lembre-se de que, ao usar `delete`, a propriedade é removida diretamente do objeto. No entanto, isso não afeta objetos que compartilham o mesmo protótipo. Além disso, ao usar `Object.defineProperty`, você pode configurar propriedades adicionadas para serem não editáveis, não enumeráveis e/ou não configuráveis.