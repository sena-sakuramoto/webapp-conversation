"use client";

import { useState } from 'react';
import '../styles/custom-styles.css';

export default function Home() {
  // 状態変数
  const [selectedCountry, setSelectedCountry] = useState('日本');
  const [selectedLanguage, setSelectedLanguage] = useState('日本語');
  const [question, setQuestion] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  
  // 質問処理
  const handleSubmit = async () => {
    if (question.trim() === '') return;
    
    setIsLoading(true);
    
    try {
      // 自分のサーバーのAPIルートにリクエスト
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          country: selectedCountry,
          language: selectedLanguage,
          question: question
        })
      });
      
      if (!response.ok) {
        throw new Error('回答の取得に失敗しました');
      }
      
      // レスポンスを取得
      const data = await response.json();
      
      // 回答を表示（Difyのレスポンス形式に合わせる）
      setAnswer(data.answer);
      setShowAnswer(true);
      
    } catch (error) {
      console.error('エラー:', error);
      alert('すみません、エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
     {/* ナビゲーション */}
<nav className="nav">
  <div className="container nav-inner">
    <a href="#" className="logo">
      <i className="fas fa-building"></i>
      ナカノフドー 建築法規アドバイザー
    </a>
    <div className="nav-links">
      <a href="#" className="nav-link">ホーム</a>
      <a href="#" className="nav-link">法規検索</a>
      <a href="#" className="nav-link">お問い合わせ</a>
    </div>
  </div>
</nav>

{/* ヘッダー */}
<header className="header">
  <div className="container">
    <h1 className="title animate-float">ナカノフドー<br/>建築法規アドバイザー</h1>
    <p className="subtitle">中野不動産ならではの建築に関する法規や規制についての質問にお答えします。専門知識を持つAIが24時間対応いたします。</p>
  </div>
</header>
      
      {/* メインコンテンツ */}
      <main className="container">
        <div className="main">
          {/* 左カラム */}
          <div className="column">
            <div className="card">
              <h2 className="card-title"><i className="fas fa-info-circle"></i> サービスについて</h2>
              <p>建築法規アドバイザーは、<span className="squiggle">建築基準法</span>や関連規制についての質問に答えるAIサービスです。設計、施工、リフォームなどの場面で役立つ情報を提供します。</p>
              
              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="feature-text">
                    <h3>24時間対応</h3>
                    <p>いつでもどこでも、すぐに建築法規について調べることができます。</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="feature-text">
                    <h3>簡単検索</h3>
                    <p>知りたい情報を自然な言葉で質問するだけで、関連する法規を見つけられます。</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="feature-text">
                    <h3>迅速な回答</h3>
                    <p>AIが素早く回答を生成し、効率的に情報を得ることができます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 中央カラム */}
          <div className="column">
            <div className="card">
              <h2 className="form-title">ご質問はこちら</h2>
              <div className="question-form">
               {/* 国選択 - 日本とシンガポールのみ */}
<div className="select-container">
  <label htmlFor="country-select">どの国の法規について調べますか？</label>
  <select 
    id="country-select" 
    className="styled-select"
    value={selectedCountry}
    onChange={(e) => setSelectedCountry(e.target.value)}
  >
    <option value="日本">日本</option>
    <option value="シンガポール">シンガポール</option>
  </select>
</div>
                
                {/* 追加：言語選択 */}
                <div className="select-container">
                  <label htmlFor="language-select">どの言語で回答を受け取りますか？</label>
                  <select 
                    id="language-select" 
                    className="styled-select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    <option value="日本語">日本語</option>
                    <option value="英語">英語</option>
                    <option value="中国語">中国語</option>
                    <option value="韓国語">韓国語</option>
                    <option value="スペイン語">スペイン語</option>
                  </select>
                </div>
                
                <textarea 
                  placeholder="建築法規に関する質問を入力してください..." 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
                
                <button 
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  <i className="fas fa-paper-plane"></i> {isLoading ? '処理中...' : '質問する'}
                </button>
              </div>
              
              {/* 回答ボックス */}
              {showAnswer && (
                <div className="answer-box">
                  <h3 className="answer-title">回答</h3>
                  <div dangerouslySetInnerHTML={{ __html: answer }}></div>
                </div>
              )}
            </div>
          </div>
          
          {/* 右カラム */}
          <div className="column">
            <div className="card">
              <h2 className="card-title"><i className="fas fa-star"></i> よくある質問</h2>
              <div className="faq-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="feature-text">
                    <h3>住宅の天井高さの最低基準は？</h3>
                    <p>居室の天井高さは2.1m以上とされています（建築基準法施行令第21条）。</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-ruler-vertical"></i>
                  </div>
                  <div className="feature-text">
                    <h3>建ぺい率と容積率の違いは？</h3>
                    <p>建ぺい率は敷地面積に対する建築面積の割合、容積率は敷地面積に対する延床面積の割合です。</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-door-open"></i>
                  </div>
                  <div className="feature-text">
                    <h3>防火戸の設置基準は？</h3>
                    <p>延焼のおそれのある開口部や特定防火設備として防火戸を設置する必要があります。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="card-title"><i className="fas fa-book"></i> 参考資料</h2>
              <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                <li><a href="#" style={{ color: "var(--fashion-4)" }}>建築基準法全文</a></li>
                <li><a href="#" style={{ color: "var(--fashion-4)" }}>建築基準法施行令</a></li>
                <li><a href="#" style={{ color: "var(--fashion-4)" }}>各自治体の建築条例一覧</a></li>
                <li><a href="#" style={{ color: "var(--fashion-4)" }}>用途地域別建築制限まとめ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
 {/* フッター */}
<footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-section">
        <h3 className="footer-title">ナカノフドー 建築法規アドバイザー</h3>
        <p>中野不動産が提供する、建築に関する法規制の疑問を解決するAIアシスタント。</p>
      </div>
      
      <div className="footer-section">
        <h3 className="footer-title">リンク</h3>
        <ul className="footer-links">
          <li className="footer-link"><a href="#">ホーム</a></li>
          <li className="footer-link"><a href="#">法規検索</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h3 className="footer-title">お問い合わせ</h3>
        <ul className="footer-links">
          <li className="footer-link"><a href="#">お問い合わせフォーム</a></li>
          <li className="footer-link"><a href="#">サポート</a></li>
        </ul>
      </div>
    </div>
    
    <div className="copyright">
      &copy; 2025 ナカノフドー株式会社 All Rights Reserved.
    </div>
  </div>
</footer>
            
            <div className="footer-section">
              <h3 className="footer-title">リンク</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">ホーム</a></li>
                <li className="footer-link"><a href="#">法規検索</a></li>
                <li className="footer-link"><a href="#">利用規約</a></li>
                <li className="footer-link"><a href="#">プライバシーポリシー</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">お問い合わせ</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">お問い合わせフォーム</a></li>
                <li className="footer-link"><a href="#">よくある質問</a></li>
                <li className="footer-link"><a href="#">サポート</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            &copy; 2025 建築法規アドバイザー All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
