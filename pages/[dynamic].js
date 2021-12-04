import { useRouter } from 'next/router'
import Head from 'next/head'

const DynamicRoute = () => {
  const router = useRouter()
  const { dynamic } = router.query
  return (
    <div>
      <Head>
        <title>{dynamic}</title>
      </Head>
      Hi there I am a dynamic route {dynamic}
    </div>
  )
}

export default DynamicRoute
