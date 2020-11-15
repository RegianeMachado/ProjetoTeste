# Subir o banco

    - Criar um arquivo docker-compose.yml
    - Configurar o arquivo mudar o banco e nome do container
    - Rodar docker-compose up (docker-compose up)

# Estrutura do projeto

    - rodar yarn init -y
    - criar node_modules yarn install
    - add ts : yarn add typescript ts-node-dev -D
    - gerar arquivos config:  yarn tsc --init
    - apontar para pasta que vai gerar os js : outDir

# Configurar tabelas

    - Usar TypeOrm para gerar tabelas
     comandos (yarn add typeorm --save)
              (yarn add reflect-metadata --save)
              (yarn add @types/node --save-dev)
              (yarn add mysql2 --save)
    - yarn typeorm init antes de configurar o package.json
    - configurar ormconfig.json
    - yarn run start - criar as tabelas
    - Criar as tabelas principais e depois as auxiliares

# Configurando express para criar as rotas

    -yarn add express --save
    - yarn add @types/express
