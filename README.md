# Dataloader adonis example

Simple example of using dataloader with adonis.js + apollo graphql

Files/lines of interest:

| Description | File |
| --- | --- |
| Declaring loaders | [app/Data/Loaders.js](app/Data/Loaders.js) |
| Instantiating loaders per request | [start/routes.js:25](start/routes.js#L25) |
| Using loader in resolver | [app/Data/GraphQL/resolvers.js:12](app/Data/GraphQL/resolvers.js#L12) |

## Setup
1. `git clone` this repo
2. `cd` into folder
3. `yarn`
3. `cp .env.example .env` and fill out the missing stuff
4. `adonis migration:run`
5. `adonis seed`
6. `adonis serve --dev`
7. visit http://localhost:3333 to try it out
