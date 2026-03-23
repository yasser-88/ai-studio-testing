/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { Jobs } from './components/Jobs';
import { Queue } from './components/Queue';
import { Configs } from './components/Configs';
import { Analytics } from './components/Analytics';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'jobs':
        return <Jobs />;
      case 'queue':
        return <Queue />;
      case 'configs':
        return <Configs />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'jobs': return 'Job Postings';
      case 'queue': return 'Review Queue';
      case 'configs': return 'AI Engine Configuration';
      case 'analytics': return 'Intelligence Overview';
      default: return 'ResumeAI';
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="ml-64 min-h-screen flex flex-col">
        <TopBar title={getTitle()} />
        <div className="flex-1">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
