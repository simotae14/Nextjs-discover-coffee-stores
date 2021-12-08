import { useRouter } from 'next/router'
import Link from 'next/link'

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
  return {
    paths: [
      {
        params: {
          id: '0'
        }
      },
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '300'
        }
      }
    ],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter()
  console.log("router", router);
  if (router.isFallback) {
    return <div>Loading</div>
  }
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href={{
        pathname: '/coffee-store/[id]',
        query: { id: 'my-post' },
      }}>
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  )
}

export default CoffeeStore;
