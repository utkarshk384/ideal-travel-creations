## Website Technologies used for the Frontend

This packages that are used to power this website are as follows:

1. React with Next js.
2. Graphql Frontend with @Apollo/client.
3. Sass for styling all the React Components.
4. React Markdown to render Markdown using GFM(Github Flavored Markdown) plugin.
5. Typescript to strongly type out the code.
6. GSAP and React Transition Group for any animations other than the hover animation.
7. Hover animations are done by using CSS Animations.
8. React Final form for form components and validation.
9. Ngrok to get the backend running in a HTTPS protocal.

## Npm/yarn Scripts

`yarn dev` - is used to run `next-dev` and `ngrok` in a parallel manner.
`yarn next-dev` - is used for starting the development server on a given port.
`yarn dev-local` - Runs `next-dev-local` and `ngrok` in a parallel manner.
`yarn next-dev-local` - Runs dev server on another port.
`yarn build` - is ued for building out the whole project in production mode.
`yarn test` - tests the project using jest.
`yarn ngrok` - starts ngrok and forwards the port 1337(backend port) to ngrok https servers and creates a new next.config.js file each time it is called.
`yarn generate` - Runs codegen. Codegen is a graphql scheme types generator for typescript.
`yarn start` - Starts the production build.
