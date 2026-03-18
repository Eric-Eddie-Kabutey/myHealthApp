import React, { useState } from 'react';

interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
  metrics: { value: string; text: string }[];
  ctaLink: string;
  imageUrl: string;
  imageAlt: string;
}

const tabData: TabContent[] = [
  {
    id: 'health-plans',
    label: 'HEALTH PLANS',
    title: 'A high-quality care experience—anywhere, anytime',
    description: 'Create meaningful outcomes and measurable ROI for your population. Teladoc Health delivers and orchestrates care, anticipating health needs and guiding targeted actions that drive impact at scale.',
    metrics: [
      { value: '100+', text: 'U.S. health plans partner with Teladoc Health' },
      { value: '100M+', text: 'Americans have access to Teladoc Health' }
    ],
    ctaLink: '/organizations/health-plans',
    imageUrl: 'https://www.teladochealth.com/content/dam/tdh-www/us/en/images/home/new-home/HP-TABS.jpg',
    imageAlt: 'A seated man smiles while looking at his cell phone.'
  },
  {
    id: 'employers',
    label: 'EMPLOYERS',
    title: 'Great health outcomes for greater value',
    description: 'Build a benefits package that puts better health within reach for your workforce, while containing your costs. Teladoc Health provides more complete and personalized care that addresses comprehensive health needs.',
    metrics: [
      { value: '50%+', text: 'Fortune 500 Employers partner with Teladoc Health' },
      { value: '#1', text: 'most recognized virtual care brand' }
    ],
    ctaLink: '/organizations/employers',
    imageUrl: 'https://www.teladochealth.com/content/dam/tdh-www/us/en/images/home/new-home/EMP-TABS.jpg',
    imageAlt: 'Two professionals reviewing information on a tablet.'
  },
  {
    id: 'hospitals',
    label: 'HOSPITALS & HEALTH SYSTEMS',
    title: 'Connected care solutions for smarter hospitals and health systems',
    description: 'Expand staffing capacity, deliver a unified patient experience and empower clinical teams to work at the top of their license. Teladoc Health’s purpose-built technology helps hospitals streamline operations.',
    metrics: [
      { value: '60%+', text: 'of the top 100 U.S. hospitals work with Teladoc Health' },
      { value: '20+ Years', text: 'experience leading virtual care innovations' }
    ],
    ctaLink: '/organizations/hospitals-health-systems',
    imageUrl: 'https://www.teladochealth.com/content/dam/tdh-www/us/en/images/home/new-home/HHS-TABS.jpg',
    imageAlt: 'A patient smiling while speaking with a virtual healthcare professional.'
  }
];

const VirtualCareTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); 

  return (
    <section className="py-20 bg-white font-sans">

      <div className="max-w-[1250px] mx-auto px-6 lg:px-8">
        

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
            Transforming virtual care into a catalyst for better health
          </h2>
        </div>


        <div className="flex flex-wrap justify-center gap-4 md:gap-12 border-b border-gray-100 mb-16">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`pb-4 text-xs md:text-sm font-bold tracking-widest transition-all relative ${
                activeTab === index 
                ? 'text-emerald-600' 
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-600 animate-in slide-in-from-left-full duration-300" />
              )}
            </button>
          ))}
        </div>


        <div className="grid lg:grid-cols-2 gap-16 items-center">
          

          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
              {tabData[activeTab].title}
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {tabData[activeTab].description}
            </p>


            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              {tabData[activeTab].metrics.map((metric, i) => (
                <div key={i} className="flex-1">
                  <div className="text-4xl font-black text-emerald-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-snug">
                    {metric.text}
                  </p>
                </div>
              ))}
            </div>


            <a 
              href={tabData[activeTab].ctaLink}
              className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-600 hover:text-white transition-all group"
            >
              Learn more
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>


          <div className="order-1 lg:order-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-100/50 border border-slate-50">
              <img 
                src={tabData[activeTab].imageUrl} 
                alt={tabData[activeTab].imageAlt}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VirtualCareTabs;