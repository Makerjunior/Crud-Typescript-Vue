
// Definição de Entidades

// Produto
class Produto {
    constructor(public id: number, public nome: string, public preco: number) {}
  }
  
  // Carrinho
  class Carrinho {
    private itens: Map<number, { produto: Produto; quantidade: number }> = new Map();
  
    adicionarItem(produto: Produto, quantidade: number): void {
      if (this.itens.has(produto.id)) {
        this.itens.get(produto.id)!.quantidade += quantidade;
      } else {
        this.itens.set(produto.id, { produto, quantidade });
      }
    }
  
    removerItem(produto: Produto, quantidade: number): void {
      if (this.itens.has(produto.id)) {
        const item = this.itens.get(produto.id)!;
        if (item.quantidade > quantidade) {
          item.quantidade -= quantidade;
        } else {
          this.itens.delete(produto.id);
        }
      }
    }
  
    calcularTotal(): number {
      let total = 0;
      for (const item of this.itens.values()) {
        total += item.produto.preco * item.quantidade;
      }
      return total;
    }

    statusCar(){
        console.log(this.itens.get(2)?.produto.nome);
        console.log(this.itens.get(2));
    }
  }
  
  // Uso das Entidades
  
  const produto1 = new Produto(1, 'Camiseta', 20.0);
  const produto2 = new Produto(2, 'Calça Jeans', 50.0);
  
  const carrinho = new Carrinho();
  carrinho.adicionarItem(produto1, 2);
  carrinho.adicionarItem(produto2, 1);
  
 // console.log('Itens no Carrinho:', carrinho);
 // console.log('Total do Carrinho:', carrinho.calcularTotal());
  carrinho.statusCar();