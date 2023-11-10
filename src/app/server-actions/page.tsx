import { whoAmI } from "@/actions/actions"
import WhoAmIButton from "@/components/whoami-button"

type Props = {}

export default async function ServerActionPage({}: Props) {
  
  return (
    <div className="mx-auto max-w-7xl">
      ServerActionPage
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  )
}