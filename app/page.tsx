import { AppProps } from 'next/app';

export default function Home(props: AppProps): JSX.Element {
  return (
    <div>
      <div className="h-16 bg-gradient-to-r from-primary to-secondary"></div>
    </div>
  );
}
