import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ótica | Loja',
    template: '%s | Ótica',
  },
  description: 'Óculos de grau, óculos de sol e lentes.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className='h-full antialiased'>
      <body className='flex min-h-full flex-col'>{children}</body>
    </html>
  );
}
