import { getSession } from 'next-auth/react';

export default function Auth() {
  // const session = await unstable_getServerSession(authOptions);
  console.log(getSession());

  return null;

  // return session?.user ? (
  //   <>
  //     {session.user.image && (
  //       <span style={{ backgroundImage: `url('${session.user.image}')` }} />
  //     )}
  //     <span>
  //       <small>Signed in as</small>
  //       <br />
  //       <strong>{session.user.email ?? session.user.name}</strong>
  //     </span>
  //     <SignOut />
  //   </>
  // ) : (
  //   <>
  //     <span>You are not signed in</span>
  //     <SignIn />
  //   </>
  // );
}
