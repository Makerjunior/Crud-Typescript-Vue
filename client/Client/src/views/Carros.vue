<template>
    <div>
      <h1>Home</h1>
      <div v-if="data.length > 0">
        <h2>Dados Recebidos:</h2>
        <table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <!-- Exibe os dados de cada objeto em uma linha da tabela -->
              <td>{{ item.marca }}</td>
              <td>{{ item.ano }}</td>
              <td>{{ item.placa }}</td>
              <td>{{ item.preco }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Aguardando dados...</p>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Carros',
    data(){
    return{
      data:[],
    }
    },
    mounted() {
      // Quando o componente for montado, faça a requisição usando o Axios
      axios.get('http://localhost:3000/Carros')
        .then(response => {
          // Exiba o resultado no console
          this.data=response.data;
      
          console.log('Resultado da requisição:', response.data);
        })
        .catch(error => {
          // Em caso de erro, exiba no console
          console.error('Erro na requisição:', error);
        });
    }
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
  </style>
  
  
  