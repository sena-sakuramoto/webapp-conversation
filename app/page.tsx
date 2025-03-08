"use client";

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // 質問を処理する関数
  const handleSubmit = () => {
    // 空の質問をチェック
    if (question.trim() === '') {
      setAnswer('質問を入力してください。');
      return;
    }
    
    // ローディング状態を設定
    setIsLoading(true);
    
    // API呼び出しをシミュレート
    setTimeout(() => {
      // 建築基準法に関するサンプル回答
      let response = '';
      
      if (question.includes('天井') || question.includes('高さ')) {
        response = '建築基準法第30条では、居室の天井の高さは2.1m以上必要とされています。';
      } else if (question.includes('窓') || question.includes('採光')) {
        response = '建築基準法第28条では、居室には採光のために必要な窓などを設ける必要があります。採光に必要な窓の面積は、居室の床面積の1/7以上とされています。';
      } else if (question.includes('階段')) {
        response = '建築基準法施行令第23条では、階段の蹴上げは23cm以下、踏面は15cm以上と定められています。また、幅は75cm以上必要です。';
      } else {
        response = 'お問い合わせいただきありがとうございます。ご質問の内容に関しては、建築士や法律の専門家にご相談されることをお勧めします。';
      }
      
      setAnswer(response);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="title">建築法規アドバイザー</h1>
        <p className="description">建築に関する法規や規制について、質問に答えます。</p>
        
        <div className="question-form">
          <h2>ご質問はこちら</h2>
          <textarea 
            placeholder="建築法規に関する質問を入力してください..." 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className={isLoading ? 'loading' : ''}
          >
            {isLoading ? '処理中...' : '質問する'}
          </button>
        </div>
        
        {answer && (
          <div className="answer-box">
            <h2>回答</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
