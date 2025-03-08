"use client";

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  // 質問を処理する関数
  const handleSubmit = () => {
    // ここでは簡単なデモ応答を返します
    if (question.trim() === '') {
      setAnswer('質問を入力してください。');
      return;
    }
    
    setAnswer('お問い合わせいただきありがとうございます。建築基準法第30条では、居室の天井の高さは2.1m以上必要とされています。詳細については専門家にご相談ください。');
  };
  
  return (
    <div className="main-content">
      <h1>建築法規アドバイザー</h1>
      <p>建築に関する法規や規制について、質問に答えます。</p>
      
      <div className="question-form">
        <h2>ご質問はこちら</h2>
        <textarea 
          placeholder="建築法規に関する質問を入力してください..." 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>質問する</button>
      </div>
      
      {answer && (
        <div className="answer-box">
          <h2>回答</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
