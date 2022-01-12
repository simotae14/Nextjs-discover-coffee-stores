import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import cls from 'classnames'

import styles from '../../styles/coffee-store.module.css'
import { fetchCoffeeStores } from '../../lib/coffee-stores'

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params", params);
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStore: coffeeStores.find(({fsq_id: coffeStoreId}) => {
        return coffeStoreId.toString() === params.id; // dynamic ID
      })
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map(({fsq_id: coffeStoreId}) => ({
    params: {
      id: coffeStoreId.toString(),
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
  console.log(props.coffeeStore)
  const {
    name, photos, location
  } = props.coffeeStore;
  const imgUrl = photos?.length > 0 ? `${photos?.[0]?.prefix}260x160${photos?.[0]?.suffix}` : 'https://via.placeholder.com/260x160';

  const handleUpvoteButton = () => {
    console.log('handle upvote');
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          ></Image>
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width="24"
              height="24"
              alt="Icon places"
            ></Image>
            <p className={styles.text}>{location?.address}</p>
          </div>
          {
            location?.neighborhood?.[0] && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/nearMe.svg"
                width="24"
                height="24"
                alt="Icon near me"
              ></Image>
              <p className={styles.text}>{location.neighborhood[0]}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="Icon Star"
            ></Image>
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!</button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore;
