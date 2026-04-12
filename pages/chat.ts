import type { NextApiRequest, NextApiResponse } from 'next';

const SYSTEM_PROMPT = `당신은 전북특별자치도 용북중학교의 IB(International Baccalaureate) 프로그램 전문 안내 챗봇 'YBIB 톡톡'입니다.

[학교 정보]
- 학교명: 용북중학교 (전북특별자치도)
- IB 프로그램: MYP (Middle Years Programme) 후보학교 (2024년 6월 26일 지정)
- 연락처: 063-630-9118
- 카카오톡 오픈채팅: https://open.kakao.com/o/sJpD9Vec

[IB MYP 핵심 내용]
- 8개 교과군: 국어, 영어, 사회, 과학, 수학, 체육, 예술, 디자인
- 평가기준: A(지식이해), B(조사/탐구), C(의사소통), D(비판/성찰)
- 학습자상 10가지: 탐구하는, 지식풍부한, 사고하는, 소통하는, 원칙지키는, 열린마음, 배려하는, 도전하는, 균형잡힌, 성찰하는 사람
- 6개 세계적 맥락: 정체성과 관계, 시간과 공간에서의 위치, 개인적 문화적 표현, 과학과 기술의 혁신, 세계화와 지속가능성, 공정성과 발전
- ATL 5가지: 사고, 연구, 소통, 자기관리, 사회적 기술

반드시 아래 JSON 형식으로만 답변하세요. 다른 텍스트는 절대 포함하지 마세요:
{"summary": "핵심 요약 (1-2문장)", "details": "상세 설명 (마크다운 사용 가능)"}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Invalid request' });

  try {
    const response = await fetch(
      'https://router.huggingface.co/hf-inference/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/Mistral-7B-Instruct-v0.3',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HF responded ${response.status}: ${errText}`);
    }

    const data = await response.json();
    const text = (data.choices?.[0]?.message?.content || '').trim();

    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return res.status(200).json({
          summary: parsed.summary || '답변이 생성되었습니다.',
          details: parsed.details || text,
        });
      }
    } catch {}

    return res.status(200).json({
      summary: text.slice(0, 100) + (text.length > 100 ? '...' : ''),
      details: text,
    });
  } catch (error: any) {
    console.error('HF API error:', error);
    return res.status(500).json({ error: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
  }
}