# Sistema de Recomendação de Locais

Este projeto é um sistema de recomendação de locais pensado para visitantes de uma determinada cidade. Ele permite cadastrar usuários, suas preferências de categorias e sugerir locais mais interessantes de acordo com o perfil de cada visitante.

## Tecnologias utilizadas (Stack)

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker

## Estrutura do Projeto

```
src/
  services/            # Lógica de negócio e comunicação com o banco (usuários, categorias, locais)
    CategoriaService.ts
    LocalService.ts
    UsuarioService.ts
  lib/                 # Instância de conexão com o banco (prisma)
  generated/           # Arquivos gerados automaticamente pelo Prisma
prisma/
  schema.prisma        # Definição do banco de dados
.env.example           # Arquivo exemplo de variáveis de ambiente
README.md
Dockerfile
docker-compose.yml
```

## Como executar o projeto

1. **Clone o repositório**

   ```
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. **Configure as variáveis de ambiente**

   Copie o arquivo `.env.example` para `.env` e preencha conforme necessário:

   ```
   cp .env.example .env
   ```

3. **Inicie os containers com Docker Compose**

   ```
   docker-compose up
   ```

   Isso irá subir o banco de dados Postgres e a aplicação.

4. **Acesse o container da aplicação e rode as migrations**

   ```
   docker-compose exec app npx prisma migrate deploy
   ```

5. **Servidor**

   O servidor estará rodando normalmente na porta definida no `.env` (por padrão, `localhost:3000` ou semelhante).

6. **Parar a aplicação**

   Na raiz do projeto:

   ```
   docker-compose down
   ```

## Observações

- Certifique-se de que as portas especificadas no `.env` não estão em uso por outros sistemas.
- Altere sempre o arquivo `.env` conforme sua configuração local ou de produção.

## Suporte e Contribuição

Se você tiver dúvidas, encontrar algum problema ou quiser contribuir com melhorias, sinta-se à vontade para abrir uma issue ou pull request neste repositório.

Caso prefira, você também pode entrar em contato diretamente pelo e-mail do autor listado no perfil do GitHub.
