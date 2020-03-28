# BeHero - Omnistack Week 11.0

## Funcionalidades
  - Login de ONG's
  - Logout de ONG's
  - Cadastro de ONG's
  - Cadastrar novos casos
  - Listar casos específicos de uma ONG
  - Listar todos os casos
  - Entrar em contato com a ONG (via whatsapp ou email)

A Software as a Service to provide a scheduling between barbers and clients.

## Usage

The first step is to create your account, then you can login and choose a barber, check his schedule and make an appointment.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [kNex](https://www.knexjs.org/)
- [SQlite3](https://www.sqlite.org/index.html)
- [Moment.JS](https://momentjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/)

## Installation

Clone the project with

```sh
git clone https://github.com/CarlosLevir/GoBarber-NodeJs-Rocketseat.git
```

Get in the path project, then install the dependencies with:

```sh
yarn
```

Then, you have to create your postgres database (Or another if you want) and fill your own fields in .env file.

Now, you have to create tables with the command:

```sh
npx sequelize db:migrate
```

After database config, you can start the server with:

```sh
yarn start
```

If you are in development environment, you can use the development server:

```sh
yarn dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)