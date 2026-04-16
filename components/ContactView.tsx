
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: string }> = ({ title, children, icon }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {icon && <i className={`fas ${icon} mr-3 text-blue-500`}></i>}
            {title}
        </h3>
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
            {children}
        </div>
    </div>
);

const LinkItem: React.FC<{ icon: string; label: string; href: string; description?: string }> = ({ icon, label, href, description }) => (
    <li className="flex items-start gap-3">
        <i className={`fas ${icon} mt-1 w-5 text-center text-blue-500 flex-shrink-0`}></i>
        <div>
            <a href={href} target="_blank" rel="noopener noreferrer"
               className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {label}
            </a>
            {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>}
        </div>
    </li>
);

export const ContactView: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
            {/* 헤더 배너 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 text-white text-center shadow-lg">
                <div className="text-4xl mb-2">🏠💬</div>
                <h2 className="text-2xl font-bold">학부모 소통방</h2>
                <p className="mt-1 text-blue-100 text-sm">학부모님과 함께 성장하는 공간입니다</p>
            </div>

            {/* 연락처 카드 */}
            <InfoCard title="YBIB 연구실 연락처" icon="fa-headset">
                <p>IB 프로그램에 대해 더 궁금한 점이 있으시면 언제든지 문의해주세요.</p>
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

            {/* IBO 관련 사이트 카드 */}
            <InfoCard title="📚 IB 학부모 참고 사이트" icon="fa-globe">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">IB 교육에 대해 더 깊이 알아볼 수 있는 공식 사이트들을 모았습니다.</p>
                <ul className="space-y-4">
                    <LinkItem
                        icon="fa-globe"
                        label="IBO 공식 홈페이지"
                        href="https://ibo.org/"
                        description="국제 바칼로레아 기구(IBO) 공식 사이트"
                    />
                    <LinkItem
                        icon="fa-book-open"
                        label="IB MYP 프로그램 소개"
                        href="https://ibo.org/programmes/middle-years-programme/"
                        description="중학교 프로그램(MYP)의 목표와 구조 안내"
                    />
                    <LinkItem
                        icon="fa-user-graduate"
                        label="IB 학습자상(Learner Profile)"
                        href="https://www.ibo.org/benefits/learner-profile/"
                        description="IB가 추구하는 10가지 학습자 자질 소개"
                    />
                    <LinkItem
                        icon="fa-school"
                        label="전북특별자치도교육청"
                        href="https://www.jbe.go.kr/"
                        description="전북 IB 교육 관련 공지 및 정책 안내"
                    />
                    <LinkItem
                        icon="fa-play-circle"
                        label="IB 교육 소개 영상 (TBC 다큐)"
                        href="https://youtu.be/sdY-T8bOPtU"
                        description="'학교, 미래를 보다' 시즌2 — IB 교육 이해 영상"
                    />
                </ul>
            </InfoCard>
        </div>
    );
};
