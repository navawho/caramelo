<h1 align="center">
  <img alt="Caramelo" title="Caramelo" src="https://i.ibb.co/THhrSw3/Caramelo-arg-01.png" width="315px" />
</h1>

<p align = "center">
   <a href="#demo-rocket">Demo</a>&nbsp;|&nbsp;
   <a href="#instruções-memo">Instruções</a>
</p>

## Demo :rocket:

<img alt="demo" src="https://media1.giphy.com/media/J16oGOhYbcNS0gvC6A/giphy.gif"/>

## Instruções :memo:

#### Backend

1. Entre na pasta do backend:
  > ``cd backend``

2. Modifique o [application.properties](https://github.com/navarrotheus/caramelo/blob/master/backend/src/main/resources/application.properties) com as variáveis ambiente do banco

3. Execute o [SQL](https://github.com/navarrotheus/caramelo/blob/master/create-db.sql) no banco para criar as tabelas
  
4. Inicie a API:
  > ./mvnw spring-boot:run
  
<hr />
  
#### Frontend

1. Entre na pasta do frontend:
  > ``cd frontend``
  
2. Instale as dependências:
  > `yarn`

3. Crie seu .env com a variável ambiente informando a url da api
  
4. Inicie a aplicação web:
  > `yarn start`
