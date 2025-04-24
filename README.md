## develop
steps to run the project

1. up de Data base

```
docker compose up -d
```
2. Rename .env.example to .env
3. replace environment variables
4. run ```npm install``` and ```npm run dev``` in the console
5. run ```npx prisma migrate dev``` and ```npx prisma generate ``` in the console to create db
5. execute the seed endpoint to [create local data base](localhost:3000/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage