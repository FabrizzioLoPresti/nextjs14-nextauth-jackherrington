'use client'

import {useState} from 'react'

type Props = {
  whoAmIAction: () => Promise<string>
}

const WhoAmIButton = ({whoAmIAction}: Props) => {
  const [name, setName] = useState<string | null>(null)
  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAmIAction())
        }}
        className='bg-slate-600 px-4 py-2 rounded-md text-white'
      >
        Who Am I?
      </button>
      {name && (
        <div>
          You are {name}
        </div>
      )}
    </div>
  )
}

export default WhoAmIButton