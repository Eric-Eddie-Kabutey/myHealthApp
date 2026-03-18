import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'with' | 'without'>('with');

  return (
    <section className="relative w-full min-h-[600px] bg-slate-50 overflow-hidden flex items-center">

      <div 
        className="absolute inset-0 z-0 hidden md:block bg-cover bg-right-top"
        style={{ 
          backgroundImage: `url('https://www.teladochealth.com/content/dam/tdh-www/us/en/images/start/start-hero-td.jpg')`,

        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-8 items-center py-12">
        

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-8">
            Connect to a doctor in minutes by phone or video
          </h1>


          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            

            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setActiveTab('with')}
                className={`flex-1 py-4 text-center font-bold transition-all duration-200 ${
                  activeTab === 'with' 
                    ? 'text-emerald-600 border-b-4 border-emerald-600' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                With insurance
              </button>
              <button
                onClick={() => setActiveTab('without')}
                className={`flex-1 py-4 text-center font-bold transition-all duration-200 ${
                  activeTab === 'without' 
                    ? 'text-emerald-600 border-b-4 border-emerald-600' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                Without Insurance
              </button>
            </div>


            <div className="p-8">
              {activeTab === 'with' ? (
                <div className="animate-fadeIn">
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Millions of people have Teladoc through their health insurance. 
                    Set up your account and see if you’re covered.
                  </p>
                  
                  <div className="flex items-center gap-3 text-slate-700 mb-8 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full text-xs">
                      ✓
                    </span>
                    Teladoc is covered by most major insurers.
                  </div>

                  <button className="w-full md:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-200 mb-4">
                    Check my eligibility
                  </button>
                  
                  <p className="text-slate-400 text-sm">
                    Set up your account to see your discounted pricing.
                  </p>
                </div>
              ) : (
                <div className="animate-fadeIn">

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <PricingItem label="General Medical" price="$89" unit="/visit" />
                    <PricingItem label="Mental Health" price="$119" unit="/visit" />
                    <PricingItem label="Dermatology" price="$89" unit="/review" />
                    <PricingItem label="Nutrition" price="$89" unit="/visit" />
                  </div>
                  
                  <button className="w-full md:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-200">
                    Register now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="md:hidden mt-8 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://www.teladochealth.com/content/dam/tdh-www/us/en/images/start/start-hero-td.jpg" 
            alt="Family" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};


const PricingItem: React.FC<{ label: string; price: string; unit: string }> = ({ label, price, unit }) => (
  <div className="text-center p-3 rounded-xl border border-slate-50 bg-slate-50/50">
    <div className="font-bold text-slate-800 text-sm">{label}</div>
    <div className="text-emerald-600 font-extrabold text-xl mt-1">{price}</div>
    <div className="text-[10px] text-slate-400 uppercase tracking-wider">{unit}</div>
  </div>
);

export default HeroSection;