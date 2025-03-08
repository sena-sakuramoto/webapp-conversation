'use client'
import React, { useEffect } from 'react';
import './styles/custom-styles.css'; // このファイルはすぐ後で作成します

export default function Home() {
  // スクリプト部分を実行するためのuseEffect
  useEffect(() => {
    // テーマ切り替え
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
      });
    }
    
    // チャット送信のロジックもここに入れられます
  }, []);

  return (
    <>
      {/* ここに私が提供したHTMLコード全体をコピペします */}
      <div className="app-container">
        {/* サイドナビゲーション */}
        <aside className="sidebar">
          <div className="logo-container">
            <img src="/logo.svg" alt="建築法規アドバイザー" className="logo" />
            <h1>建築法規<br />アドバイザー</h1>
          </div>
          <nav className="nav-menu">
            {/* ナビゲーションアイテム */}
            <a href="#" className="nav-item active">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
              <span>ホーム</span>
            </a>
            {/* 他のナビゲーションアイテムも同様に */}
          </nav>
          
          {/* 国選択・言語選択など、残りのHTMLコードも全部ここに */}
        </aside>

        {/* メインコンテンツエリア */}
        <main className="main-content">
          {/* ここにメインコンテンツのHTMLコード */}
        </main>
      </div>
    </>
  );
}
