
# Library Management CRUD
Simple CRUD made with MVC pattern, using TypeScript, [Fastify](https://fastify.dev/) and PostgreSQL with Supabase

## Setup
```bash
npm install

npx ts-node src/index.ts
```
    
## API Descriptions

### Book Model
```typescript
 Book {
  id: number
  title: string
  author: string
  ISBN: string
  publishDt: Date
  publisher: string
}
```
