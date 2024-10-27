
# Desafio 3 - estágio Compass Uol
# Furniro

> Um e-commerce de móveis modernos, que oferece uma experiência de compra otimizada e amigável.

## Índice

1. [Instalação](#instalação)
2. [Uso](#uso)
3. [Dependências](#dependências)
   - [Frontend](#frontend)
   - [Backend](#backend)
4. [Scripts](#scripts)
5. [Estrutura de Pastas](#estrutura-de-pastas)
6. [Documentação da API](#documentação-da-api)
7. [Contribuição](#contribuição)


## Instalação

### Pré-requisitos

- **Node.js**: Certifique-se de que você possui o Node.js e o npm instalados na sua máquina.
- **Banco de Dados**: Este projeto utiliza PostgreSQL, por isso é necessário configurá-lo antes de rodar a API.
- **Firebase**: Configurações do Firebase são necessárias para autenticação de usuário no frontend.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Narciso39/desafio-3.git
   ```

2. Instale as dependências para o frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Instale as dependências para o backend:
   ```bash
   cd backend
   npm install
   ```

4. Configure o ambiente:
   - Crie um arquivo `.env` no diretório `backend` com as variáveis necessárias, incluindo a string de conexão com o banco de dados e configurações específicas do Firebase.
   - Configure o Firebase no frontend, adicionando as informações de autenticação no arquivo `firebaseConfig.js`.

## Uso

### Executando o Frontend

No diretório `frontend`, utilize os seguintes comandos:

```bash
npm run dev        # Inicia o ambiente de desenvolvimento
npm run build      # Compila para produção
npm run preview    # Pré-visualiza a build
```

### Executando o Backend

No diretório `backend`, utilize os seguintes comandos:

```bash
npm run dev        # Inicia o servidor em modo de desenvolvimento
npm run start      # Inicia o servidor em modo de produção
npm run test       # Executa os testes
```

## Dependências

### Frontend

- **axios** `^1.7.7`: Para requisições HTTP.
- **firebase** `^11.0.1`: SDK do Firebase para autenticação e armazenamento.
- **react** `^18.3.1` e **react-dom** `^18.3.1`: Biblioteca para criação de interfaces de usuário.
- **react-firebase-hooks** `^5.1.1`: Hooks para integração com o Firebase.

#### DevDependencies

- **@vitejs/plugin-react** `^4.3.2`: Plugin para Vite com suporte a React.
- **eslint** `^9.11.1`: Ferramenta para manter o padrão de código.
- **react-router-dom** `^6.27.0`: Controle de rotas no React.
- **typescript** `^5.5.3`: Suporte a TypeScript.

### Backend

- **@nestjs/common** `^10.0.0` e **@nestjs/core** `^10.0.0`: Framework principal para construção da API.
- **@prisma/client** `^5.21.0`: ORM para comunicação com o banco de dados PostgreSQL.
- **class-transformer** `^0.5.1` e **class-validator** `^0.14.1`: Para transformar e validar objetos de entrada.

#### DevDependencies

- **@nestjs/cli** `^10.0.0`: CLI para gerar e gerenciar o código NestJS.
- **eslint** `^8.42.0`: Para análise de código.
- **jest** `^29.5.0`: Framework de testes.
- **ts-jest** `^29.1.0`: Suporte ao Jest com TypeScript.
- **typescript** `^5.6.3`: Suporte a TypeScript.

## Scripts

### Frontend

- `npm run dev`: Inicia o ambiente de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Pré-visualiza a build de produção.
- `npm run lint`: Analisa o código com ESLint.

### Backend

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run build`: Compila o projeto.
- `npm run format`: Formata o código com Prettier.
- `npm run test`: Executa os testes unitários com Jest.

## Estrutura de Pastas

```plaintext
desafio-3/
├── backend              # Aplicação backend em NestJS
│   ├── src              # Código-fonte principal da API
│   └── test             # Testes e2e e unitários
│
├── data                 # Banco de dados ou arquivos de dados
│
├── frontend             # Aplicação frontend em React com Vite
│   ├── public           # Arquivos públicos
│   ├── src              # Código-fonte principal da aplicação
│   └── vite.config.js   # Configuração do Vite
│
├── uploads              # Armazenamento das fotos 
│
└── README.md            # Documentação do projeto

```

## Documentação da API

A documentação completa das rotas da API está disponível no [Postman Workspace](https://galactic-trinity-719082.postman.co/workspace/My-Workspace~496dd43d-90c9-46c6-8502-cefaeb45e0ab/collection/29747915-427ece4b-5ec0-48b2-8f7f-8cf5fb5ab85d?action=share&creator=29747915), onde você pode explorar cada endpoint, visualizar parâmetros e obter exemplos de respostas.

## Contribuição

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Commit suas alterações (`git commit -am 'Adicionar nova feature'`).
4. Faça o push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.



