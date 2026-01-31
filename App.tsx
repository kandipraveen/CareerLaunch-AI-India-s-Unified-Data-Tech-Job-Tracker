
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SearchPanel from './components/SearchPanel';
import CompanyDirectory from './components/CompanyDirectory';
import JDParser from './components/JDParser';
import JobCard from './components/JobCard';
import { Job } from './types';
import { 
  Target, 
  ShieldCheck,
  TrendingUp,
  Mail,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  // Load jobs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('careerlaunch_jobs');
    if (stored) {
      const jobs = JSON.parse(stored);
      // Auto-clear jobs older than 30 days
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      const freshJobs = jobs.filter((j: any) => {
        const date = new Date(j.postedDate).getTime();
        return isNaN(date) || date > thirtyDaysAgo;
      });
      setSavedJobs(freshJobs);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('careerlaunch_jobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  const handleJobsFound = (newJobs: Job[]) => {
    // Merge only unique jobs based on link
    setSavedJobs(prev => {
      const existingLinks = new Set(prev.map(j => j.link));
      const uniqueNew = newJobs.filter(j => !existingLinks.has(j.link));
      return [...uniqueNew, ...prev];
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Market Intelligence</h1>
                <p className="text-slate-500">Official career tracking for Indian domestic markets.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-widest">Live Portals Tracked</span>
              </div>
            </header>

            {/* Quick Stats - Updated to show only 2 essential metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Tracked Roles', val: savedJobs.length, icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Portal Sources', val: '80+', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-3xl font-black text-slate-800 tracking-tight">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Discoveries */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Intelligence Discoveries</h2>
                <button 
                  onClick={() => setActiveTab('search')}
                  className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1"
                >
                  Scanner Portals <TrendingUp className="w-4 h-4" />
                </button>
              </div>
              {savedJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedJobs.slice(0, 6).map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-3xl py-20 text-center">
                  <p className="text-slate-400 italic">No job intelligence stored yet. Run a scan to populate your feed.</p>
                </div>
              )}
            </section>
          </div>
        );
      case 'search':
        return <SearchPanel onJobsFound={handleJobsFound} />;
      case 'directory':
        return <CompanyDirectory />;
      case 'parser':
        return <JDParser onSaveJob={(job) => handleJobsFound([job])} />;
      case 'help':
        return (
          <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Support & Mission</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  CareerLaunch AI (DataBharat) is committed to eliminating job fraud and third-party dependency. 
                  By focusing exclusively on <strong>Official Career Portals</strong>, we ensure that early-career 
                  professionals in India find legitimate, high-quality opportunities in tech, PSU, manufacturing, and banking sectors.
                </p>
                <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl space-y-4">
                  <h3 className="text-indigo-900 font-bold">Platform Directives:</h3>
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Zero Third Party:</strong> No LinkedIn, Naukri, or Indeed. Official domains only.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Early Career Focus:</strong> Optimized for Freshers, GETs, and Interns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Sector Intelligence:</strong> Automated filtering for Indian PSUs and Tech Giants.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col items-center text-center">
                <div className="bg-slate-900 text-white p-3 rounded-full mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Need Custom Market Analysis?</h3>
                <p className="text-slate-500 text-sm mb-6">Contact our intelligence desk for specialized hiring reports or portal integrations.</p>
                <a 
                  href="https://praveenkumarkandi-portfolio.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                >
                  View Developer Portfolio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
