
import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 dark:text-slate-200">{title}</span>
        <i className={`fas fa-chevron-down text-slate-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4 pt-0 text-slate-600 dark:text-slate-300 prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export const FaqView: React.FC = () => {
  return (
    <div className="p-1">
      <header className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              <i className="fas fa-question-circle mr-2 text-blue-500"></i>자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">용북중학교 IB 프로그램 관련 Q&A</p>
      </header>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md mt-6">
          <AccordionItem title="IB는 충분한 검증을 거쳤나요?">
              <p>1968년 설립, 총 50년의 신뢰도 및 타당도 검증을 거쳤습니다. 일본은 2013년부터 공교육에 도입하여 현재 총 150여개 학교를 운영 중이며, IB 학교 교사 지원 및 평가를 통한 교육의 질을 관리하고 있습니다.</p>
          </AccordionItem>
          <AccordionItem title="PYP, MYP는 학교에서 어떻게 운영되나요?">
              <p>초, 중학교 IB 프로그램(PYP, MYP)은 수업 방법론을 제시하지만, 가르치는 내용은 별도로 제시하지 않습니다. 2022 개정교육과정의 내용체계와 성취기준을 바탕으로 IB 프로그램을 융합하여 개념기반 탐구수업을 진행하므로 교과 평가도 이루어집니다. 따라서 기존 교과서를 사용할 수 있습니다.</p>
          </AccordionItem>
          <AccordionItem title="일반 학교에서도 운영이 가능한가요? 추가 비용이 드나요?">
              <p>미국, 일본은 일반학교에서 IB를 도입하여 교육의 질적 개선 사례가 많습니다. PYP와 MYP는 탐구 수업 중심으로 운영되며, 관련 자료들의 한글화 프로그램이 진행 중이어서 일반학교 도입이 수월합니다. 교육청에서 IB를 운영하는 학교는 학생과 학부모가 부담하는 추가 비용은 없습니다.</p>
          </AccordionItem>
          <AccordionItem title="인성교육은 어떻게 이루어지나요?">
              <p>IB 교육을 통해 학생들이 길러야 하는 학습자상(IB learner profile)은 '소통하는 사람', '배려하는 사람', '성찰하는 사람'으로 요약되는 사람다운 사람의 모습입니다. 이를 통해 학생들이 더불어 살아가는 시민으로 성장할 수 있도록 지원합니다. IB의 모든 교육과정에서 교사와 학생은 '학습접근법(ATL)'이라고 불리는 사회성, 의사소통, 사고, 자기관리, 연구의 5가지 스킬을 강조하여 학생들이 academic success를 이룰 수 있도록 지원하며, 전인교육을 통해 균형 잡힌 사람으로 성장할 수 있게 합니다.</p>
          </AccordionItem>
           <AccordionItem title="PYP·MYP·DP(IB 과정) 중 DP교는 어떻게 연결되나요?">
              <p>PYP와 MYP는 IB 교육과정의 단절 없는 연계성을 바탕으로 합니다. PYP는 초등학교 과정으로 호기심을 통한 통합 탐구학습이고, MYP는 중학교 과정으로 보다 깊이 있는 학습을 통해 비판적 사고를 기릅니다. 마지막으로 DP는 고등학교 과정으로 학생들이 특성화된 학습을 통해 대학 진학을 할 수 있도록 돕습니다.</p>
          </AccordionItem>
          <AccordionItem title="학생들이 과제를 베끼거나 짜깁기 하지 않을까요?">
              <p>가장 중요한 것은 '학문적 진실성(Academic integrity)'입니다. 남의 생각을 자신의 생각인 것처럼 쓰거나 보고서에 참고문헌 표시를 안하더라도 IB의 인공지능(AI)이 적발합니다. 이 점에 대해서는 모든 수업활동을 통해 학생들에게 교육이 이루어집니다.</p>
          </AccordionItem>
          <AccordionItem title="전라북도교육청 소속 IB 프로그램 운영학교는 얼마나 되나요?">
              <p>2026년 1월 기준, 전라북도교육청에서 IB 프로그램을 운영 중인 학교는 총 <strong>31개교</strong>입니다.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>관심학교 (6교):</strong> 전주(온빛중, 덕일중), 군산(대성중), 익산(이리남초, 이리영등초, 익산가온초)</li>
                  <li><strong>후보학교 (22교):</strong> 전주(부설초, 효문중, 전주여고, 전주중앙여고, 양현고), 군산(부설초, 회현초, 회현중), 익산(이백제초, 원광중, 함열여중, 익산부송중), 남원(덕과초, 이백초, 용북중), 김제(지평선중, 지평선고), 순창(순창고), 고창(자유중, 자유고), 부안(부안초, 백산중)</li>
                  <li><strong>IB 월드스쿨 (3교):</strong> 전주(아중초), 익산(영만초), 완주(화산중)</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">※ 2026. 1월 기준 전라북도교육청 IB 프로그램 운영학교 현황</p>
          </AccordionItem>
          <AccordionItem title="MYP 이수 후, 전국 DP과정 고등학교는 얼마나 되나요?">
              <p>2023년 3월 기준, 전국에 총 28개 고등학교가 IB DP를 운영하고 있으며, 이 중 21개교는 국공립학교이고 7개교는 사립 및 외국인학교입니다. 지역별로는 경기 9개교, 대구 7개교, 충남 4개교, 인천 2개교, 전북 1개교, 제주 1개교, 서울 1개교, 대전 1개교, 부산 1개교에서 DP 과정을 운영하고 있습니다.</p>
          </AccordionItem>
      </div>
    </div>
  );
};
