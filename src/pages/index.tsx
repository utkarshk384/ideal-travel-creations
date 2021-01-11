import Head from 'next/head'

import Home from './home'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Ideal Travel Creation</title>
      </Head>
      <Home />
    </>
  )
}
export default HomePage
