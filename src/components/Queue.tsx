import React, { useState } from 'react';
import { Search, Filter, Verified, Download, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Queue() {
  const [selectedId, setSelectedId] = useState(1);

  const candidates = [
    { id: 1, name: 'Sarah Jenkins', role: 'Senior UX Designer', score: 98, tag: 'TOP MATCH', time: '2h ago', location: 'London, UK', initial: 'SJ' },
    { id: 2, name: 'Marcus Thorne', role: 'Product Designer', score: 84, tag: 'EXPERIENCED', time: '5h ago', location: 'Berlin, DE', initial: 'MT' },
    { id: 3, name: 'Elena Rodriguez', role: 'Visual Interaction Lead', score: 79, tag: null, time: 'Yesterday', location: 'Madrid, ES', initial: 'ER' },
    { id: 4, name: 'David Wu', role: 'Senior UX Designer', score: 72, tag: null, time: '2 days ago', location: 'Toronto, CA', initial: 'DW' },
  ];

  const selectedCandidate = candidates.find(c => c.id === selectedId) || candidates[0];

  return (
    <div className="flex gap-6 h-[calc(100vh-64px)] p-6 overflow-hidden">
      {/* Left Pane */}
      <section className="w-1/3 flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-headline text-lg font-bold text-slate-900">Review Queue <span className="text-slate-400 font-normal">(24)</span></h2>
          <button className="text-slate-400 hover:text-slate-900"><Filter size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
          {candidates.map((c) => (
            <div 
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={cn(
                "p-4 rounded-xl border-l-4 transition-all cursor-pointer shadow-sm",
                selectedId === c.id 
                  ? "bg-white border-primary" 
                  : "bg-slate-50 border-transparent hover:bg-slate-100"
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-slate-900">{c.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{c.role}</p>
                </div>
                <div className={cn(
                  "px-2 py-1 rounded text-xs font-bold",
                  selectedId === c.id ? "bg-slate-900 text-white" : "text-slate-500 bg-slate-200"
                )}>{c.score}/100</div>
              </div>
              <div className="flex gap-2 items-center mt-3">
                {c.tag && (
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-bold",
                    c.tag === 'TOP MATCH' ? "bg-tertiary-fixed/20 text-on-tertiary-container" : "bg-slate-200 text-slate-600"
                  )}>{c.tag}</span>
                )}
                <span className="text-[10px] text-slate-400 font-medium">{c.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Pane */}
      <section className="flex-1 flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="p-6 flex items-center justify-between border-b border-slate-50">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400">
              {selectedCandidate.initial}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline text-2xl font-bold text-slate-900">{selectedCandidate.name}</h2>
                <Verified size={20} className="text-tertiary-fixed-dim fill-tertiary-fixed-dim text-white" />
              </div>
              <p className="text-slate-500 font-medium">{selectedCandidate.role} • {selectedCandidate.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-semibold">
              <Download size={18} />
              Resume.pdf
            </button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">
            <div className="bg-white p-12 shadow-md min-h-full mx-auto max-w-2xl rounded-sm text-slate-900">
              <h3 className="text-3xl font-headline font-extrabold mb-1">{selectedCandidate.name}</h3>
              <p className="text-sm text-slate-400 mb-8 pb-4 border-b border-slate-100 uppercase tracking-widest">{selectedCandidate.role}</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Experience</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <p className="font-bold">Lead Product Designer @ FinTech Global</p>
                        <p className="text-xs text-slate-400">2019 — Present</p>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 italic">Spearheading the redesign of flagship mobile trading app...</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <p className="font-bold">UX Designer @ Creative Agency</p>
                        <p className="text-xs text-slate-400">2016 — 2019</p>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 italic">Collaborated with Fortune 500 clients on multi-platform ecosystems...</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Education</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold">MA Digital Design @ Royal College of Art</p>
                    <p className="text-xs text-slate-400">2014 — 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="w-80 bg-slate-50 p-6 flex flex-col gap-6 border-l border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-slate-900 fill-slate-900" />
                <h3 className="font-headline font-bold text-sm tracking-tight">AI MATCH ANALYSIS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-on-tertiary-container font-bold mb-1">Key Strength</p>
                  <p className="text-sm text-slate-700 leading-relaxed">Candidate demonstrates exceptional system design skills matching the "Scalability" requirement.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-on-tertiary-container font-bold mb-1">Potential Gap</p>
                  <p className="text-sm text-slate-700 leading-relaxed">Experience with Web3 frameworks is not explicitly mentioned in the text analysis.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <p className="text-xs text-tertiary-fixed font-bold mb-1">AI Recommendation</p>
                  <p className="text-sm text-white font-medium leading-relaxed">Highly recommend for technical interview stage. Cultural fit scores 9.2/10.</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Skill Radar</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Visual Design</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Leadership</span>
                    <span>88%</span>
                  </div>
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-4">
            <button className="bg-error text-white px-6 py-2.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
              Reject
            </button>
            <button className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded font-bold text-sm hover:bg-slate-200 transition-colors">
              Hold
            </button>
          </div>
          <div className="flex gap-4">
            <button className="bg-slate-100 text-slate-900 px-8 py-2.5 rounded font-bold text-sm hover:bg-slate-200 transition-colors">
              Schedule Interview
            </button>
            <button className="bg-primary text-white px-10 py-2.5 rounded font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
              Accept Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
