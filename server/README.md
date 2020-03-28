# Be The Hero - Omnistack Week 11.0

## Funcionalidades
  - Login de ONG's
  - Logout de ONG's
  - Cadastro de ONG's
  - Cadastrar novos casos
  - Listar casos específicos de uma ONG
  - Listar todos os casos
  - Entrar em contato com a ONG (via whatsapp ou email)

## Tecnologias

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [kNex](https://www.knexjs.org/)
- [SQlite3](https://www.sqlite.org/index.html)
- [Moment.JS](https://momentjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/)

## Instalação

Clone o projeto com:

```sh
git clone https://github.com/dscamargo/be-the-hero.git
```

Entre na pasta do projeto e então na pasta `server`:

```sh
cd server
```

instale as dependencias, usando:

```sh
yarn
```

Então, você precisa criar seu banco de dados sqlite (ou outro de sua preferencia)

Para rodas as migrations do projeto, utilize o comando:

```sh
npx knex migrate:latest
```

Se você estiver em ambiente de desenvolvimento, você pode rodar o servidor de desenvolvimento, utilizando o comando:

```sh
yarn dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)