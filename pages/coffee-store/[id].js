import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === params.id; // dynamic ID
      })
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map(coffeeStore => ({
    params: {
      id: coffeeStore.id.toString(),
    }
  }))
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading</div>
  }
  const {
    address,
    name,
    neighbourhood
  } = props.coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  )
}

export default CoffeeStore;
