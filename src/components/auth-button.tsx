import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

type Props = {};

const AuthButton = (props: Props) => {
  const { data: session } = useSession();

  if (session)
    return (
      <div className="flex flex-row items-start">
        <div className="flex flex-row items-center gap-x-4">
          <Image
            src={session.user?.image ?? ''}
            width={42}
            height={42}
            alt="Profile Image"
            className="rounded-full"
          />
          <p>{session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-slate-600 px-6 py-2 rounded-md"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  return (
    <button
      onClick={() => signIn()}
      className="bg-slate-600 px-6 py-2 rounded-md h-fit"
    >
      Sign in
    </button>
  );
};

export default AuthButton;
