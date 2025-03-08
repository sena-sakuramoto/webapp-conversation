import './globals.css';
import '../styles/custom-styles.css';

export const metadata = {
  title: 'ナカノフドー建設 国際建築法規アドバイザー',
  description: 'ナカノフドー建設が提供する国際建築法規に関する質問応答サービス',
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
