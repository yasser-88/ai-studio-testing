import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Filter, 
  Share2, 
  Sparkles, 
  Network, 
  AlertTriangle,
  ChevronRight,
  Plus
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';

export function Analytics() {
  const barData = [
    { name: 'JAN', actual: 40, projected: 55 },
    { name: 'FEB', actual: 65, projected: 60 },
    { name: 'MAR', actual: 85, projected: 70 },
    { name: 'APR', actual: 75, projected: 80 },
    { name: 'MAY', actual: 95, projected: 85 },
    { name: 'JUN', actual: 80, projected: 90 },
  ];

  const pieData = [
    { name: 'Optimal', value: 98.4 },
    { name: 'Remaining', value: 1.6 },
  ];

  const roles = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering Dept.', total: 1248, screening: 872, screeningPct: 70, interviewing: 142, offered: 12, trend: 'up' },
    { title: 'Lead Product Designer', dept: 'Design Studio', total: 612, screening: 244, screeningPct: 40, interviewing: 88, offered: 4, trend: 'down' },
    { title: 'Data Science Architect', dept: 'Intelligence Team', total: 459, screening: 390, screeningPct: 85, interviewing: 62, offered: 18, trend: 'flat' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">Intelligence Overview</h2>
          <p className="text-slate-500 mt-2 font-medium">Visualizing real-time talent acquisition dynamics and AI audit trails.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
            <Calendar size={16} className="mr-2 text-slate-400" />
            <select className="bg-transparent border-none text-sm font-semibold text-slate-900 focus:ring-0 p-0 cursor-pointer outline-none">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
            <Filter size={16} className="mr-2 text-slate-400" />
            <select className="bg-transparent border-none text-sm font-semibold text-slate-900 focus:ring-0 p-0 cursor-pointer outline-none">
              <option>All Roles</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Product</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity active:scale-95">
            <Share2 size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Hiring Velocity & Projections</h3>
              <p className="text-xs text-slate-400 font-medium">Monthly throughput vs predicted growth target</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-900"></span>
                <span className="text-xs font-semibold">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="text-xs font-semibold">Projected</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="actual" fill="#0f172a" radius={[2, 2, 0, 0]} barSize={20} />
                <Bar dataKey="projected" fill="#cbd5e1" radius={[2, 2, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-primary-container text-white rounded-xl p-6 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-lg font-bold tracking-tight">AI Integrity</h3>
            <p className="text-xs text-on-primary-container font-medium">Bias-detection confidence score</p>
            
            <div className="flex-1 flex flex-col items-center justify-center py-6">
              <div className="relative w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={75}
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      <Cell fill="#89f5e7" />
                      <Cell fill="#3f465c" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold font-headline">98.4<span className="text-xl">%</span></span>
                  <span className="text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase">Optimal</span>
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-tighter">False Positives</p>
                <p className="text-sm font-bold">0.02%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-tighter">Data Drift</p>
                <p className="text-sm font-bold">Negligible</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Pipeline Distribution by Role</h3>
              <p className="text-xs text-slate-400 font-medium">Active candidate volume across stages</p>
            </div>
            <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
              View all departments <ChevronRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Role Title</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Candidates</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Screening</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Interviewing</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Offered</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {roles.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{r.title}</span>
                        <span className="text-[10px] font-medium text-slate-400">{r.dept}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold">{r.total.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="bg-slate-400 h-full" style={{ width: `${r.screeningPct}%` }}></div>
                        </div>
                        <span className="text-xs font-bold">{r.screening}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold">{r.interviewing}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-on-tertiary-container">{r.offered}</span>
                    </td>
                    <td className="px-6 py-4">
                      {r.trend === 'up' && <TrendingUp size={18} className="text-tertiary-fixed-dim" />}
                      {r.trend === 'down' && <TrendingDown size={18} className="text-error" />}
                      {r.trend === 'flat' && <TrendingUp size={18} className="text-on-tertiary-container rotate-90" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-100/50 rounded-xl p-5 backdrop-blur-md border border-white">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={18} className="text-on-tertiary-container fill-on-tertiary-container" />
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">AI Recommendation</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Increase <span className="font-bold">Frontend Engineering</span> referral bonuses by 15%. Current velocity is 8% below target for Q3 projection.
            </p>
          </div>
          <div className="bg-slate-100/50 rounded-xl p-5 backdrop-blur-md border border-white">
            <div className="flex items-center gap-3 mb-3">
              <Network size={18} className="text-slate-500" />
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">Network Health</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Integration with LinkedIn Recruiter is operating at <span className="font-bold">99.9% uptime</span>. Syncing 12k records every 15 mins.
            </p>
          </div>
          <div className="bg-slate-100/50 rounded-xl p-5 backdrop-blur-md border border-white">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle size={18} className="text-error" />
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">Attrition Risk</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Candidate ghosting in the <span className="font-bold">Technical Round</span> has spiked by 12% this week. Audit suggested.
            </p>
          </div>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 z-50 group">
        <Plus size={24} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Create Custom View
        </span>
      </button>
    </div>
  );
}
