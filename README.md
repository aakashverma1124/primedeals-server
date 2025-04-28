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
