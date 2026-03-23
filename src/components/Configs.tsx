import React, { useState } from 'react';
import { Sliders, Filter, Tag, Sparkles, TrendingUp, X, PlusCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Configs() {
  const [weights, setWeights] = useState({ tech: 85, exp: 60, edu: 35 });

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      <div>
        <h2 className="font-headline text-3xl font-extrabold text-slate-900 tracking-tight mb-2">AI Engine Configuration</h2>
        <p className="text-slate-500 font-medium">Fine-tune the neural matching engine for high-precision talent discovery.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <Sliders className="text-primary" size={24} />
              <h3 className="font-headline text-xl font-bold">Core Logic Weights</h3>
            </div>
            
            <div className="space-y-10">
              {[
                { id: 'tech', label: 'Technical Skills', desc: 'Evaluation of hard skills and tool proficiency' },
                { id: 'exp', label: 'Experience', desc: 'Seniority, years in role, and career trajectory' },
                { id: 'edu', label: 'Education', desc: 'Academic background and relevant certifications' },
              ].map((w) => (
                <div key={w.id} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <label className="font-headline font-bold text-sm block mb-1">{w.label}</label>
                      <span className="text-xs text-slate-400">{w.desc}</span>
                    </div>
                    <span className="text-lg font-extrabold font-headline">{weights[w.id as keyof typeof weights]}%</span>
                  </div>
                  <input 
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900" 
                    max="100" min="0" type="range" 
                    value={weights[w.id as keyof typeof weights]}
                    onChange={(e) => setWeights({...weights, [w.id]: parseInt(e.target.value)})}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl space-y-6 border border-slate-100">
              <h4 className="font-headline font-bold text-sm flex items-center gap-2 text-slate-900">
                <Filter size={16} />
                Global Search Parameters
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Cross-Functional Matching', checked: true },
                  { label: 'Bias Mitigation Layer', checked: true },
                  { label: 'Deep Semantic Analysis', checked: false },
                ].map((p, i) => (
                  <label key={i} className="flex items-center justify-between cursor-pointer group">
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{p.label}</span>
                    <div className="relative inline-flex items-center">
                      <input defaultChecked={p.checked} className="sr-only peer" type="checkbox" />
                      <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:bg-slate-900 transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 space-y-6 shadow-sm">
              <h4 className="font-headline font-bold text-sm flex items-center gap-2 text-slate-900">
                <Tag size={16} />
                Keyword Management
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-2">Mandatory Tokens</p>
                  <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    {['React', 'Azure'].map(t => (
                      <span key={t} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-900 text-white text-[10px] rounded font-medium">
                        {t} <X size={10} className="cursor-pointer" />
                      </span>
                    ))}
                    <PlusCircle size={16} className="text-slate-300 cursor-pointer hover:text-slate-900" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-2">Exclusion Tokens</p>
                  <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-200 text-slate-600 text-[10px] rounded font-medium">
                      Legacy <X size={10} className="cursor-pointer" />
                    </span>
                    <PlusCircle size={16} className="text-slate-300 cursor-pointer hover:text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-4 space-y-6">
          <div className="relative overflow-hidden bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-tertiary-fixed/20 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={20} className="text-tertiary-fixed fill-tertiary-fixed" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Optimization Insight</p>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4 leading-tight">Increase "Technical Skills" weight to 92%</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Analysis of your recent hires for Senior Engineer roles suggests that candidate retention is 40% higher when technical scoring is prioritized.
              </p>
              <button className="w-full py-3 bg-tertiary-fixed text-slate-900 font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                <span>Apply Optimization</span>
                <TrendingUp size={16} />
              </button>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-headline font-bold text-sm mb-4">Last Modified</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-tertiary-fixed"></div>
                <div>
                  <p className="text-sm font-bold">2.4.1 Production Model</p>
                  <p className="text-xs text-slate-500">Updated by Sarah Chen · 2h ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 opacity-50">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-slate-400"></div>
                <div>
                  <p className="text-sm font-medium">2.4.0 Alpha Build</p>
                  <p className="text-xs text-slate-500">Deprecated · Oct 12, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline font-bold text-sm">Tokens Processed</h4>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-tertiary-container text-on-tertiary-container rounded">LIVE</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-3xl font-headline font-extrabold">1.2M</span>
                <span className="text-xs font-bold text-on-tertiary-container flex items-center gap-1">
                  <TrendingUp size={14} />
                  12%
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900 w-[75%]"></div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Monthly quota reset in 4 days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-slate-200 z-50">
        <p className="text-sm font-medium px-4 border-r border-slate-200 mr-2">Unsaved changes detected</p>
        <button className="px-6 py-2 bg-slate-100 text-slate-900 font-bold text-sm rounded-full hover:bg-slate-200 transition-colors">Discard</button>
        <button className="px-8 py-2 bg-primary text-on-primary font-bold text-sm rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Push to Production</button>
      </div>
    </div>
  );
}
