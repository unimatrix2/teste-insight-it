# Setup

Para rodar o projeto me modo local é necessário que a máquina possua instalado o [NodeJS](https://nodejs.org/en/) (preferencialmente 12+) e a [MongoDB](https://www.mongodb.com/try/download/community).
Após se certificar de que o NodeJS e a MongoDB estão presentes, instale as dependências do projeto utilizando:

```bash
npm i
# ou
yarn install
```
## Antes de Prosseguir

O arquivo ```next.config.js``` contém a URL para conexão com a base de dados MongoDB. Por padrão, a URL está apontando para um servidor local (localhost), para acessar um servidor externo, será necessário inserir a URL desejada no campo ```mongodburl```

## Ambiente de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, utilize:

```bash
npm run dev
# or
yarn dev
```

## Ambiente de Produção

Para rodar o projeto em modo de produção, é necessário compilar e executar.
Para compilar, utilize:

```bash
npm run build
# or
yarn build
```

e para executar, utilize:

```bash
npm run start
# or
yarn start
```

# Escolhas

O NextJS foi escolhido por uma série de razões.
- React com JSS possibilita o desenvolvimento de componentes unitários de fácil utilização e acoplamento
- Possibilita controlar granularmente o modo de renderização das páginas na hora da compilação e durante a execução, criando páginas muito otimizadas para suas implementações internas, garantindo consistência na performance em nível de usuário
- Camada de API pode ser desenvolvida no mesmo projeto
- Camada de API e Middlewares pode ser disponibilizada automaticamente em vários provedores Cloud como funções Lambda e Edge, garantindo escalabilidade e baixa latência para o usuário