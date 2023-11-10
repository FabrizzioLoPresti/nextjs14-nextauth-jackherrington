import { headers } from 'next/headers'

type Props = {}

const fetchName = async () => {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/whoami`, {
    method: 'GET',
    headers: customHeaders,
    cache: 'no-cache',
    next: {
      tags: ['api'],
    }
  })
  const { name } = await response.json()
  return name
}

export default async function ApiFromServerPage({}: Props) {
  const name = await fetchName()
  return (
    <div className='mx-auto max-w-7xl'>
      <p className='text-2xl'>Hello, {name}!</p>
    </div>
  )
}