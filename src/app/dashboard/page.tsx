import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"

type Props = {}

export default async function DashboardPage({}: Props) {
  const session = await getServerSession()

  if(!session || !session.user) {
    return redirect('/api/auth/signin')
  }

  return (
    <div className="mx-auto max-w-7xl">
      This is protected content. You can access this content because you are signed in.
    </div>
  )
}