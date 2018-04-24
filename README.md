# Dataloader adonis example

Simple example of using dataloader with adonis.js + apollo graphql

Files/lines of interest:
```bash
# File for defining loaders
app/Data/Loaders.js
```
```bash
# Convenient factory function
app/Helpers/loaders/createLoader.js
```
```bash
# Creating new loaders for each new request
start/routes.js:25
```
```bash
# Using a loader
app/Data/GraphQL/resolvers.js:12
```

## Setup
1. `git clone` this repo
2. `cd` into folder
3. `yarn`
3. `cp .env.example .env` and fill out the missing stuff
4. `adonis migration:run`
5. `adonis seed`
6. `adonis serve --dev`
7. visit http://localhost:3333 to try it out
