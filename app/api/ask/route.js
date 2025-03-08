// app/api/ask/route.js
export async function POST(request) {
  try {
    // リクエストからデータを取得
    const body = await request.json();
    
    console.log('リクエスト内容:', body); // デバッグ用
    
    // Difyへリクエスト送信
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/completion-messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_APP_KEY}`
      },
      body: JSON.stringify({
        inputs: {
          country: body.country,
          language: body.language
        },
        query: body.question,
        response_mode: "blocking",
        user: "nakanofudou-user", // ユーザー識別子
        app_id: process.env.NEXT_PUBLIC_APP_ID
      })
    });
    
    // 応答の状態をチェック
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Dify APIエラー:', response.status, errorData);
      throw new Error(`APIエラー: ${response.status}`);
    }
    
    // Difyからの応答を取得
    const data = await response.json();
    console.log('Dify応答:', data); // デバッグ用
    
    // 結果を返す
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    // エラー時の処理
    console.error('サーバーエラー:', error);
    return new Response(JSON.stringify({ 
      error: 'エラーが発生しました',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
