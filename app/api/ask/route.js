// app/api/ask/route.js
export async function POST(request) {
  try {
    // リクエストからデータを取得
    const body = await request.json();
    
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
        app_id: process.env.NEXT_PUBLIC_APP_ID
      })
    });
    
    // Difyからの応答を取得
    const data = await response.json();
    
    // 結果を返す
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    // エラー時の処理
    console.error('エラー:', error);
    return new Response(JSON.stringify({ error: 'エラーが発生しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
