import { unstable_getServerSession } from 'next-auth/next';
import { SignIn, SignOut } from './actions';

export default async function Auth() {
  const session = await unstable_getServerSession();

  return session?.user ? (
    <>
      {session.user.image && (
        <span style={{ backgroundImage: `url('${session.user.image}')` }} />
      )}
      <span>
        <small>Signed in as</small>
        <br />
        <strong>{session.user.email ?? session.user.name}</strong>
      </span>
      <SignOut />
    </>
  ) : (
    <>
      <span>You are not signed in</span>
      <SignIn />
    </>
  );
}
