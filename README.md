# CONFIA - CMS

Aplicação criada a partir do CMS [Strapi CMS](https://strapi.io/), cujo principal objetivo é 
prover uma API para aplicação cliente [frontend](https://github.com/projeto-confia/client).


## Dependências com Componentes do Ambiente
Esta aplicação depende do componente [database](https://github.com/projeto-confia/database).
## Requisitos

- [Node JS ^12.0.0](https://nodejs.org/en/download/releases/)
- [Yarn](https://yarnpkg.com/)

## Instalação
Todos os comandos são executados a partir do diretório raiz do projeto.
### 1. Cria o arquivo `.env`:
Crie o arquivo a partir do arquivo `.env.example`

### 2. Instalar as dependências:
```bash
yarn 
```
### 3. Rodar o projeto
```bash
yarn  dev
```


Acesse o endereço [http://localhost:1337/admin](http://localhost:1337/admin) para cadastrar o usuário administrador no primeiro acesso e acessar o CMS.
## License

[MIT](https://choosealicense.com/licenses/mit/)
