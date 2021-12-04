import { useRouter } from 'next/router'

const DynamicRoute = () => {
  const router = useRouter()
  const { dynamic } = router.query
  return (
    <div>
      Hi there I am a dynamic route {dynamic}
    </div>
  )
}

export default DynamicRoute
