import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  ListOrdered, 
  Settings2, 
  BarChart3, 
  HelpCircle, 
  LogOut,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'queue', label: 'Queue', icon: ListOrdered },
    { id: 'configs', label: 'Configs', icon: Settings2 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-4 z-50 border-r border-slate-200/50">
      <div className="mb-8 px-2">
        <h1 className="font-headline font-extrabold text-slate-900 text-2xl tracking-tight">ResumeAI</h1>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Intelligence Suite</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out text-sm",
                isActive 
                  ? "text-slate-900 bg-white shadow-sm font-bold" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 pt-4 border-t border-slate-200">
        <button className="w-full bg-primary text-on-primary py-2.5 rounded shadow-sm font-semibold text-sm mb-4 active:scale-95 transition-transform flex items-center justify-center gap-2">
          <Plus size={16} />
          New Analysis
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 text-sm">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 text-sm">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
