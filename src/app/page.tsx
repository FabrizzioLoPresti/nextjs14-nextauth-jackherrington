import Link from "next/link"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="mx-auto max-w-7xl">
      {session?.user?.name ? (
        <h1>Hi, {session.user.name}!</h1>
      ) : (
        <p>You are not logged in</p>
      )}
      <Link href="/dashboard">Dashboard (Protected Route)</Link>
    </main>
  )
}
