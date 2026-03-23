import React from 'react';
import { Plus, Filter, ArrowUpDown, Edit2, Archive, Trash2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Jobs() {
  const jobs = [
    { title: 'Senior Product Designer', dept: 'DESIGN', applicants: 124, trend: '+12', status: 'Active', posted: '2 days ago', location: 'Remote • Full-time' },
    { title: 'Lead AI Engineer', dept: 'ENGINEERING', applicants: 48, trend: '+3', status: 'Draft', posted: 'Just now', location: 'San Francisco • Hybrid' },
    { title: 'Talent Acquisition Manager', dept: 'PEOPLE', applicants: 12, trend: '-2', status: 'Filled', posted: '1 month ago', location: 'London • On-site' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold text-slate-900">Job Postings</h2>
          <p className="text-slate-500 mt-1">Manage and track your organization's active recruitment cycles.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-slate-100 text-slate-900 rounded-lg font-bold text-sm transition-all active:scale-95">
            Export Report
          </button>
          <button className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/10">
            <Plus size={18} />
            Post New Role
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Hiring Pipeline Growth</h3>
              <p className="text-sm text-slate-500">Candidates processed vs. Hires across all departments</p>
            </div>
            <span className="px-3 py-1 bg-slate-900 text-tertiary-fixed text-[10px] font-bold rounded-full uppercase tracking-tighter">
              AI INSIGHT: High Growth
            </span>
          </div>
          
          <div className="w-full h-48 flex items-end justify-between gap-2 px-2">
            {[40, 65, 55, 85, 60, 75, 95].map((h, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-t-lg transition-all duration-300 group relative",
                  i === 3 ? "bg-primary" : "bg-slate-100 hover:bg-slate-200"
                )}
                style={{ height: `${h}%` }}
              >
                {i === 3 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded font-bold">Peak</div>}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
              <span key={d} className="text-[10px] font-bold text-slate-400">{d}</span>
            ))}
          </div>
        </div>

        <div className="col-span-4 bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-on-tertiary-container fill-on-tertiary-container" />
              <span className="font-headline font-bold text-sm text-on-tertiary-container">AI RECRUITER ASSIST</span>
            </div>
            <h4 className="font-headline text-lg font-extrabold text-slate-900 leading-tight mb-4 italic">
              "Senior Frontend Dev roles are seeing 40% higher dropout rates at the Technical Screen stage."
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Consider shortening the take-home assignment or offering a live-coding alternative to retain high-intent candidates.
            </p>
          </div>
          <button className="mt-8 py-3 bg-white text-slate-900 font-bold text-sm rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            View Full Analysis
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Active Postings</h3>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100"><Filter size={18} /></button>
            <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100"><ArrowUpDown size={18} /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-none">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Role Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Applicants</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Posted</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {jobs.map((j, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="font-bold text-slate-900 font-headline">{j.title}</div>
                    <div className="text-xs text-slate-500">{j.location}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2.5 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600">{j.dept}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold">{j.applicants}</div>
                      <div className={cn(
                        "text-[10px] px-1.5 rounded font-bold",
                        j.trend.startsWith('+') ? "text-on-tertiary-container bg-tertiary-fixed/20" : "text-error bg-error/10"
                      )}>{j.trend}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        j.status === 'Active' ? "bg-tertiary-fixed shadow-[0_0_8px_rgba(137,245,231,0.6)]" : 
                        j.status === 'Draft' ? "bg-primary" : "bg-slate-400"
                      )}></div>
                      <span className="text-xs font-bold text-slate-900">{j.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-500">{j.posted}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {j.status === 'Draft' && (
                        <button className="text-[10px] font-bold uppercase tracking-widest text-primary bg-slate-100 px-3 py-1 rounded hover:bg-slate-200 transition-colors mr-2">Publish</button>
                      )}
                      <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 hover:text-slate-900"><Edit2 size={16} /></button>
                      <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 hover:text-slate-900"><Archive size={16} /></button>
                      {j.status !== 'Filled' && <button className="p-2 hover:bg-white rounded-lg transition-colors text-error/60 hover:text-error"><Trash2 size={16} /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-slate-50 flex justify-between items-center">
          <p className="text-xs text-slate-500">Showing 1-10 of 42 job postings</p>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-50 rounded-lg disabled:opacity-30" disabled><ChevronLeft size={18} /></button>
            <button className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
