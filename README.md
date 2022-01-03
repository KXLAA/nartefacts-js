## nartefacts

<p align="center">
  <img src="https://ucarecdn.com/a85db1c9-4652-485e-b507-41997a7106e9/frontendcardio.webp" alt="Front End Cardio">
</p>
[nartefacts](https://www.nartefacts.com/) is a website that curates colour palettes extracted from beautiful album covers of African musicians. The dominant colours on the covers are extracted using [colour-thief](https://www.npmjs.com/package/color-thief) an npm package.

The project serves two aims, firstly to provide colour inspiration for developers and designers & secondly for visitors of the site to discover new music.

The site is built with[Next.js](https://nextjs.org/) and javascript on the front end and styled with [Styled-Components](https://styled-components.com/). Users can like and unlike palettes and their liked palettes are saved to local storage.

On the backend is a [MongoDB](https://www.mongodb.com/) database used to store the data. I used a [GraphQL](https://graphql.org/) API to link the database to the front-end. The GraphQL API handles queries & the like and unlike feature as the like count is persisted in the database. An [Apollo](https://www.apollographql.com/) server facilitates the connection between the client and the database. Additionally, on the client, I used Apollo client for caching & as a GraphQL client.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
