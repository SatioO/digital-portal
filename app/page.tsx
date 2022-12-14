import { AppProps } from 'next/app';
import Auth from './auth/login-auth';

export default function Home(props: AppProps): JSX.Element {
  return (
    <div>
      {/** @ts-expect-error */}
      <Auth />
    </div>
  );
}
