"use client";

import { useState } from 'react';
import '../styles/custom-styles.css';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = () => {
    if (question.trim() === '') return;
    
    setIsLoading(true);
    
    // APIコール（シミュレーション）
    setTimeout(() => {
      setShowAnswer(true);
      setIsLoading(false);
      
      // 滑らかにスクロール
      setTimeout(() => {
        const answerBox = document.querySelector('.answer-box');
        if (answerBox) {
          answerBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 1000);
  };
  
  return (
    <>
      {/* ナビゲーション */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <i className="fas fa-building"></i>
            建築法規アドバイザー
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
          <h1 className="title animate-float">建築法規アドバイザー</h1>
          <p className="subtitle">建築に関する法規や規制について、質問に答えます。専門知識を持つAIが24時間対応いたします。</p>
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
                
                {/* 装飾要素 */}
                <i className="fas fa-pencil-alt deco-element deco-1"></i>
                <i className="fas fa-ruler-combined deco-element deco-2"></i>
                
                {/* SVG矢印 */}
                <svg className="handdrawn-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                  <path d="M0,15 C20,5 40,25 55,15 L50,10 M55,15 L50,20" fill="none" stroke="#F25C05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* 回答ボックス */}
              {showAnswer && (
                <div className="answer-box">
                  <h3 className="answer-title">建築基準法における耐火建築物について</h3>
                  <p>建築基準法第2条第9号の2によると、<span className="highlight">耐火建築物</span>とは、主要構造部が耐火構造であるか、または準耐火構造とし、かつ外壁の開口部で延焼のおそれのある部分に防火設備を有する建築物のことを指します。</p>
                  <p>耐火建築物は火災時の安全性を確保するために重要な規定であり、特に以下の場合に必要となります：</p>
                  <ul>
                    <li>3階建て以上のホテルや旅館</li>
                    <li>地下街の建築物</li>
                    <li>一定規模以上の商業施設</li>
                  </ul>
                  <p>詳細については、建築基準法施行令第107条から第110条もご参照ください。</p>
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
              
              {/* SVG円 */}
              <svg className="handdrawn-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#F2C53D" strokeWidth="3" strokeDasharray="5 3"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">建築法規アドバイザー</h3>
              <p>建築に関する法規制の疑問を解決するAIアシスタント。必要な情報を素早く見つけることができます。</p>
            </div>
            
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
