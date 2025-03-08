import '../styles/custom-styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="layout">
          {/* サイドバー */}
          <div className="sidebar">
            <div className="logo">建築法規</div>
            <div className="subtitle">アドバイザー</div>
            <nav>
              <ul>
                <li className="active">
                  <a href="/">ホーム</a>
                </li>
                <li>
                  <a href="/about">法規検索</a>
                </li>
                <li>
                  <a href="/contact">お問い合わせ</a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* メインコンテンツ */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
