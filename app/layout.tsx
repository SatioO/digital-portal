import { Roboto } from '@next/font/google';
import './globals.css';

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${roboto.className} light`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
