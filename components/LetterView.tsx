
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

const Card: React.FC<{title: string, children: React.ReactNode, className?: string}> = ({title, children, className}) => (
    <div className={`bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-4 ${className}`}>
        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{title}</h4>
        {children}
    </div>
);


const Newsletter1 = () => (
    <div>
        <p className="mb-4">학부모님 가정이 건강과 함께 두루 평온하시고 주님의 은총이 항상 함께하시기를 기원합니다. 지난 2024년부터 미래 교육의 혁신을 이끌 대안으로 평가받는 '국제 바칼로레아(IB)' 프로그램이 전북특별자치도에서 본격적으로 시작되었습니다. 우리 학교는 지난 2024년 6월 26일 국제 바칼로레아(IB) 중학교 프로그램(MYP) *후보학교로 지정받았으며, IB 월드 스쿨 인증을 추진 중입니다.</p>
        <p>IB 월드 스쿨은 강력한 비전을 공유하는 도전적이고, 수준 높은 국제적 교육 프로그램을 제공하여 다양하고 폭넓은 학생 공동체의 교수·학습 발전을 위해 노력하겠다는 공통된 철학을 공유합니다. 국제 바칼로레아(IB) 중학교 프로그램(MYP)은 다른 학교에서 배우지 않는 '무엇'을 더 가르치는 것이 아니라, 학교 교육을 통해 스스로 질문하고 탐구할 수 있는 '방법'을 배우는 동시에 미래 사회가 필요로 하는 다양한 '학습역량'을 기를 수 있는 종합적인 틀을 제공합니다.</p>
        
        <Card title="용북중학교 IB 교육목표">
            <p><strong>비전:</strong> 믿음의 진리 안에서 배움의 기쁨을 통해 글로벌리더를 양성하는 사랑의 학교</p>
            <p><strong>인재상:</strong> 열린 마음으로 세상을 탐구하며 함께 성장하는 용북인</p>
            <p><strong>사명선언문:</strong> 용북중학교는 하나님의 사랑 안에서 지속 가능한 미래사회를 실현하기 위해 협력과 평화의 가치를 존중하는 책임감 있는 글로벌 리더 양성을 목표로 한다. 이를 위해 학생들은 다양한 가치를 존중하고 연대할 줄 아는 균형감 있는 인재로 성장하기 위해 실패를 두려워하지 않고 도전하기를 즐긴다. 또한 학교는 열린 마음으로 소통하여 학생 각자가 지닌 고유하고 창의적인 특성들을 발견하고 자신감 있게 표출할 수 있도록 즐거운 학교문화를 조성하기 위해 노력한다.</p>
        </Card>

        <Card title="용북중학교 IB MYP 후보학교 운영 현황">
            <ul className="list-disc pl-5">
                <li><strong>2024. 6. 26.</strong> IB MYP 후보학교 지정</li>
                <li><strong>2024. 12. 13-14.</strong> 전 교직원 IB월드 스쿨 탐방</li>
                <li><strong>2025. 1. 7.</strong> 'YB+IB = 용북중IB' 행복 축제</li>
                <li><strong>2025. 1. 13-14.</strong> 개념기반 단원설계 교사연수실시</li>
                <li><strong>2025. 1. 19-20.</strong> IBO 인스쿨 워크숍 실시</li>
                <li><strong>2025. 1. 21.</strong> 2022 개정교육과정 교사연수실시</li>
                <li><strong>2025. 1. 24.</strong> IB 평가 교사연수실시</li>
                <li><strong>2025. 3. 4.</strong> 전교생 대상 'IB 교육' 실시</li>
                <li><strong>2025. 3. 6.</strong> YBIB 학습자상 캐릭터 공모전 실시</li>
            </ul>
        </Card>
        
        <h4 className="font-bold text-lg mt-6 mb-2">Q&A</h4>
        <div className="space-y-4">
            <div>
                <p className="font-semibold">Q1. 국제 바칼로레아(IB) 중학교 프로그램(MYP)은 무엇인가요?</p>
                <p>국제 바칼로레아(IB)는 스위스에 본부를 둔 비영리교육재단인 IB본부에서 개발·운영하는 국제 인증 학교 교육 프로그램으로, 전 세계적으로 학생의 생각을 이끌어내는 교육을 실천함으로써 미래사회가 요구하는 창의력과 비판적 사고력을 갖춘 창의융합형 인재를 기르는데 최적화된 교육 프로그램으로 평가받고 있습니다. 우리학교는 IB본부가 중학생을 대상으로 제공하는 MYP 프로그램을 실천하되 2022 개정 교육과정과의 조화를 통해, 학생들이 우리나라의 국가교육과정을 이수하면서도 스스로의 실질적인 미래역량을 함양할 수 있도록, 국제적으로 공인된 IB MYP 프로그램을 경험할 수 있는 기회를 제공하고 있습니다.</p>
            </div>
            <div>
                <p className="font-semibold">Q2. 국제 바칼로레아(IB) 후보학교, IB 월드 스쿨이 된다는 것은 어떤 의미인가요?</p>
                <p>후보학교란 IB본부가 제공하는 중학교 프로그램(MYP)을 공식적으로 사용할 수 있는 학교로서, 후보학교가 되면 전 세계의 IB MYP 운영 학교와 정보를 공유·교류할 수 있습니다. 또한 1년 6개월에서 2년 정도의 후보학교 운영을 통해 IB본부의 심사를 통과하면 정식 IB 월드 스쿨로 전환됩니다. IB 월드 스쿨은 전교생을 대상으로 IB 교육과정을 운영하는 학교임을 국제적으로 공인받음과 동시에 IB 본부가 직접 수업 운영과 평가의 질관리를 실시함으로써 도전적이고 수준 높은 국제적 교육 프로그램의 지속적인 운영이 가능합니다.</p>
            </div>
            <div>
                <p className="font-semibold">Q3. 국제 바칼로레아(IB) 중학교 프로그램(MYP)을 운영하는 우리학교의 교육은 일반학교와 어떤 차이가 있게 되나요?</p>
                <p>첫째, 학생주도의 탐구학습과 교과융합을 장려하고, 교과의 본질적 지식 중심의 개념중심학습을 강화합니다.<br/>둘째, 세계적 이슈에 관심을 가지는 글로벌 리더 교육 및 다양한 국제교류학습을 강화합니다.<br/>셋째, 학생 개별 피드백을 강조한 과정중심평가를 강화합니다.<br/>이를 바탕으로 학부모님의 자녀를 깊이 있는 사고력을 바탕으로 올바른 인성까지 두루 갖춘 미래 인재로 기르는데 최선을 다하겠습니다.</p>
            </div>
        </div>
        <div className="text-xs text-slate-500 mt-4">
            <p>IB 공식 홈페이지: <a href="https://www.ibo.org/" target="_blank" rel="noopener noreferrer">https://www.ibo.org/</a></p>
            <p>IB 교육 프로그램에 대한 이해 제공: <a href="https://youtu.be/sdY-T8bOPtU" target="_blank" rel="noopener noreferrer">https://youtu.be/sdY-T8bOPtU</a> (TBC 다큐, '학교, 미래를 보다' 시즌2)</p>
        </div>
    </div>
);

const Newsletter2 = () => (
    <div>
        <Card title="IB MYP 수업">
            <p>용북중학교에서는 국가교육과정과 IB프로그램을 접목하여 개념기반 탐구 수업을 진행합니다. IB MYP 수업의 '탐구-행동-성찰'로 상급 학교에 진학하더라도 스스로 탐구하고 행동하며 성찰할 수 있도록 가르칩니다.</p>
            <ul className="list-disc pl-5 mt-2">
                <li>학생이 생각하는 교실을 만드는 개념 기반 수업을 지향합니다.</li>
                <li>학생이 주도적으로 참여하는 탐구활동을 지향합니다.</li>
                <li>실생활과 연계한 평가를 지향합니다.</li>
            </ul>
        </Card>
        <Card title="IB MYP 평가">
            <p>IB평가는 전 세계에 걸쳐 일관된 기준과 공정한 방법으로 학생의 성장을 평가하고 지원합니다. 우리 학교의 모든 평가 과제는 국가교육과정의 범위 안에서 IB프로그램의 교과 기준에 따라 평가하며, 필기시험뿐만 아니라 글쓰기, 탐구, 토론, 발표, 실습과 실험, 매체 제작 등 다양한 방식으로 논·서술형 평가가 제시되며 다음과 같은 목표로 실시됩니다.</p>
            <ul className="list-disc pl-5 mt-2">
                <li>교사의 수업과 학생의 학습을 개선하고 향상</li>
                <li>학습과정에서 지속적인 피드백을 제공하여 학습 지원</li>
                <li>세계적 맥락과 다양한 상황이 있는 평가로 학생의 국제적 소양 함양</li>
                <li>명료한 과제 설명과 평가 기준 제시로 평가의 타당성, 객관성, 공정성 확보</li>
            </ul>
        </Card>
        <Card title="IB MYP 교과군별 평가 기준">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center text-sm">
                <div className="font-bold">기준</div>
                <div className="font-bold">평가기준 A</div>
                <div className="font-bold">평가기준 B</div>
                <div className="font-bold">평가기준 C</div>
                <div className="font-bold">평가기준 D</div>

                <div>언어와 문학(국어)</div>
                <div>분석하기</div>
                <div>조직화하기</div>
                <div>텍스트 생산하기</div>
                <div>언어 사용하기</div>
                
                <div>언어 습득(영어)</div>
                <div>듣기</div>
                <div>읽기</div>
                <div>말하기</div>
                <div>쓰기</div>

                <div>개인과 사회</div>
                <div>지식과 이해</div>
                <div>조사</div>
                <div>의사소통</div>
                <div>비판적 사고</div>

                <div>과학</div>
                <div>지식과 이해</div>
                <div>탐구 및 설계</div>
                <div>처리 및 평가</div>
                <div>과학의 영향에 관한 성찰</div>

                <div>수학</div>
                <div>지식과 이해</div>
                <div>패턴분석</div>
                <div>의사소통</div>
                <div>실생활 맥락에 수학 적용</div>

                <div>예술(음악, 미술)</div>
                <div>조사하기</div>
                <div>개발하기</div>
                <div>창작 및 공연하기</div>
                <div>평가하기</div>

                <div>체육과 보건</div>
                <div>지식과 이해</div>
                <div>수행 계획</div>
                <div>적용 및 수행</div>
                <div>성찰 및 수행 개선</div>

                <div>디자인(기술·가정, 정보)</div>
                <div>탐구 및 분석하기</div>
                <div>아이디어 개발하기</div>
                <div>솔루션 만들기</div>
                <div>성찰</div>
            </div>
        </Card>
    </div>
);

const Newsletter3 = () => (
    <div>
        <p>IB 교육은 본질적으로 전인 교육으로, 한 인간 전체에 관련됩니다. 교육 본질에 따라 IB 학습자상의 10가지 자질 역시 IB가 추구하는 전인적인 교육철학은 반영합니다. 그것은 IB 학습자가 탐구하는 사람, 지식이 풍부한 사람, 사고하는 사람, 소통하는 사람, 원칙을 지키는 사람, 열린 마음을 지닌 사람, 배려하는 사람, 도전하는 사람, 균형잡힌 사람, 성찰하는 사람이 되도록 요구합니다.</p>
        <p className="mt-2">이는 학생들의 지식과 기술을 개발하는 것뿐만 아니라, 배움에 대한 호기심과 서로 공감할 줄 아는 자질을 키워가는 데 얼마나 중요한지를 강조합니다. 또한 IB 프로그램은 인지적 발달을 비롯하여 학생들의 사회적, 정서적, 신체적 건강을 중요시하며 자신과 타인을 존중하고 배려할 수 있도록 장려합니다.</p>
        <p className="mt-2">IB 학습자상은 더 나은 세상을 구현할 지적 발달과 학문 내용에 대한 문제를 넘어서 광범위한 인간의 능력과 책임을 보여 줄 수 있는 국제적 소양의 학생들을 양성하는데 중요한 기반이 됩니다.</p>
        
        <Card title="용북중학교 월별 IB학습자상 테마">
            <div className="grid grid-cols-2 gap-4">
                <div><strong>3월:</strong> 열린 마음을 가진 사람 (Open-minded)</div>
                <div><strong>4월:</strong> 탐구하는 사람 (Inquirers)</div>
                <div><strong>5월:</strong> 소통하는 사람 (Communicators)</div>
                <div><strong>6월:</strong> 배려하는 사람 (Caring)</div>
                <div><strong>7월:</strong> 원칙을 지키는 사람 (Principled)</div>
                <div><strong>8월:</strong> 균형 잡힌 사람 (Balanced)</div>
                <div><strong>9월:</strong> 도전하는 사람 (Risk-takers)</div>
                <div><strong>10월:</strong> 지식이 풍부한 사람 (Knowledgeable)</div>
                <div><strong>11월:</strong> 사고하는 사람 (Thinkers)</div>
                <div><strong>12월:</strong> 성찰하는 사람 (Reflective)</div>
            </div>
        </Card>
    </div>
);

const Newsletter4 = () => (
    <div>
        <Card title="세계적 맥락 (Global context) 이란?">
            <p>IB MYP 프로그램에서 세계적 맥락(Global Contexts)은 학습자들이 학습 내용을 자신과 세상, 그리고 다양한 문화 및 글로벌 문제와 연결 지을 수 있도록 하는 핵심 구조입니다. IB는 국제적으로 마인드를 가진 인재를 양성하는 것을 궁극적 목표로 삼고 있으며, MYP에서는 세계를 학습의 가장 넓은 맥락으로 바라봅니다.</p>
            <p className="font-bold mt-4">IB는 다음과 같이 여섯 가지 세계적 맥락을 제시합니다:</p>
            <ul className="list-decimal pl-5">
                <li>정체성과 관계 (Identities and Relationships)</li>
                <li>시간과 공간에서의 위치 (Orientation in Space and Time)</li>
                <li>개인적 문화적 표현 (Personal and Cultural Expression)</li>
                <li>과학과 기술의 혁신 (Scientific and Technical Innovation)</li>
                <li>세계화와 지속 가능성 (Globalization and Sustainability)</li>
                <li>공정성과 발전 (Fairness and Development)</li>
            </ul>
             <p className="mt-4">이러한 맥락을 활용하면, 학생들은 단순히 교과 지식을 넘어서 실제 세계의 문제에 대해 의미 있는 연결을 형성할 수 있으며, 다음과 같은 교육 효과를 가져옵니다:</p>
            <ul className="list-disc pl-5">
                <li>개인의 삶과 학습을 연결하여 학습의 동기와 몰입도를 높입니다.</li>
                <li>현실 세계의 도전을 인식하고, 창의적이고 책임 있는 해결책을 고민하게 합니다.</li>
                <li>다양한 문화와 관점에 대한 이해를 촉진하여 국제적 마인드를 기릅니다.</li>
                <li>실행 가능한 지식을 통해 공동체에 긍정적인 영향을 미칠 수 있는 힘을 기릅니다.</li>
            </ul>
        </Card>
        <Card title="ATL (Approaches to learning, 학습 접근 방법)">
            <p>ATL(Approaches to Learning)은 IB 중학교 프로그램(MYP)에서 학생들이 스스로 배우는 법을 배우도록 돕는 핵심 교육 구성 요소입니다. ATL은 학생들이 단순한 지식 습득을 넘어, 평생 학습자로 성장할 수 있도록 돕기 위한 기술 중심의 교육 철학입니다.</p>
            <p className="font-bold mt-4">1. ATL의 목적</p>
            <ul className="list-disc pl-5">
                <li>자기주도 학습 능력 배양</li>
                <li>비판적 사고 및 문제 해결력 강화</li>
                <li>세계 시민으로서의 성장</li>
                <li>IB 학습자 프로필과 연계</li>
            </ul>
            <p className="font-bold mt-4">2. ATL의 다섯 가지 영역</p>
            <ol className="list-decimal pl-5 space-y-2">
                <li><strong>사고 기술 (Thinking Skills):</strong> 비판적 사고, 창의적 사고, 메타인지(자기 사고 조절), 정보 분석 능력 포함.</li>
                <li><strong>연구 기술 (Research Skills):</strong> 정보 수집, 분석, 출처 평가, 데이터 정리 능력.</li>
                <li><strong>소통 기술 (Communication Skills):</strong> 말하기, 쓰기, 청취, 비언어적 표현, 다양한 청중과의 소통.</li>
                <li><strong>자기관리 기술 (Self-management Skills):</strong> 시간 관리, 정서 조절, 목표 설정, 스트레스 관리 등.</li>
                <li><strong>사회적 기술 (Social Skills):</strong> 협동, 갈등 해결, 리더십, 공감능력.</li>
            </ol>
        </Card>
    </div>
);

const Newsletter5 = () => (
    <div>
        <p>용북중학교는 IB MYP(국제 바칼로레아 중등과정)의 철학에 따라, 모든 교과에서 학생들이 지식 그 자체를 넘어서 사고하고 탐구하며, 자신의 삶과 연결하는 배움의 여정을 경험할 수 있도록 수업을 설계하고 있습니다. 각 교과에서는 학생 주도적 활동, 실제 삶과 연결된 탐구 과제, 협력과 소통을 바탕으로 한 프로젝트 등이 활발히 이루어지고 있으며, 이를 통해 학생들은 지식뿐 아니라 자기 성찰, 비판적 사고, 타인과의 관계 형성 역량까지 고르게 성장하고 있습니다.</p>
        
        <Card title="1학년 1학기 언어와 문학: 나의 성장 이야기">
            <p>황순원의 『소나기』를 읽고 '더 아름다운 질문' 유형을 활용해 탐구 질문을 만들고, 문학의 갈래에 대해 조사하여 갤러리워크 활동으로 발표하며 학습을 확장했습니다.</p>
            <p><strong>학습 접근 방법:</strong> 사고기능(비판적 사고), 대인관계기능(협력 활동)</p>
        </Card>
        <Card title="1학년 1학기 언어습득(영어): Express Myself">
            <p>자신의 정체성을 표현하는 어휘와 문장을 학습하고, 친구에 대해 소개하는 활동을 통해 의사소통 능력을 키웠습니다. '2 Stars & 1 Action' 성찰 활동으로 자신의 강점을 돌아보는 시간도 가졌습니다.</p>
            <p><strong>학습 접근 방법:</strong> 의사소통 기능, 직소(jigsaw) 기법을 통한 비판적 사고력 신장</p>
        </Card>
        <Card title="1학년 1학기 과학: 과학과 인류의 상호작용">
            <p>과학적 탐구 과정을 설계하고, 인류의 지속가능한 삶을 위한 문제 해결 사례를 조사하여 발표했습니다. 또한, 생물다양성 보전 캠페인 활동으로 한반도 멸종 위기 생물 프로필 카드와 포스터를 제작하고 교내에 게시했습니다.</p>
            <p><strong>학습 접근 방법:</strong> 조사 기능, 대인 관계 기능, 의사소통 기능, 사고 기능(창의적 사고력)</p>
        </Card>
        <Card title="2학년 1학기 수학: 수와 식의 실생활 적용">
            <p>실생활 속 부등호 사용 사례를 탐구하고, 학습 내용을 바탕으로 직접 문제를 만들어보는 문제 기반 학습(PBL)을 진행했습니다.</p>
            <p><strong>학습 접근 방법:</strong> 탐구 기반 생성 활동</p>
        </Card>
        <Card title="2학년 1학기 역사: 문명의 발생과 고대 세계">
            <p>4대 문명을 비교하는 탐구문을 작성하기 위해 자료 조사의 신뢰성, 객관성 등을 평가하는 방법을 배우고, '네모퉁이 토론'을 통해 다양한 근거를 바탕으로 자신의 주장을 펼치며 비판적 사고력을 길렀습니다.</p>
            <p><strong>학습 접근 방법:</strong> 조사역량(자료 평가), 대인관계 역량(존중하는 토론)</p>
        </Card>

    </div>
);


const Newsletter6 = () => (
    <div>
        <p className="mb-4">안녕하십니까? 어느덧 만물이 생동하는 4월이 다가오고 있네요. 평소 본교의 교육활동에 깊은 신뢰와 따뜻한 관심을 보내주시는 학부모님께 진심으로 감사의 인사를 드립니다.</p>
        <p className="mb-4">본교는 우리 학생들이 급변하는 미래 사회를 주도할 역량을 갖출 수 있도록, 국제 공인 교육과정인 IB MYP를 도입하여 운영하고 있습니다. 특히 오는 5~6월 중, 'IB 월드 스쿨 인증'이라는 뜻깊은 결실을 앞두고 본교의 교육 방향과 IB 교육의 핵심 내용을 안내해 드리고자 합니다.</p>

        <Card title="🌱 IB MYP(Middle Years Programme)란 무엇인가요?">
            <p>IB MYP는 단순한 지식의 습득을 넘어, 학생들이 스스로 질문을 던지고 탐구하며 비판적으로 사고하는 힘을 기르는 데 중점을 둔 교육과정입니다.</p>
            <ul className="list-disc pl-5 mt-2">
                <li><strong>탐구 중심 학습:</strong> 교과서 속 지식을 실생활과 연결하여 스스로 해답을 찾아갑니다.</li>
                <li><strong>개념 이해 및 적용:</strong> 단편적인 사실 암기가 아닌, 지식의 원리와 흐름을 이해합니다.</li>
                <li><strong>과정 중심 평가:</strong> 결과 수치보다 학습이 이루어지는 과정과 성장을 중요하게 평가합니다.</li>
            </ul>
        </Card>

        <Card title="🔍 기존 교육과 무엇이 달라질까요?">
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-blue-50 dark:bg-slate-700">
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">구분</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">기존 교육 (전통적 방식)</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">IB MYP 교육 (본교 지향점)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">학습 방식</td><td className="border border-slate-300 dark:border-slate-600 p-2">지식 전달 및 암기 중심</td><td className="border border-slate-300 dark:border-slate-600 p-2">이해와 비판적 사고 중심</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">정답 확인</td><td className="border border-slate-300 dark:border-slate-600 p-2">정해진 하나의 정답 찾기</td><td className="border border-slate-300 dark:border-slate-600 p-2">다양한 해석과 창의적 대안 존중</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">평가 체계</td><td className="border border-slate-300 dark:border-slate-600 p-2">일회성 지필평가 위주</td><td className="border border-slate-300 dark:border-slate-600 p-2">수행평가 및 상시 과정 평가</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">교실 풍경</td><td className="border border-slate-300 dark:border-slate-600 p-2">교사 주도의 일방향 수업</td><td className="border border-slate-300 dark:border-slate-600 p-2">학생 주도의 참여형·협력형 수업</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="mt-3 italic text-slate-500">"학생들은 이제 '무엇을 아는가'를 넘어, '아는 것을 어떻게 활용하는가'를 배웁니다."</p>
        </Card>

        <Card title="🌎 IB 교육이 지향하는 학생의 모습">
            <p>IB 교육은 지적으로 유능할 뿐만 아니라 타인을 존중하는 '학습자 상(Learner Profile)'을 추구합니다.</p>
            <ul className="list-disc pl-5 mt-2">
                <li>질문하고 탐구하며 배움을 즐기는 학생</li>
                <li>자신의 생각을 논리적이고 당당하게 표현하는 학생</li>
                <li>나와 다른 타인의 가치관을 존중하고 포용하는 학생</li>
                <li>자신의 학습 과정을 스스로 돌아보며 끊임없이 성장하는 학생</li>
            </ul>
        </Card>

        <Card title="🤝 우리 아이의 성장을 위한 가정 내 협조 사항">
            <p className="mb-2">교육의 완성은 학교와 가정의 연대에서 이루어집니다. 아이들이 새로운 배움에 자신감을 가질 수 있도록 다음의 실천을 부탁드립니다.</p>
            <ol className="list-decimal pl-5 space-y-1">
                <li>결과보다는 '과정'을 격려해 주세요.</li>
                <li>"이번 프로젝트를 통해 무엇을 새롭게 알게 되었니?"라고 물어봐 주세요.</li>
                <li>질문을 통해 사고력을 확장해 주세요. "왜 그렇게 생각했니?", "다른 방법은 없을까?"와 같은 열린 질문이 아이의 생각을 키웁니다.</li>
                <li>아이의 고유한 의견을 존중해 주세요. 아이가 스스로 논리를 세워가는 과정을 지켜봐 주시고 응원해 주세요.</li>
                <li>본교 홈페이지 내 [YBIB 후보학교] 세션을 통해 IB 교육과정의 실제 운영 사례와 다양한 학생 활동 소식을 확인하실 수 있습니다.</li>
                <li>IB 교육에서 '성찰'은 배움을 내면화하는 가장 중요한 단계입니다. 학생들이 매달 작성하는 'YBIB 성찰지'를 통해 자기주도적 학습 역량을 키우고 있습니다. 하단 [학부모 성찰]란에 아이의 노력을 응원하는 피드백을 기록해 주세요.</li>
            </ol>
        </Card>
        <p className="text-sm text-slate-500 mt-4 text-center">본교 교직원 모두는 다가오는 인증 평가를 철저히 준비하여, 우리 학생들이 최고의 교육 환경에서 꿈을 펼칠 수 있도록 최선을 다하겠습니다.</p>
    </div>
);

const Newsletter7 = () => (
    <div>
        <p className="mb-4">용북중학교 IB 프로그램의 1학기 수업 활동 사례와 2학기 IB 총괄평가를 안내드립니다.</p>

        <Card title="1학년 미술 수업활동 — UNIT 1. 자화상">
            <p><strong>평가 기준:</strong> A. 조사하기 / B. 창작 및 공연하기</p>
            <p className="mt-2"><strong>탐구 활동:</strong> IB 학습자상 탐색과 자화상 감상·표현을 통한 정체성 탐구</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>자화상 작품을 스스로 선택하고 조사한 후, 인상 깊었던 이유와 표현 특징을 발표하며 자화상의 의미와 표현 방식을 학습</li>
                <li>감상과 비평의 차이점을 찾아보고 자신의 생각을 포스트잇에 서술하며 다른 친구들과 비교·분석</li>
                <li>IB 학습자상에 대해 학습한 뒤, 다양한 명화 속 인물을 감상하며 각 작품에서 드러나는 학습자상을 유추하는 활동</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500"><strong>학습접근방법(ATL):</strong> 비판적 사고기능 — 시각적 요소와 맥락을 바탕으로 작품의 의미를 해석하고 판단하기</p>
        </Card>

        <Card title="2학년 영어 수업활동 — UNIT 1. My Happy Everyday Life">
            <p><strong>평가 기준:</strong> C. Speaking / D. Writing</p>
            <p className="mt-2"><strong>탐구 활동:</strong> 행복한 일상생활과 관련된 시를 쓰고 암송하기</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>자신의 정체성을 드러낼 수 있는 행복한 일상과 관련된 다양한 단어를 학습한 후 타이포그래피로 제작</li>
                <li>스스로 일상생활 속에서 행복을 느끼는 순간들을 떠올려 보게 하며, 자신만의 행복한 경험을 영어로 표현</li>
                <li>자신의 감정과 생각을 창의적으로 표현하는 능력을 기름</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500"><strong>학습접근방법(ATL):</strong> 의사소통 기능 / 대인관계 기능 — 청자로서 동료의 아이디어를 적극적으로 듣기</p>
        </Card>

        <Card title="2학기 IB 총괄평가 안내 — 1학년">
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-blue-50 dark:bg-slate-700">
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">교과목</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 A</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 B</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 C</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">국어</td><td className="border border-slate-300 dark:border-slate-600 p-2">매체와 글의 특성 분석하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">논리적이고 일관된 글의 구조 조직화하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">작품과 자신의 삶을 연결하는 성찰하는 글쓰기</td><td className="border border-slate-300 dark:border-slate-600 p-2">논리적인 글의 구조와 정확한 어휘·문법 사용하여 글쓰기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">영어</td><td className="border border-slate-300 dark:border-slate-600 p-2">외국인 친구에게 소개하는 담화 듣기</td><td className="border border-slate-300 dark:border-slate-600 p-2">소개하는 글 읽고 파악하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">내 물건 중 무료나눔 하고 싶은 물건 홍보하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">무료나눔 하고 싶은 물건 홍보하는 글 쓰기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">개인과 사회</td><td colSpan={4} className="border border-slate-300 dark:border-slate-600 p-2 text-center">우리나라 각 지역의 특성을 이해하고 홍보 영상을 제작하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">과학</td><td className="border border-slate-300 dark:border-slate-600 p-2">물질의 상태 변화에 따른 에너지 출입, 기체 법칙 지식 이해하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">달(또는 화성) 탐사선 탐사 장치 설계 및 탐구 설계</td><td className="border border-slate-300 dark:border-slate-600 p-2">탐사 장치 설계 및 탐구 데이터 처리 및 평가</td><td className="border border-slate-300 dark:border-slate-600 p-2">기체 법칙 원리를 활용한 기술 조사 및 발표하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">수학</td><td className="border border-slate-300 dark:border-slate-600 p-2">삼각형 및 평행선 등 도형 작도하기 / 각 도형들의 성질 분석하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">주어진 자료의 패턴을 찾아 수학적 통계로 나타내기</td><td className="border border-slate-300 dark:border-slate-600 p-2">주어진 자료를 해석하여 더 나은 발전 방향성 제시하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">현실 세계에서 기하의 역사적 발달 과정 따라가기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">예술</td><td className="border border-slate-300 dark:border-slate-600 p-2">시와 그림의 공통점 분석하고 미술 표현의 특징에 대해 조사하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">고전주의 음악을 이해하고 음악 신문 만들기</td><td className="border border-slate-300 dark:border-slate-600 p-2">시에 어울리는 그림을 표현하여 시화 제작하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">셈여림 기호에 유의하여 노래 부르기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">체육</td><td className="border border-slate-300 dark:border-slate-600 p-2">배구 기초 기능 및 포지션 포트폴리오 작성하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">배드민턴 연습 계획서 작성하고 수행하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">배구 포지션 포트폴리오를 활용한 팀 공동 목표 수행하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">배드민턴과 체력 향상을 토대로 성찰 및 수행 개선하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">기술가정</td><td colSpan={4} className="border border-slate-300 dark:border-slate-600 p-2 text-center">청소년 건강 식습관 캠페인 제작하기</td></tr>
                    </tbody>
                </table>
            </div>
        </Card>

        <Card title="2학기 IB 총괄평가 안내 — 2학년">
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-blue-50 dark:bg-slate-700">
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">교과목</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 A</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 B</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 C</th>
                            <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">평가기준 D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">국어</td><td className="border border-slate-300 dark:border-slate-600 p-2">흥부전 스토리보드 구성하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">대상의 특성에 맞는 방법으로 설명문 쓰기</td><td className="border border-slate-300 dark:border-slate-600 p-2">흥부전 영상으로 재구성하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">대상의 특성에 맞는 방법으로 설명하는 발표하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">영어</td><td className="border border-slate-300 dark:border-slate-600 p-2">다양한 새활용 아이디어에 관한 토의 글 듣기 / 기네스 세계 기록 동물 이야기 듣기</td><td className="border border-slate-300 dark:border-slate-600 p-2">새활용의 의미와 다양한 예에 관한 글을 읽고 내용 이해하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">동물들의 놀라운 기록에 관한 내용 소개하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">도구를 사용하는 다양한 동물들에 관한 글을 읽고 세 컷 만화로 표현하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">개인과 사회</td><td className="border border-slate-300 dark:border-slate-600 p-2">세계대전 시대, 자유 주제 글쓰기</td><td className="border border-slate-300 dark:border-slate-600 p-2">제국주의 침략국과 피해국 입장에서 기사문 쓰기</td><td className="border border-slate-300 dark:border-slate-600 p-2">제국주의 침략국과 피해국 입장에서 기사문 쓰기</td><td className="border border-slate-300 dark:border-slate-600 p-2">세계대전 시대, 자유 주제 글쓰기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">과학</td><td className="border border-slate-300 dark:border-slate-600 p-2">해수 순환이 지구에 끼치는 영향 과학적으로 분석하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">여러가지 단열 장치를 알아보고 효과적인 단열방법 설계하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">여러가지 단열 장치를 알아보고 효과적인 단열방법 설계하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">해수 순환이 지구에 끼치는 영향 과학적으로 분석하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">수학</td><td className="border border-slate-300 dark:border-slate-600 p-2">삼각형의 내심과 외심 찾기 / 사각형의 성질 마인드맵 그리기</td><td className="border border-slate-300 dark:border-slate-600 p-2">게임에서 패턴 찾기</td><td className="border border-slate-300 dark:border-slate-600 p-2">경우의 수와 확률을 계산하여 공정한지 판단하고 수학적으로 구조화하여 발표하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">실생활에서 닮음의 사례를 조사하고, 닮음의 원리를 적용하여 문제 해결하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">예술</td><td className="border border-slate-300 dark:border-slate-600 p-2">시대별 음악적 특징을 이해하고 음악 신문 만들기</td><td className="border border-slate-300 dark:border-slate-600 p-2">3차원의 공간에 시각이미지 나타내기</td><td className="border border-slate-300 dark:border-slate-600 p-2">예술 가곡 이해 및 표현하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">자신이 표현한 작품 및 과정에 대해 평가하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">체육</td><td className="border border-slate-300 dark:border-slate-600 p-2">스텝박스의 기본 동작 및 효능 이해하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">축구 개인 기능 개발지 작성 및 수행하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">스텝박스 동작 창작 및 수행하기</td><td className="border border-slate-300 dark:border-slate-600 p-2">축구 전술 수행 및 성찰하기</td></tr>
                        <tr><td className="border border-slate-300 dark:border-slate-600 p-2">기술가정</td><td colSpan={4} className="border border-slate-300 dark:border-slate-600 p-2 text-center">미래형 제조 기술 기반 제품 개발 프로젝트 제작하기</td></tr>
                    </tbody>
                </table>
            </div>
        </Card>

        <p className="text-sm text-slate-500 mt-4 text-center">총괄평가는 단순한 점수가 아닌 학생들의 성장과 학습 여정을 보여주는 소중한 기록입니다. 평가 과정을 통해 학생들이 스스로 배움의 주체가 되어 성찰하고 발전할 수 있도록 함께 응원해 주시기 바랍니다.</p>
    </div>
);

const Newsletter8 = () => (
    <div>
        <p className="mb-4">CP(Community Project, 공동체 프로젝트)는 학생들이 지역사회에 긍정적인 영향을 미치는 실질적인 행동을 통해 자기 주도적인 학습 역량을 기르는 학생 중심의 경험 학습 활동입니다.</p>

        <Card title="CP(공동체 프로젝트)란?">
            <p><strong>주제:</strong> 나의 미래 직업 탐색과 그에 맞는 커뮤니티 서비스(지역사회 봉사) 계획</p>
            <p className="font-semibold mt-3">CP의 목표</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>진로 탐색 관련 지식 습득</li>
                <li>협력과 소통 경험</li>
                <li>발표 역량 향상</li>
            </ul>
        </Card>

        <Card title="프로젝트 진행 단계">
            <div className="space-y-3">
                <div className="flex gap-3 items-start">
                    <span className="bg-yellow-400 text-slate-900 font-bold rounded px-2 py-0.5 text-sm shrink-0">1단계 조사</span>
                    <ul className="list-disc pl-4 text-sm space-y-0.5">
                        <li>직업 분야 정보 수집 / 직무 분석, 교육과정 / 산업 동향 파악</li>
                        <li>전문가 인터뷰 참여 / 조사 보고서 작성</li>
                    </ul>
                </div>
                <div className="flex gap-3 items-start">
                    <span className="bg-yellow-400 text-slate-900 font-bold rounded px-2 py-0.5 text-sm shrink-0">2단계 계획</span>
                    <ul className="list-disc pl-4 text-sm space-y-0.5">
                        <li>커뮤니티 서비스 기획 / 예산 계획 수립 / 역할 분담 결정</li>
                        <li>실행 계획 작성 / 기획안 완성</li>
                    </ul>
                </div>
                <div className="flex gap-3 items-start">
                    <span className="bg-yellow-400 text-slate-900 font-bold rounded px-2 py-0.5 text-sm shrink-0">3단계 실행</span>
                    <ul className="list-disc pl-4 text-sm space-y-0.5">
                        <li>기획 서비스 실행 / 프로젝트 진행 기록 / 결과물 수집(사진)</li>
                        <li>피드백 수렴 / 실행 결과 분석</li>
                    </ul>
                </div>
            </div>
        </Card>

        <Card title="CP 연간 진행 계획">
            <div className="space-y-2 text-sm">
                {[
                    ['4월', '프로젝트 개요 및 팀 편성'],
                    ['5월', '진로 탐색과 조사 & 커뮤니티 서비스 기획'],
                    ['6월', '서비스 계획 발표 및 피드백'],
                    ['6~7월', '프로젝트 실행 계획 및 준비'],
                    ['7~9월', '커뮤니티 봉사(서비스) 실행'],
                    ['10~11월', '프로젝트 발표 준비'],
                    ['12월', '용북중학교 진로 연계 CP 발표회 — 부스별 발표 진행!'],
                ].map(([month, desc]) => (
                    <div key={month} className="flex gap-3">
                        <span className="font-bold text-blue-600 dark:text-blue-400 w-16 shrink-0">{month}</span>
                        <span>{desc}</span>
                    </div>
                ))}
            </div>
        </Card>

        <Card title="예시 팀 활동">
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-yellow-50 dark:bg-slate-700 rounded p-3">
                    <p className="font-bold">의료 분야</p>
                    <p>주제: 건강 캠페인</p>
                    <p>활동: 식습관 교육</p>
                    <p>봉사: 학교내 세미나</p>
                </div>
                <div className="bg-red-50 dark:bg-slate-700 rounded p-3">
                    <p className="font-bold">IT 분야</p>
                    <p>주제: 프로그래밍 교육</p>
                    <p>활동: 워크숍 기획</p>
                    <p>봉사: 기초 코딩 교육</p>
                </div>
                <div className="bg-green-50 dark:bg-slate-700 rounded p-3">
                    <p className="font-bold">예술 분야</p>
                    <p>주제: 미술 전시회</p>
                    <p>활동: 작품 제작</p>
                    <p>봉사: 학교내 전시</p>
                </div>
                <div className="bg-blue-50 dark:bg-slate-700 rounded p-3">
                    <p className="font-bold">환경 분야</p>
                    <p>주제: 재활용 캠페인</p>
                    <p>활동: 환경 보호 활동</p>
                    <p>봉사: 지역 청소 활동</p>
                </div>
            </div>
        </Card>

        <Card title="프로젝트 기대 효과">
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div><strong>진로 탐색 역량 강화</strong><p className="text-slate-500">적성에 맞는 진로 발견</p></div>
                <div><strong>협업 및 소통 능력 향상</strong><p className="text-slate-500">의사소통 능력 향상</p></div>
                <div><strong>실제적 직업 경험</strong><p className="text-slate-500">직업 현실 이해</p></div>
                <div><strong>사회적 가치 창출</strong><p className="text-slate-500">지역사회 기여 및 공동체 의식 함양</p></div>
            </div>
        </Card>

        <p className="text-sm text-slate-500 mt-4 text-center">이번 공동체 프로젝트를 통해 학생들은 배움이 교실 안에만 머무는 것이 아니라, 세상과 연결되고 사람을 변화시킬 수 있다는 것을 경험할 수 있을 것입니다.</p>
    </div>
);

const Newsletter9 = () => (
    <div>
        <p className="mb-4">학문적 정직성이란 내가 배운 것을 정직하게 표현하고 다른 사람의 아이디어나 정보를 올바르게 사용하는 태도입니다. 우리는 공정성과 정의감을 바탕으로 인간의 존엄성 및 권리를 존중하며, 성실하고 정직하게 행동합니다.</p>

        <Card title="학문적 정직성이란?">
            <p>학문적 정직성을 실천하려면 다음 네 가지가 필요합니다.</p>
            <div className="grid grid-cols-2 gap-3 mt-3 text-sm text-center">
                <div className="bg-red-50 dark:bg-slate-700 rounded p-3 font-bold">원칙을 지키는 태도</div>
                <div className="bg-yellow-50 dark:bg-slate-700 rounded p-3 font-bold">ATL 역량<br/><span className="font-normal">(자기관리, 조사, 의사소통)</span></div>
                <div className="bg-blue-50 dark:bg-slate-700 rounded p-3 font-bold">정확한 출처 표기</div>
                <div className="bg-green-50 dark:bg-slate-700 rounded p-3 font-bold">비판적인 성찰</div>
            </div>
        </Card>

        <Card title="APA 출처 표기법">
            <p>미국 심리학회가 출판한 인용 스타일로, 본문에서 인용한 부분을 내주로 간략하게 표시하고 완전한 인용 정보는 참고 문헌에서 찾는 방식입니다.</p>
            <div className="mt-3 space-y-3 text-sm">
                <div>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">1. 본문 내 인용</p>
                    <p>→ 인용한 내용 바로 뒤 괄호 안에 출처를 간단히 표기</p>
                    <p className="mt-1"><strong>형식:</strong> (저자 성, 출판 연도, 페이지)</p>
                    <p><strong>예시:</strong> ~ 에 따르면...(○○○, 2025, p.20)</p>
                    <p className="text-slate-500">~ 에 필요한 것은...(ChatGPT에서 인용 또는 수정하여 사용, 2025)</p>
                </div>
                <div>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">2. 참고 문헌 목록</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>본문에 등장한 모든 출처는 문서 끝에 따로 목록으로 정리</li>
                        <li>순서는 저자명 기준 가나다/알파벳 순으로 정렬</li>
                        <li><strong>형식:</strong> 저자.(출판연도).책 제목(판). 출판사.</li>
                        <li><strong>예시:</strong> 최준영. (2020). 지구를 살리는 과학. 사이언스북스.</li>
                    </ul>
                </div>
            </div>
        </Card>

        <Card title="학문적 정직성을 지키는 10가지 실천">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>항상 진실하고 책임감 있게 행동하기</li>
                <li>부정행위나 부당한 이익 추구 금지</li>
                <li>의심스러운 상황에서는 정의롭게 행동하고 선생님께 알리기</li>
                <li>자신의 행동에 책임지고 결과 수용하기</li>
                <li>과제, 프로젝트에서 정직성 유지하기</li>
                <li>학교 규칙을 지키고 학문적 정직성의 의미 이해하기</li>
                <li>타인의 생각이나 작품은 반드시 인용하고 존중하기</li>
                <li>자신의 장점과 약점을 인식하고 노력하기</li>
                <li>디지털 환경에서도 협력과 공유의 윤리 실천하기</li>
                <li>시간을 잘 관리하고 미루는 습관을 고치기</li>
            </ol>
        </Card>

        <Card title="용북의 학문적 정직성 서약 — 우리의 약속">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>정직하게 학습하겠습니다.</strong><br/><span className="text-slate-500">과제, 프로젝트, 시험에서 정직하게 임하겠습니다.</span></li>
                <li><strong>표절을 하지 않겠습니다.</strong><br/><span className="text-slate-500">다른 사람의 아이디어나 작품을 사용할 때 반드시 출처를 밝히겠습니다.</span></li>
                <li><strong>부정행위를 하지 않겠습니다.</strong><br/><span className="text-slate-500">시험이나 과제에서 부당한 도움을 받거나 제공하지 않겠습니다.</span></li>
                <li><strong>책임감 있는 학습자가 되겠습니다.</strong><br/><span className="text-slate-500">과제를 성실히 수행하고, 내 학습에 대해 책임을 지겠습니다.</span></li>
                <li><strong>타인의 학습을 존중하겠습니다.</strong><br/><span className="text-slate-500">타인의 노력을 인정하고 공정한 학습 환경을 만들겠습니다.</span></li>
            </ol>
        </Card>

        <p className="text-sm text-slate-500 mt-4 text-center">정직한 출처 표기, 타인의 생각 존중, 스스로에 대한 성찰은 미래의 학자, 리더, 시민으로서 여러분을 더 빛나게 해줄 중요한 약속입니다.</p>
    </div>
);

const newsletters = [
  { id: 9, issue: 'YBIB 레터 3호', date: '2025. 11.', title: '정직함을 배우는 교실, 세상을 바꾸는 첫 걸음', Content: Newsletter9 },
  { id: 8, issue: 'YBIB 레터 2호', date: '2025. 10.', title: '배움이 세상과 만날 때: 함께 성장하는 여정', Content: Newsletter8 },
  { id: 7, issue: 'YBIB 레터 1호', date: '2025. 9.', title: '성장으로 이어지는 배움의 여정', Content: Newsletter7 },
  { id: 6, issue: '2026-22호', date: '2026. 3. 27.', title: '2026년 용북중학교 IB MYP 프로그램 안내', Content: Newsletter6 },
  { id: 5, issue: '2025-66호', date: '2025. 7. 10.', title: '모든 교과에서 피어나는 탐구와 소통의 순간들', Content: Newsletter5 },
  { id: 4, issue: '2025-53호', date: '2025. 6. 10.', title: '세상을 향한 눈을 키우는 교육: IB MYP의 세계적 맥락과 학습 전략', Content: Newsletter4 },
  { id: 3, issue: '2025-44호', date: '2025. 5. 12.', title: '[IB MYP 학습자상]에 대한 안내', Content: Newsletter3 },
  { id: 2, issue: '2025-35호', date: '2025. 4. 15.', title: 'IB MYP 수업과 평가에 대한 안내', Content: Newsletter2 },
  { id: 1, issue: '2025-7호', date: '2025. 3. 12.', title: '국제 바칼로레아(IB) 중학교 프로그램(MYP) 안내', Content: Newsletter1 },
];

export const LetterView: React.FC = () => {
    return (
        <div className="p-1">
             <header className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    <i className="fas fa-newspaper mr-2 text-blue-500"></i>YBIB 레터
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">용북중학교 IB 프로그램 소식</p>
            </header>
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md">
                {newsletters.map(({id, issue, title, date, Content}, index) => (
                    <AccordionItem key={id} title={`${issue} | ${title}`} defaultOpen={index === 0}>
                        <div className="mb-4 text-sm text-slate-500">발행일: {date}</div>
                        <Content />
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
};
