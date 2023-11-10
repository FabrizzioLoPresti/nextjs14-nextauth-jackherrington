'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import AuthButton from "./auth-button"

type Props = {}

const ACTIVE_ROUTE = 'bg-gray-700 text-gray-300 py-1 px-2'
const INACTIVE_ROUTE = 'text-gray-500 hover:bg-gray-700 hover:text-gray-300 py-1 px-2'

const Navbar = (props: Props) => {
  const pathname = usePathname()

  return (
    <nav className="mx-auto max-w-7xl flex flex-row justify-between py-6">
      <div className="flex flex-col gap-y-2">
        <Link href='/' className={pathname === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Home</Link>
        <Link href='/dashboard' className={pathname === '/dashboard' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Protected Route</Link>
        <Link href='/server-actions' className={pathname === '/server-actions' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Server Actions</Link>
        <Link href='/api-from-client' className={pathname === '/api-from-client' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>API from Client</Link>
        <Link href='/api-from-server' className={pathname === '/api-from-server' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>API From Server</Link>
      </div>

      <AuthButton />
    </nav>
  )
}

export default Navbar