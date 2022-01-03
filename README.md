# nartefacts

<p align="center">
  <img src="https://ucarecdn.com/1a22b3ae-1ba9-4540-8683-de5262b74038/nartefacts.webp" alt="Front End Cardio">
</p>

[nartefacts](https://www.nartefacts.com/) is a website that curates colour palettes extracted from beautiful album covers of African musicians. The dominant colours on the covers are extracted using [colour-thief](https://www.npmjs.com/package/color-thief) an npm package.

The project serves two aims, firstly to provide colour inspiration for developers and designers & secondly for visitors of the site to discover new music.

The site is built with [Next.js](https://nextjs.org/) and javascript on the front end and styled with [Styled-Components](https://styled-components.com/). Users can like and unlike palettes and their liked palettes are saved to local storage.

On the backend is a [MongoDB](https://www.mongodb.com/) database used to store the data. I used a [GraphQL](https://graphql.org/) API to link the database to the front-end. The GraphQL API handles queries & the like and unlike feature as the like count is persisted in the database. An [Apollo](https://www.apollographql.com/) server facilitates the connection between the client and the database. Additionally, on the client, I used Apollo client for caching & as a GraphQL client.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
