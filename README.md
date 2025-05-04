### Initialise `server` project

`npm init -y`

### Installing initial dependencies

`npm install express cors @prisma/client`
`npm install -D prisma typescript ts-node-dev @types/express @types/cors @types/node`

### Initialise prisma

`npx prisma init` : this will create `.env` file and `prisma` directory.

### Initialise typescript and setup tsconfig.json file

- Add this script inside `package.json` `"dev": "ts-node-dev --respawn --transpile-only src/app.ts",`
- `npx tsc --init`

### Setup DATABASE_URL and product prisma model in schema.prisma

- Add this script inside `package.json` `"postinstall": "prisma generate"`
- Go to vercel `Dashboard -> Storage` and click on Create Database and choose Neon Serverless PostgreSQL with any region + free tier.
- Copy `DATABASE_URL` and replace it inside `.env` file
- Create Product prisma model
- Run `npx prisma generate` to generate prisma client.
- Run `npx prisma migrate dev --name init`. This will create the table inside the DB. This will also create `migrations` directory inside `prisma` directory.
- To check if the table got successfully created, run `npx prisma studio`, this will open up a browser window at `http://localhost:5555/` and you will be able to see the `Product` table created over there.

### Seed the data from sample-data.ts

- Copy `db` directory from client inside `src/`
- Create `seed.ts` file inside `db`
- And run `npx tsx ./src/db/seed.ts` (might ask to install tsc)

### Create fetch products api in server.

- Create `services`, `controllers`, and `routes` directories.
- Create `prisma.ts` inside `db`
- Create `product.service.ts`, `product.controller.ts`, and `product.routes.ts` and add backend logic in all the files.
- Add `productRoutes` inside `app.ts`

### Create fetch product by slug api in server.

- Add a new route inside `product.routes.ts`
- Retrieve the product from db inside service layer `product.service.ts`.
- And finally implement controller `product.controller.ts`.

### Backend fix for null response returned for get product by slug API.

- Handle null case inside `product.controller.ts`.
