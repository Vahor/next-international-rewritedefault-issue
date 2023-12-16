import type { ReactElement } from 'react';
import './globals.css';
// import { getStaticParams } from '../../locales/server';

// Uncomment to test Static Generation for all pages
// export function generateStaticParams() {
//   return getStaticParams();
// }

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
