export default function Home() {
  return (
    <div className="main-content">
      <h1>建築法規アドバイザー</h1>
      <p>建築に関する法規や規制について、質問に答えます。</p>
      
      <div className="question-form">
        <h2>ご質問はこちら</h2>
        <textarea placeholder="建築法規に関する質問を入力してください..."></textarea>
        <button>質問する</button>
      </div>
    </div>
  )
}
