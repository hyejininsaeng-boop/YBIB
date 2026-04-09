
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

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: string }> = ({ title, children, icon }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {icon && <i className={`fas ${icon} mr-3 text-blue-500`}></i>}
            {title}
        </h3>
        <div className="space-y-3 text-slate-700 dark:text-slate-300 prose prose-sm dark:prose-invert max-w-none">
            {children}
        </div>
    </div>
);

const learnerProfiles = [
    { name: "Inquirers", korean: "탐구하는 사람" },
    { name: "Knowledgeable", korean: "지식이 풍부한 사람" },
    { name: "Thinkers", korean: "생각하는 사람" },
    { name: "Communicators", korean: "소통하는 사람" },
    { name: "Principled", korean: "원칙을 세우고 지키는 사람" },
    { name: "Open-minded", korean: "열린 마음을 가진 사람" },
    { name: "Caring", korean: "배려하는 사람" },
    { name: "Risk-takers", korean: "도전하는 사람" },
    { name: "Balanced", korean: "균형 있는 사람" },
    { name: "Reflective", korean: "성찰하는 사람" },
];

export const YongbukView: React.FC = () => {
    return (
        <div className="p-1">
            <header className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    <i className="fas fa-school mr-2 text-blue-500"></i>용북중학교 IB 프로그램
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">YONGBUK MIDDLE SCHOOL</p>
            </header>

            <InfoCard title="용북중학교 IB 교육 목표" icon="fa-bullseye">
                <h4><strong>비전</strong></h4>
                <p>믿음의 진리 안에서 배움의 기쁨을 통해 글로벌리더십을 상상하는 사랑의 학교</p>
                <h4><strong>인재상</strong></h4>
                <p>열린 마음으로 세상을 탐구하며 함께 성장하는 능력인</p>
                <h4><strong>사명선언문</strong></h4>
                <p>용북중학교는 하나님의 사랑 안에서 지식·기능을 익혀 미래사회를 슬기롭게 준비하며 함께 공동체 가치를 존중하는 책임감 있는 리더를 길러 세상을 이롭게 하도록 다짐한다. 이를 위해 학생의 다양성을 존중하고 연대와 협력을 통해 모든 면에서 균형 있게 성장하기 위해 우리 교육공동체 모두가 함께 노력하며 끝까지 도전하도록 이끌겠다. 또한 용북중학교는 하나님의 마음으로 소통하며 학생 각각이 지닌 고유하고 창의적인 잠재능력을 발견하고 자신감 있게 표현할 수 있도록 공교육 혁신모델을 창조하기 위해 노력한다.</p>
            </InfoCard>

            <InfoCard title="IB (International Baccalaureate)란?" icon="fa-globe-americas">
                <p>스위스에 본부를 둔 비영리교육재단인 IBO(International Baccalaureate Organization)에서 개발·운영하는 국제 공인 교육 과정 프로그램입니다. 학습자 중심, 교육과정 중심으로 가르치는 것을 원칙으로 탐구 학습 활동을 통한 학습자의 자기주도성 함양을 추구하는 교육 프로그램이며, 세계 160여 개국 5,600여개교에서 사용 중입니다.</p>
                <h4><strong>IB의 교육목표</strong></h4>
                <p>IB의 목표는 서로 다른 문화를 이해하고 존중하며, 더 나은 평화로운 세상을 실현하는 데 기여할 수 있는 지적이며 탐구심이 많고 인정이 많은 젊은이를 양성하는 데 있습니다. 이를 위해 본 기관은 학교, 정부 및 국제기구와 협력하여 국제적인 수준의 교육과 균형 잡힌 평가시스템을 갖춘 도전적인 교육 프로그램을 개발하고 있습니다.</p>
            </InfoCard>
            
            <InfoCard title="MYP (Middle Years Programme)란?" icon="fa-book-reader">
                <p>중학교 프로그램인 MYP(만11세-16세) 시기는 학생들이 배운 것을 토대로 발표 중심 수업 및 탐구에 대한 지도력을 제공하는 교육 체계, 즉 일종의 ‘틀(framework)’입니다. MYP 학교는 운영 중에도 학생들의 능력과 동기유발에 우리나라 교육과정의 내용 체계와 성취 기준을 바탕으로 통합적으로 가르치고 기존의 교과서 또한 사용할 수 있습니다.</p>
                <h4 className="mt-4"><strong>MYP 주요 특징</strong></h4>
                <ul>
                    <li><strong>맥락 중심 교수-학습:</strong> 학습 경험이 학생들의 삶과 세상/현실세계에 연결될 때 배움이 가장 잘 일어난다는 사실을 바탕으로, 6개 영역의 ‘글로벌 맥락(global context)’을 통해 실제적 연계 강화</li>
                    <li><strong>개념과 탐구 기반 학습:</strong> 단순 사실이나 특정교과에만 적용되는 주제를 넘어 새로운 상황에 전이시키고 적용할 수 있는 원리이며 ‘핵심/개념’ 중심 학습 원리</li>
                    <li><strong>학습접근법(ATL):</strong> 학생들이 배우는 방법을 배우도록 소통 기능, 사회적 기능, 자기관리 기능, 연구 기능, 사고 기능 등 5개 학습 경로 강조</li>
                    <li><strong>행동으로서의 봉사:</strong> 타인을 배려하며 지역 사회의 구성원으로 성장하도록 학습 내용과 실천을 통한 봉사활동 강조, MYP 커뮤니티 프로젝트와 연계</li>
                </ul>
                <h4 className="mt-4"><strong>MYP 구성요소</strong></h4>
                <ul>
                    <li><strong>8개 교과군:</strong> 국어, 제2외국어, 사회, 과학, 수학, 체육, 예술, 디자인</li>
                    <li><strong>융합(간학문적)학습 단위</strong></li>
                    <li><strong>프로젝트:</strong> 장기(개인) 프로젝트(10학년), 커뮤니티 프로젝트(8-9학년)</li>
                </ul>
            </InfoCard>

            <InfoCard title="IB 학습자상 (Learner Profile)" icon="fa-user-graduate">
                <p>IB 교육의 핵심은 학습자 프로필(Learner Profile)에 있습니다. 이는 10가지 특성을 통해 학생들이 균형 잡힌 인재로 성장하도록 돕는 것을 목표로 합니다.</p>
                <div className="grid grid-cols-2 gap-4 mt-4 not-prose">
                    {learnerProfiles.map(profile => (
                        <div key={profile.name} className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-center">
                            <div className="font-bold text-slate-800 dark:text-slate-200">{profile.korean}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{profile.name}</div>
                        </div>
                    ))}
                </div>
            </InfoCard>

            <InfoCard title="IB 수업과 평가" icon="fa-tasks">
                <h4><strong>IB MYP 수업</strong></h4>
                <p>우리나라 2022 개정교육과정의 성취기준과 성격·내용을 분석하여 IB 프로그램을 융합, 학생들의 탐구능력을 향상하여 개념기반 탐구 수업을 진행합니다. IB MYP 수업은 탐구-행동-성찰을 중심으로 상호작용과 협력하도록 디자인되어 스스로 탐구하고 행동하며 성찰할 수 있도록 가르칩니다.</p>
                <h4><strong>IB MYP 평가</strong></h4>
                <p>IB 평가는 전 세계에 일관된 기준으로 기준과 관련된 공정한 방법으로 학생 개개인의 성장을 평가합니다. IB MYP 학교의 교사 또는 학급 단위에서 학생들의 평가가 이루어지며, 평가 과제는 하나 이상의 평가기준에 따라 채점됩니다. 다양한 탐구 기반 과제를 사용하여 학생들의 다양한 방식으로 지식과 스킬을 적용하고 종합할 수 있는 기회를 제공합니다.</p>
                <ul>
                    <li>교사의 수업과 학생의 학습을 개선하고 학습 목표를 향한 학생의 진전을 확인하기 위해 학습과정에서의 지속적인 피드백 제공</li>
                    <li>학습주체로서 학생의 자기주도적 학습역량 신장 지원</li>
                    <li>세계적 맥락과 다양한 깊이가 있는 탐구 과제 활용으로 학생의 국제적 소양 함양</li>
                </ul>
                <p className="text-xs mt-4 text-slate-500 dark:text-slate-400">※ 본 자료는 MYP: From principles into practice(ibo.org)의 내용을 바탕으로 재구성 되었습니다.</p>
            </InfoCard>
            
            <InfoCard title="문의하기" icon="fa-user-headset">
                <p>YBIB 연구실에 대해 더 궁금한 점이 있으시면 언제든지 문의해주세요.</p>
                <ul className="list-none !pl-0 mt-4 space-y-3">
                    <li className="flex items-center">
                        <i className="fas fa-phone w-5 mr-3 text-slate-500 dark:text-slate-400"></i>
                        <span><strong>전화:</strong> 063-630-9118</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-comment-dots w-5 mr-3 text-slate-500 dark:text-slate-400"></i>
                        <span><strong>카카오톡 오픈채팅방:</strong> <a href="https://open.kakao.com/o/sJpD9Vec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">바로가기</a></span>
                    </li>
                </ul>
            </InfoCard>
        </div>
    );
};
