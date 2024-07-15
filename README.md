# API com Framework NestJs - Rocketseat - Ignite 2023 - Projeto 05

## Descrição

Nesse módulo de NestJS você irá aprender os conceitos principais do framework, como injeção de dependência, controllers e services, além de integrar outas ferramentas com Prisma, Zod e Vitest. No decorrer desse módulo, iremos integrar com o código "core" desenvolvido anteriormente.

## Tecnologias

- Node.js
- NestJS
- Express
- Prisma
- Zod
- Vitest
- Docker
- Postgres
- JWT (Nest/Passport)
- NestJs/Multer (upload de arquivos)


## JWT

### Gerar um secret


Gerar uma chave privada: 

```bash
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

Gerar uma chave pública a partir da chave privada:

```bash
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

Codificar a chave privada e pública em base64:

```bash
base64 private_key.pem -w 0 -i > private_key-base64.txt
base64 public_key.pem  -w 0 -i > public_key-base64.txt

```

O conteúdo do arquivo `private_key-base64.txt` deve ser adicionado ao arquivo `.env` na variável `JWT_PRIVATE_KEY` e o conteúdo do arquivo `public_key-base64.txt` deve ser adicionado ao arquivo `.env` na variável `JWT_PUBLIC_KEY`.

## Testes

Os testes serão feito com o Vitest. [Vitest-NestJs](https://docs.nestjs.com/recipes/swc#vitest)

```bash
pnpm add -D vitest unplugin-swc @swc/core @vitest/coverage-v8

pnpm i vite-tsconfig-paths -D
```
