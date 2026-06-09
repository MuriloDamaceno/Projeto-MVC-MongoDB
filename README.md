 Projeto MVC MongoDB

Uma API RESTful em Node.js com arquitetura MVC, construída com Express e MongoDB para gerenciar usuários com operações CRUD completas.

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.0.0-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-%3E%3D6.0-47A248?style=for-the-badge&logo=mongodb)

---

 Tecnologias Utilizadas

O projeto foi construído utilizando:

* **Runtime:** Node.js
* **Framework Web:** Express
* **Banco de Dados:** MongoDB (via Mongoose)
* **Variáveis de ambiente:** dotenv
* **Arquitetura:** MVC (Model-View-Controller)

---

 Funcionalidades Principais

- [x] CRUD completo de usuários
- [x] Persistência em MongoDB com Mongoose
- [x] API REST simples e modular
- [x] Tratamento básico de erros no servidor
- [x] Estrutura de pastas organizada: `controllers`, `models`, `routes`, `middlewares`, `config`

---

 Como Executar o Projeto

 Pré-requisitos

Antes de iniciar, instale em sua máquina:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (recomendado 14+)
* [MongoDB](https://www.mongodb.com/) ou MongoDB Atlas

 Passos para Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/Projeto-MVC-MongoDB.git
```

2. Entre no diretório do projeto:

```bash
cd Projeto-MVC-MongoDB
```

3. Instale as dependências:

```bash
npm install
```

 Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mvc_db
```

 Inicialização

Execute o servidor com:

```bash
npm start
```

O servidor ficará disponível em:

```
http://localhost:3000
```

---

 Endpoints da API

A API expõe rotas para gerenciamento de usuários no caminho base `/api/users`.

 Lista de rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/users` | Listar todos os usuários |
| GET | `/api/users/:id` | Buscar usuário por ID |
| POST | `/api/users` | Criar um novo usuário |
| PUT | `/api/users/:id` | Atualizar usuário existente |
| DELETE | `/api/users/:id` | Excluir usuário |

 Exemplo de payload para criação/atualização

```json
{
  "name": "João Silva",
  "email": "joao@example.com"
}
```

---

 Estrutura do Projeto

* `server.js` - arquivo principal que inicializa o servidor
* `config/db.js` - conexão com MongoDB
* `controllers/userController.js` - lógica dos endpoints
* `models/userModel.js` - esquema de usuário Mongoose
* `routes/userRoutes.js` - definição das rotas de usuário
* `middlewares/logger.js` - middleware de log de requisições

---

 Observações

* A aplicação atualmente expõe rotas de usuário sem autenticação.
* O código usa `process.env.MONGO_URI` para conectar ao MongoDB.
* Caso utilize MongoDB Atlas, garanta que o IP do seu cliente esteja liberado.

---

 Autor

- Murilo Damaceno - Desenvolvimento Back-end


