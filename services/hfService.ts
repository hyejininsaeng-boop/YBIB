// HuggingFace 기반 서비스 (Gemini 대체)
// 브라우저에서 직접 HF를 호출하지 않고 /api/chat 경유 → API 키 노출 방지

interface GeminiHistory {
  role: string;
  parts: { text: string }[];
}

interface FileData {
  mimeType: string;
  data: string;
}

interface ChatbotResponse {
  summary: string;
  details: string;
}

export async function getChatbotResponse(
  userMessage: string,
  _selectedProgram: null,
  history: GeminiHistory[],
  fileData?: FileData
): Promise<ChatbotResponse> {
  // 대화 히스토리를 단순 메시지 배열로 변환
  const messages = history.map((h) => ({
    role: h.role === 'model' ? 'assistant' : 'user',
    content: h.parts[0]?.text || '',
  }));

  messages.push({ role: 'user', content: userMessage });

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, fileData }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || '서버 오류가 발생했습니다.');
  }

  const data = await res.json();
  return {
    summary: data.summary || '답변이 생성되었습니다.',
    details: data.details || data.message || '',
  };
}
