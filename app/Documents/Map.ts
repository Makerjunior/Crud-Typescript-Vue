// Criando um Map vazio
const meuMapa = new Map();

// Adicionando pares chave-valor
meuMapa.set('chave1', 'valor1');
meuMapa.set(42, 'valor2');
meuMapa.set('valor3',{ nome: 'Alice' } );

// Obtendo valores usando as chaves
console.log(meuMapa.get('chave1'));  // Saída: valor1
console.log(meuMapa.get(42));        // Saída: valor2
console.log(meuMapa.get({ nome: 'Alice' }));  // Saída: valor3 (não funciona corretamente porque os objetos são diferentes)

// Verificando a existência de uma chave
console.log(meuMapa.has('chave1'));  // Saída: true
console.log(meuMapa.has('chave2'));  // Saída: false

// Iterando sobre as chaves
for (const chave of meuMapa.keys()) {
  console.log(chave);
}

// Iterando sobre os valores
for (const valor of meuMapa.values()) {
  console.log(valor);
}

// Iterando sobre os pares chave-valor
for (const [chave, valor] of meuMapa.entries()) {
  console.log(`${chave.nome}: ${valor}`);
}
// Excluindo um par chave-valor
//meuMapa.delete('chave1');
// Verificando o tamanho do mapa
console.log(meuMapa.size);          // Saída: 2</s>
console.log(meuMapa);