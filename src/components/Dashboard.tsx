import React from 'react';
import { TrendingUp, Bolt, MoreVertical, Sparkles, UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Dashboard() {
  const candidates = [
    { name: 'Julian Alvarez', role: 'Senior Machine Learning Engineer', score: 98, initial: 'JA' },
    { name: 'Sarah Chen', role: 'Principal Product Designer', score: 94, initial: 'SC' },
    { name: 'Marcus Reed', role: 'VP of Engineering', score: 91, initial: 'MR' },
    { name: 'Elena Kuznetsov', role: 'DevOps Lead', score: 89, initial: 'EK' },
  ];

  const activities = [
    { title: 'Bulk Upload Complete', desc: "420 resumes imported to 'Sales' cluster", time: '2m ago', icon: UploadCloud, color: 'text-slate-500' },
    { title: 'AI Ranking Finished', desc: 'Role: Principal Architect (Ref: #882)', time: '15m ago', icon: CheckCircle2, color: 'text-on-tertiary-container' },
    { title: 'Parser Exception', desc: 'Encrypted PDF detected from candidate ID 993', time: '1h ago', icon: AlertCircle, color: 'text-error' },
  ];

  return (
    <div className="p-8 space-y-10">
      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Total Resumes Processed</p>
            <h2 className="font-headline text-4xl font-extrabold mt-2">128,492</h2>
          </div>
          <div className="mt-6 flex items-center gap-2 text-on-tertiary-container">
            <TrendingUp size={18} />
            <span className="font-medium text-sm">+12.5% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Active Jobs</p>
            <h2 className="font-headline text-3xl font-bold mt-2 text-primary">1,240</h2>
          </div>
          <div className="mt-4 py-1 px-3 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full w-fit uppercase tracking-widest">
            System Scale
          </div>
        </div>

        <div className="bg-primary-container p-6 rounded-xl shadow-sm flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Bolt size={64} className="text-tertiary-fixed" />
          </div>
          <div className="relative z-10">
            <p className="text-on-primary-container font-semibold text-xs uppercase tracking-wider">Engine Status</p>
            <h2 className="font-headline text-xl font-bold mt-2">Optimal Efficiency</h2>
          </div>
          <div className="mt-4 flex items-center gap-3 relative z-10">
            <div className="h-1.5 flex-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed w-4/5"></div>
            </div>
            <span className="text-xs font-bold">80% Load</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="flex items-end justify-between px-2">
            <div>
              <h3 className="font-headline text-2xl font-bold">Top Ranking Candidates</h3>
              <p className="text-slate-500 text-sm mt-1">Cross-referenced across 45 vector dimensions</p>
            </div>
            <button className="text-sm font-bold text-primary hover:underline underline-offset-4">View All Analysis</button>
          </div>

          <div className="space-y-4">
            {candidates.map((c) => (
              <div key={c.name} className="bg-white p-4 rounded-xl flex items-center gap-6 group hover:bg-slate-50 transition-colors border border-slate-100">
                <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400">
                  {c.initial}
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-lg font-bold group-hover:text-primary transition-colors">{c.name}</h4>
                  <p className="text-sm text-slate-500">{c.role}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-slate-900">{c.score}%</div>
                  <div className="text-[10px] font-bold uppercase tracking-tighter text-on-tertiary-container">Match Score</div>
                </div>
                <button className="p-2 rounded-full hover:bg-white transition-colors">
                  <MoreVertical size={20} className="text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-96 space-y-8">
          <div className="bg-slate-100/50 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-slate-900 fill-slate-900" />
              <h3 className="font-headline font-bold text-lg">AI Smart Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-[10px] font-bold text-on-tertiary-container uppercase mb-1">Queue Alert</p>
                <p className="text-sm text-slate-700">The "Design Manager" queue has 45 pending resumes. Estimated processing time: 12 minutes.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-tertiary-fixed">
                <p className="text-[10px] font-bold text-on-tertiary-container uppercase mb-1">Talent Pattern</p>
                <p className="text-sm text-slate-700">Significant increase in candidates from 'FinTech' backgrounds over the last 48 hours.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-6 px-2">Recent Activity</h3>
            <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-200">
              {activities.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i} className="relative flex gap-6 px-2">
                    <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center z-10 border border-slate-100">
                      <Icon size={14} className={a.color} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{a.title}</p>
                      <p className="text-xs text-slate-500">{a.desc}</p>
                      <span className="text-[10px] text-slate-400 font-bold mt-1 inline-block">{a.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
