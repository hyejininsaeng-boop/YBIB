import { HfInference } from '@huggingface/inference';
import type { NextApiRequest, NextApiResponse } from 'next';

const hf = new HfInference(process.env.HF_API_KEY);

const SYSTEM_PROMPT = `당신은 전북특별자치도 용북중학교의 IB(International Baccalaureate) 프로그램 전문 안내 챗봇 'YBIB 톡톡'입니다.

다음 정보를 바탕으로 학생, 학부모, 교사의 질문에 친절하고 정확하게 답변해주세요:

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

[답변 형식]
반드시 아래 JSON 형식으로만 답변하세요. 다른 텍스트는 절대 포함하지 마세요:
{
  "summary": "핵심 요약 (1-2문장, 가장 중요한 내용만)",
  "details": "상세 설명 (마크다운 형식 사용 가능, **굵게**, ## 제목, - 목록 등)"
}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const prompt = buildPrompt(messages);

    const response = await hf.textGeneration({
     model: 'HuggingFaceH4/zephyr-7b-beta',
      inputs: prompt,
      parameters: {
        max_new_tokens: 1024,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.1,
        return_full_text: false,
      },
    });

    const text = response.generated_text?.trim() || '';

    // JSON 파싱 시도
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return res.status(200).json({
          summary: parsed.summary || '답변이 생성되었습니다.',
          details: parsed.details || text,
        });
      }
    } catch {
      // JSON 파싱 실패 시 전체 텍스트를 details로
    }

    return res.status(200).json({
      summary: text.slice(0, 100) + (text.length > 100 ? '...' : ''),
      details: text,
    });
  } catch (error) {
    console.error('HF API error:', error);
    return res.status(500).json({
      error: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    });
  }
}

function buildPrompt(messages: { role: string; content: string }[]): string {
  let prompt = `<s>[INST] ${SYSTEM_PROMPT}\n\n`;

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    if (msg.role === 'user') {
      if (i === 0) {
        prompt += `${msg.content} [/INST]`;
      } else {
        prompt += ` [INST] ${msg.content} [/INST]`;
      }
    } else if (msg.role === 'assistant') {
      prompt += ` ${msg.content} </s>`;
    }
  }

  return prompt;
}
