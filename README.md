# CONFIA - CMS

This applications was created based on [Strapi CMS](https://strapi.io/), with main object to provide a API consumed by the client CONFIA [frontend](https://github.com/projeto-confia/client).

## Requirements

- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the dependencies.

```bash
yarn install
```

## Usage

To start the PostgreSQL docker container run

```shell
docker-compose up
```

you can also run with `-d` to detach termninal

```shell
docker-compose up -d
```

Then to start the application run

```shell
yarn develop
```

and to access the admin painel go to [http://localhost:1337/admin](http://localhost:1337/admin)
the database will be empty as like the storage used by assets like images or videos, but components and page structures will be already defined.

## Contributing

Pull requests are welcome. Please follow the code style used by strapi and the commit language.

## License

[MIT](https://choosealicense.com/licenses/mit/)
