# A sane and efficient guide for consuming GraphQL endpoints in Typescript

This is the companion repo to the [blog post](https://nicco.io/blog/a-sane-and-efficient-guide-for-consuming-graphql-endpoints-in-typescript) about GraphQL with Typescript.

This is skeleton [svelte kit](https://kit.svelte.dev/) app. The relevant files are:

- `.graphqlrc.yml` Editor config
- `codegen.yaml` Generator config
- `src/lib/gql` Folder where I've put the GraphQL stuff
- `src/routes/index.svelte` example usage of the generated SDK

## Demo

You can check a running demo here: https://blog-typescript-graphql.vercel.app

## Running

```bash
pnpm i

pnpm run generate # Generate GraphQL stuff
pnpm run dev
```
