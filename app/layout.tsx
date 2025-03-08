import './globals.css';
import '../styles/custom-styles.css';

export const metadata = {
  title: '建築法規アドバイザー',
  description: '建築に関する法規や規制について、質問に答えます。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* Font Awesome CDNリンク */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Googleフォント */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
