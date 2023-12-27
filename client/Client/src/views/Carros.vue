<template>
  <div>
    <h1>Cadastro de carros</h1>
    <div v-if="data.length > 0">
      <h2></h2>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Preço</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <!-- Exibe os dados de cada objeto em uma linha da tabela -->
            <td>{{ item.marca }}</td>
            <td>{{ item.ano }}</td>
            <td>{{ item.placa }}</td>
            <td>{{ item.preco }}</td>
            <td>
              <button class="btn-editar" @click="abrirModalEdicao(item)">Editar</button>
            </td>
            <td>
              <button class="btn-apagar">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Aguardando dados...</p>
    </div>

    <!-- Modal de Edição -->
    <div v-if="modalVisivel">
      <div class="modal-overlay" @click="fecharModalEdicao"></div>
      <div class="modal">
        <h2>Editar Carro</h2>
        <!-- Adicione os campos de edição -->
        
        <label>Marca:</label>
        <input v-model="carroEditado.marca" />

        <label>Ano:</label>
        <input v-model="carroEditado.ano" />

        <label>Placa:</label>
        <input v-model="carroEditado.placa" />

        <label>Preço:</label>
        <input v-model="carroEditado.preco" />
     

       <button  id="btn" @click="()=>salvarEdicao()">&nbsp;Salvar&nbsp;&nbsp;</button> 
       
       <button  id="bth" @click="fecharModalEdicao">Cancelar</button>
      
        
      

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Carros',
  data() {
    return {
      data: [],
      modalVisivel: false,
      carroEditado: {},
    };
  },
  mounted() {
    this.getDados();
  },
  methods: {
    getDados() {
      axios.get('http://localhost:3000/')
        .then(response => {
          this.data = response.data.api;
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
    },
    salvarEdicao() {
      console.log("Salvando");
   // const apiUrl = 'http://localhost:3000/update';
/*
    // Fazendo a requisição POST com o Axios
    axios.post(apiUrl, carro)
      .then(response => {
        console.log('Dados salvos com sucesso:', response.data);
        this.modalVisivel = false;
      })
      .catch(error => {
        console.error('Erro ao salvar os dados:', error);
      });
      */
  },
    abrirModalEdicao(carro) {
      this.carroEditado = { ...carro };
      this.modalVisivel = true;
    },
    fecharModalEdicao() {
      this.modalVisivel = false;
    },
    salvarEdicao() {
      // Lógica para salvar as edições
      // Aqui você pode fazer uma requisição HTTP para atualizar os dados no servidor
      // Após salvar, feche o modal
      this.modalVisivel = false;
    },
  },
};
</script>

<style>
/* Estilo para centralizar a tabela */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw; /* Use a largura total da viewport para centralizar */
  /* Use a altura total da viewport para centralizar */
}

/* Estilo para a tabela */
table {
  border-collapse: collapse;
  width: 90%; /* Ajusta a largura da tabela conforme necessário */
  max-width: 800px; /* Define uma largura máxima para a tabela */
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil */
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd; /* Adiciona uma borda inferior nas células */
}

th {
  background-color: #4CAF50; /* Cor de fundo para o cabeçalho */
  color: white; /* Cor do texto no cabeçalho */
}

tr:nth-child(even) {
  background-color: #f5f5f5; /* Cor de fundo para linhas pares */
}

tr:hover {
  background-color: #e0e0e0; /* Cor de fundo ao passar o mouse sobre a linha */
}

/* Estilo para a mensagem de "Aguardando dados..." */
p {
  font-style: italic;
  color: #777;
}

/* Estilo para os botões Apagar e Editar */
.btn-apagar, .btn-editar {
  height: 20px;
  width: 50px;
  cursor: pointer;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
}

.btn-editar {
  background-color: #3498db;
}

/* Estilo para o modal de edição */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 25, 25, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 40%; /* Defina uma largura máxima para o modal */
}
.modal,input{
  font-family: Arial, sans-serif;
  text-align: center;
  margin-bottom: 20px;
}

#btn {
  margin:5px
}

</style>