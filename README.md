### PREPARATION:

- First you need to have [Node.js](https://nodejs.org/en/download/) and [npm](https://nodejs.org/en/download/) installed.

- Then you need to install the software packaging system "yarn" using the command:

```bash
npm install --global yarn
```

- Then you need to download the javascript dependency libraries using the command:

```bash
yarn
```

### DEVELOPMENT INSTRUCTIONS:

- The project uses the build tool [Rsbuild](https://rsbuild.dev/)

- You can reach the development state using the command:

```
yarn dev
```

- The resulting files are then in the memory and http server start at 
  http://localhost:3000

- Achieving the deployment state can be done with the command:

```
yarn build
```

The resulting files are then in the `./dist` directory