# Node.js API Rest com Express e MongoDB

Este projeto é uma API Restful construída com Node.js, Express e MongoDB. O projeto foi desenvolvido como parte do curso da Alura "Node.js: API Rest com Express e MongoDB".

## Status do Projeto

🚧 **Projeto em Construção** 🚧

## Funcionalidades

- CRUD de livraria

## Requisitos

- Node.js
- MongoDB
- npm (v6 ou superior) ou yarn

## Instalação

1. **Clone o repositório:**

```shell
git clone https://github.com/DiguyaDeveloper/ceccoff-alura-nodejs-mongodb.git
cd ceccoff-alura-nodejs-mongodb
```

2. **Instale as dependências:**

```shell
npm install
# ou
yarn install
```

3. **Configuração das Variáveis de Ambiente:**

Este projeto usa o pacote `dotenv` para gerenciar variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```shell
# .env
DB_NAME=SEU_BANCO
DB_USER=SEU_USUARIO
DB_PASSWORD=SUA_SENHA
DB_CLUSTER=SEU_CLUSTER
DB_CLUSTER_NAME=SEU_CLUSTER_NAME
```

> **Nota:** Nunca comite o arquivo `.env` no repositório. Adicione `.env` ao arquivo `.gitignore`.

4. **Adicione o `.env` ao `.gitignore`:**

Abra o arquivo `.gitignore` e adicione a seguinte linha ao final:

```shell
# .gitignore
.env
```

## Uso

1. **Inicie o servidor:**

```shell
npm start
# ou
yarn start
```

2. **Acesse a API:**

A API estará disponível em `http://localhost:3000`.

## Scripts

- `dev`: Inicia a aplicação em modo de desenvolvimento
- `test`: Executa os testes
